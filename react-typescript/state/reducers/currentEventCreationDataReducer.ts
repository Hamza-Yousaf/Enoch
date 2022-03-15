import { ActionType } from "../action-types";
import { Action, State } from "../actions";

const initialValue: any = {};

const reducer = (state: any = initialValue, action: Action) => {
  switch (action.type) {
    case ActionType.CURRENT_EVENT_CREATION_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
