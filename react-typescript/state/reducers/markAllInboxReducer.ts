import { ActionType } from "../action-types";
import { Action, State } from "../actions";

const initialState = {
  markAllInbox: false,
};

const reducer = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.MARKALLINBOX:
      return {
        ...state,
        markAllInbox: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
