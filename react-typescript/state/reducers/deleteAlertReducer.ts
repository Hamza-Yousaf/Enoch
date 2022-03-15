import { ActionType } from "../action-types";
import { Action, State } from "../actions";

const initialState = "";

const reducer = (state: string = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SETDELETEALERT:
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
