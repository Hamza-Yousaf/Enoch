import { ActionType } from "../action-types";
import { Action, State } from "../actions";

const initialValue: string = "bonuses";

const reducer = (state: string = initialValue, action: Action) => {
  switch (action.type) {
    case ActionType.CURRENT_ENTERTAINMENT_SUB_MENU:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
