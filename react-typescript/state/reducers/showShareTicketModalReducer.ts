import { ActionType } from "../action-types";
import { Action, State } from "../actions";

const initialState = false;

const reducer = (state: boolean = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SHOWSHARETICKETMODAL:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
