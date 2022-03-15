import { ActionType } from "../action-types";
import { Action, State } from "../actions";

const initialState = {
  markAllSent: false,
};

const reducer = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.MARKALLSENT:
      return {
        ...state,
        markAllSent: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
