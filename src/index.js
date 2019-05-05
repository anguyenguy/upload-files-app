import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";
import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.css";
import "assets/css/demo.css";

// Implement redux
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import filesReducer from './store/reducers/files';

// pages for this product
import Components from "views/Components/Components.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import RegisterPage from "views/RegisterPage/RegisterPage.jsx";
import DashboardPage from "views/DashboardPage/DashboardPage.jsx";

var hist = createBrowserHistory();

const rootReducer = combineReducers({
  fil: filesReducer
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route path="/login-page" component={LoginPage} />
        <Route path="/register-page" component={RegisterPage} />
        <Route path="/dashboard-page" component={DashboardPage} />
        <Route path="/" component={Components} />
      </Switch>
    </Router>
  </Provider>
,
  document.getElementById("root")
);
