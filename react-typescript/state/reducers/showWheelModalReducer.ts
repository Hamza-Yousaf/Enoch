import { ActionType } from "../action-types";
import { Action, State } from "../actions";

const initialState = true;

const reducer = (state: boolean = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SHOWWHEELMODAL:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
