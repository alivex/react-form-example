import {  UPDATE_FORM,  SUBMIT_FORM,  SUBMIT_FORM_SUCCESS } from './types';
import AppState from './AppState';


const reducer = (state = AppState, action) => {
 
  switch (action.type) {
    case UPDATE_FORM:
        return {
          ...state,
          fields: action.payload,
          formDisable: false
        }
    case SUBMIT_FORM:
        return {
          ...state,
          formDisable: action.payload
        }
    case SUBMIT_FORM_SUCCESS:
        return {
          ...state,
          fields: {},
          formDisable: action.payload
        }
    default:
      return state;
  }
  
};

export default reducer;
