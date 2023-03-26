import { LOG_OUT, SET_USER } from "./user.actions";

import Memory from "../models/memory.model";

const initialState = {
  user: null,
  userEmail: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
        userEmail: action.email
      };
    case LOG_OUT: {
      return {
        ...state , 
        user : action.user
      }
    }
    default:
      return state;
  }
};
