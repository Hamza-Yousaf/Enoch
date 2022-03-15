import { ActionType } from "../action-types";
import { Action, State } from "../actions";

const initialValue: string = "bonuses";

const reducer = (state: any = [], action: Action) => {
  switch (action.type) {
    case ActionType.GET_ALL_POST_DATAs:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
