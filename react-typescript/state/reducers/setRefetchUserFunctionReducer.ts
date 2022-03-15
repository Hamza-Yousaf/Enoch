import { ActionType } from "../action-types";
import { Action, State } from "../actions";

const initialState = () => {};

const reducer = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.REFETCH_USER_FUNCTION:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
