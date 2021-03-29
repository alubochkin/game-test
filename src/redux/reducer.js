import { FIELD_GAME, RESULT_CORDINATE } from './types';


export default function reducer(state = {}, action) {
  switch (action.type) {
    
    case FIELD_GAME:
      return { 
        ...state, 
        fieldGame: action.payload.fieldGame     
      };

      case RESULT_CORDINATE:
      return { 
        ...state, 
        resultCordinate: action.payload.resultCordinate   
      };

      
    default:
      return state;
  }
}