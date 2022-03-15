import { ActionType } from "../action-types";
import { Action, State } from "../actions";

const initialState = {
  messageTab: "INBOX",
};

const reducer = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.CHANGEMESSAGETAB:
      return {
        ...state,
        messageTab: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
