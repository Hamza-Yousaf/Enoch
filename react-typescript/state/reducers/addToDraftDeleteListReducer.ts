import { ActionType } from "../action-types";
import { Action, State } from "../actions";

const initialState = [];

const reducer = (state: any = [], action: Action) => {
  switch (action.type) {
    case ActionType.ADDTODRAFTDELETELIST:
      if (action.payload.length === 1) {
        if (state.includes(action.payload[0])) {
          var filteredAry = state.filter(
            (e: string) => e !== action.payload[0]
          );
          return [...filteredAry];
        } else {
          return [...state, ...action.payload];
        }
      } else if (action.payload.length > 1 || action.payload.length === 0) {
        return [...action.payload];
      }

    default:
      return state;
  }
};

export default reducer;
