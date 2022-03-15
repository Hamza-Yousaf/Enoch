import { ActionType } from "../action-types";
import { Action, State } from "../actions";

const initialState = 10;

const reducer = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.NUMBERS_TO_PLAY_IN_TREASURE_HUNT:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
