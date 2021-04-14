import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider as Redux } from "react-redux";
import createSagaMiddleware from "redux-saga";
import createReducer from "../store/reducers";
import SearchPage from "../pages/Search";
import ArtistPage from "../pages/Artist";
import { createBrowserHistory } from "history";
import rootSaga from "../store/sagas";

const history = createBrowserHistory();

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store: any = createStore(
  createReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

const RouterWrapper = () => {
  return (
    <Router history={history}>
      <Redux store={store}>
        <Switch>
          <Route exact path="/:id/:artist" component={ArtistPage} />
          <Route exact path="/" component={SearchPage} />
        </Switch>
      </Redux>
    </Router>
  );
};

export default RouterWrapper;
