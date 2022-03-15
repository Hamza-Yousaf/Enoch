import { ActionType } from "../action-types";
import { Action, State } from "../actions";

const initialValue: string = "";

const reducer = (state: string = initialValue, action: Action) => {
  switch (action.type) {
    case ActionType.CURRENT_EVENT_CREATION_ID:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
