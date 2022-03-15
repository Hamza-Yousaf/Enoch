import { ActionType } from "../action-types";
import { Action, State } from "../actions";

const initialState = {
  showCreateTicketInputs: false,
};

const reducer = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SHOWCREATETICKETINPUTS:
      return {
        ...state,
        showCreateTicketInputs: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
