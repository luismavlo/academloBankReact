import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { transferReducer } from "./transferReducer";
import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  transfers: transferReducer,
});
