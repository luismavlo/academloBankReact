import { types } from "../types/types";

export const setIsLoading = (isLoading) => ({
  type: types.uiSetIsLoadding,
  payload: isLoading,
});
