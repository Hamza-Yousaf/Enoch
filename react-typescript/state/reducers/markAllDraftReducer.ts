import { ActionType } from "../action-types";
import { Action, State } from "../actions";

const initialState = {
  markAllDraft: false,
};

const reducer = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.MARKALLDRAFT:
      return {
        ...state,
        markAllDraft: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
