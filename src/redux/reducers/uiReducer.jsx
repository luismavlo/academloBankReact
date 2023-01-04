import { types } from "../types/types";

const initialState = {
  isLoading: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiSetIsLoadding:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};
