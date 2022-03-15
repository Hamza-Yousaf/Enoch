import { ActionType } from "../action-types";
import { Action, State } from "../actions";

const initialValue: string = "popular";

const reducer = (state: string = initialValue, action: Action) => {
  switch (action.type) {
    case ActionType.CURRENT_ENTERTAINMENT_TAB:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
