import React, { Component, Fragment } from 'react';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import {connect} from 'react-redux';

import App from '../containers/app';
import Modals from '../containers/modals';

class Client extends Component {
  constructor(props) {
    super(props);

    this.history = createBrowserHistory();
  }

  render() {
    return (
      <Fragment>
        <Router history={this.history}>
          <App />
        </Router>
        <Modals history={this.history}/>
      </Fragment>
    )
  }
}

export default connect()(Client);