import { ActionType } from "../action-types";
import { Action, State } from "../actions";

const initialValue: number = 0;

const reducer = (state: number = initialValue, action: Action) => {
  switch (action.type) {
    case ActionType.CURRENTEVENTCREATIONSTAGE:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
