import express from "express";
import React from 'react';
import http from "http";
import path from 'path';
import ReactDOMServer from "react-dom/server";
import { Provider } from "redux";
import { StaticRouter, Switch, Route } from "react-router";
import { renderRoutes, matchRoutes } from "react-router-config";

import { routes } from "./routes";
import store from './store/store';
import Home from './containers/home';

const app = express();
const server = http.createServer(app);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '../dist')));

app.use((req, res) => {
  const { url } = req;

  // const promises = matchRoutes(routes, url).map(({route, match}) => (
  //   store.dispatch(route.loadData(match))
  // ));
  let context = {};

    const content = ReactDOMServer.renderToString( 
      <StaticRouter location={url} context={context}>
        { renderRoutes(routes) }
      </StaticRouter>
    );

  const serializedState = JSON.stringify(store.getState())

  res.render('index', { content, serializedState });

});

server.listen(3000, () => console.log(3000));
