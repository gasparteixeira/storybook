import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createStorybookListener from "storybook-addon-redux-listener";
import createSagaMiddleware from "redux-saga";

import Counter from "../src/components/Counter";
import reducers from "../src/reducers";
import rootSaga from "../src/sagas";

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

if (process.env.NODE_ENV === "storybook") {
  const reduxListener = createStorybookListener();
  middlewares.push(reduxListener);
}

const createStoreWithMiddleware = reducers => {
  return createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
};

const configureStore = () => createStoreWithMiddleware(reducers);

export default configureStore;
