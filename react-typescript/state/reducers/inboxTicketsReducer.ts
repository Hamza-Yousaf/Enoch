import { TicketsInInbox } from "../../Component/utilsData/TicketsTableData";
import { ActionType } from "../action-types";
import { Action, State } from "../actions";

const initialState = TicketsInInbox;

const reducer = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.GETINBOXTICKETS:
      return state;

    case ActionType.DELETETICKETSFROMINBOX:
      let newArray = [...state];

      return newArray;

    default:
      return state;
  }
};

export default reducer;
