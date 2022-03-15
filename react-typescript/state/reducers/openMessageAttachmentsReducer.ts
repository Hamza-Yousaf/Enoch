import { ActionType } from "../action-types";
import { Action, State } from "../actions";

const initialState = false;

const reducer = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.OPENMESSAGEATTACHMENTS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
