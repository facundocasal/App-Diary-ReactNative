import { ADD_MEMORY, LOAD_MEMORIES } from "./memories.actions";

import Memory from "../models/memory.model";

const initialState = {
  memories: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_MEMORY:
      const newMemory = new Memory(
        action.payload.id,
        action.payload.userEmail,
        action.payload.title,
        action.payload.description,
        action.payload.date,
        action.payload.image,
        action.payload.lat,
        action.payload.lng,
        action.payload.place
      )
      return {
        ...state,
        memories: state.memories.concat(newMemory),
      };
      case LOAD_MEMORIES:  
        return {
          ...state,
          memories: action.memories.map(item=> new Memory(
            item.id.toString(),
            item.userEmail,
            item.title,
            item.description,
            item.date,
            item.image,
            item.lat,
            item.lng,
            item.place
          )),
        };
    default:
      return state;
  }
};
