import { types } from "../types/types";

const initialState = {};

export const transferReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.historyTransfer:
      return {
        ...state,
        transfers: [...action.payload],
      };

    default:
      return state;
  }
};
