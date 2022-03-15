import { ActionType } from "../action-types";
import { Action, State } from "../actions";

const initialValue: string = "upcoming";

const reducer = (state: string = initialValue, action: Action) => {
  switch (action.type) {
    case ActionType.CURRENT_KENO_TOURNAMENT_TAB:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
