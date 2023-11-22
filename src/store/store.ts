import { createStore, applyMiddleware } from "redux";
import reducers, { initialState } from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const store = createStore(
  reducers,
  initialState,
  applyMiddleware(thunk, logger)
);
