import React from 'react';
import { hydrate } from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/store.js';
import Client from './client';
import http from "./utils/http.js";

http.init(store);

hydrate(
  <Provider store={store}>
      <Client/>
  </Provider>,
  document.getElementById('app')
);
