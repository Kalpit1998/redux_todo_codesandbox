import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const middleware = [];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

// export const store = createStore(rootReducer, applyMiddleware(...middleware));
export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
