import { ActionType } from "../action-types";
import { Action, State } from "../actions";

const initialValue: string = "all_bets";

const reducer = (state: string = initialValue, action: Action) => {
  switch (action.type) {
    case ActionType.CURRENT_KENO_WINNERS_TAB:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
