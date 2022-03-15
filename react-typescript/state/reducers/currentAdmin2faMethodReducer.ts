import { ActionType } from "../action-types";
import { Action, State } from "../actions";

const initialValue: string = "APP AUTHENTICATOR";

const reducer = (state: string = initialValue, action: Action) => {
  switch (action.type) {
    case ActionType.CURRENT_ADMIN_2FA_METHOD:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
