import React from 'react';
import { hydrate } from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/store.js';
import App from './containers/app';
import http from "./utils/http.js";

http.init(store);

hydrate(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
