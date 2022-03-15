import { ActionType } from "../action-types";
import { Action, State } from "../actions";

const initialState = {
  activeContent:"all-connecttion",
  receivedNetworkConnect: ""
};


const reducer = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.CURRENT_NETWORK_CHANGE:
      return {
        ...state,
        activeContent:action.payload
      };
      case ActionType.RECEIVED_NETWORK_CONNECT:
        return {
          ...state,
          receivedNetworkConnect:action.payload
        };
      
    default:
      return state;
  }
};

export default reducer;
