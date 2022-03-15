import { ActionType } from "../action-types";
import { Action, State } from "../actions";

const initialState = false;

const reducer = (state: boolean = false, action: Action) => {
  switch (action.type) {
    case ActionType.SHOWDELETECONFIRMMODAL:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
