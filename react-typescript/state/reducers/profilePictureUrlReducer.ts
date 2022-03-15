import { ActionType } from "../action-types";
import { Action, State } from "../actions";

const initialState: any = "";

const reducer = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.PROFILEPICTUREURL:
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
