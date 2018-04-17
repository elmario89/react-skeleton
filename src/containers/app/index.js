import React, {Component} from 'react';
import {connect} from 'react-redux';
import {accountActions} from '../../store/actions';
import {Route, Router, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import PropTypes from 'prop-types';
import { renderRoutes } from "react-router-config"

import "./style.less";

import { routes } from "../../routes";
import Home from '../home';
import Main from '../main';
import Login from '../login';
import NotFound from '../not-found';
import Modals from '../modals';

class App extends Component {

  static propTypes = {
    account: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.history = createBrowserHistory();
  }

  componentWillMount() {
    if (this.props.account.hasToken === null) {
      this.props.dispatch(
        accountActions.remind()
      );
    }
  }

  render() {
    // If checking token
    if (this.props.account.hasToken === null) {
      return (
        <div className="App">
          Загрузка...
        </div>
      );
    }

    return (
      <div className="App">
        <Router history={this.history}>
          { renderRoutes(routes) }
        </Router>
        <Modals history={this.history}/>
      </div>
    );
  }
}

export default connect(state => ({
  account: state.account
}))(App);