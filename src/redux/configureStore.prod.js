import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";

import thunk from "redux-thunk";

export default function configureStoreProd(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
