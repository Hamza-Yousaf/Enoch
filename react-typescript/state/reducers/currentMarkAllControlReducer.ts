import { ActionType } from "../action-types";
import { Action, State } from "../actions";

const initialValue: string = "check";

const reducer = (state: string = initialValue, action: Action) => {
  switch (action.type) {
    case ActionType.CURRENTMARKALLCONTROL:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
