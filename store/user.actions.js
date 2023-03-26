export const SET_USER =  "SET_USER"
export const LOG_OUT = "LOG_OUT"

export const createCurretUser = (user , email) => {
    return async (dispatch) => {
      try {
        dispatch({
        type: SET_USER,
        user ,
        email
        });
      } catch (error) {
        console.log( error.message);
      }
    };
  };
export const logOutUser = () =>{
  return async (dispatch) =>{
    try {
      dispatch({
        type: LOG_OUT ,
        user : null
      })
    } catch (error) {
      
    }
  }
}