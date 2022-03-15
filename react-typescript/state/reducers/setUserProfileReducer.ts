import { ActionType } from "../action-types";
import { Action, State } from "../actions";

const initialState = {};

const reducer = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_USER_PROFILE:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
