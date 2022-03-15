import { ActionType } from "../action-types";
import { Action, State } from "../actions";

const initialState = {
  innerPath: "",
};

const reducer = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.CHANGEINNERPATH:
      return {
        ...state,
        innerPath: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
