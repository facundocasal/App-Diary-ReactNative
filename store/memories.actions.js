import { deleteItem, fetchMemories, insertMemories } from "../db";

import MAP from "../constants/map";

export const ADD_MEMORY = "ADD_MEMORY";
export const LOAD_MEMORIES = "LOAD_MEMORIES";
export const DELETE_MEMORY = "DELETE_MEMORY"

export const addMemories = (userEmail, title, description, image, location) => {
  return async (dispatch) => {
    try {
      console.log("estoy en add memories " , userEmail)
      const date = new Date().toLocaleString("es-AR");
      image = image || "https://cdn-icons-png.flaticon.com/512/85/85488.png";
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${MAP.KEY_AP}`
      );
      if (!response.ok) {
        throw new Error("no se ha podido comunicar con Google Maps API");
      }
      const resData = await response.json();
      if (!resData.results) {
        throw new Error(
          "No se han encontrado datos para la coordenadas selecionadas"
        );
      }
      const place = resData.results[0].formatted_address;

      const result = await insertMemories(
        userEmail,
        title,
        description,
        date,
        image,
        place,
        location.lat,
        location.lng
      );
      dispatch({
        type: ADD_MEMORY,
        payload: {
          id: result.insertId,
          userEmail,
          title,
          description,
          date,
          image,
          lat: location.lat,
          lng: location.lng,
          place,
        },
      });
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  };
};

export const loadMemories = (userEmail) => {
  return async (dispatch) => {
    try {
      const result = await fetchMemories(userEmail);
      dispatch({ type: LOAD_MEMORIES, memories: result.rows._array });
    } catch (err) {
      throw err;
    }
  };
};

export const deleteMemory = (memoryId , userEmail) =>{
  return async (dispatch) =>{
    try {
      await deleteItem(memoryId)
      const result = await fetchMemories(userEmail);
      dispatch({ type: LOAD_MEMORIES, memories: result.rows._array });
    } catch (error) {
      console.log(error)
    }
  }
}