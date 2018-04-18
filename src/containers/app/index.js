import React, {Component} from 'react';
import {connect} from 'react-redux';
import {accountActions} from '../../store/actions';
import {Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';

import "./style.less";

import routes from '../../routes';
import NotFound from '../not-found';

class App extends Component {

  static propTypes = {
    account: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  componentWillMount() {
    if (this.props.account.hasToken === null) {
      this.props.dispatch(
        accountActions.remind()
      );
    }
  }

  render() {
    // If checking token
    // if (this.props.account.hasToken === null) {
    //   return (
    //     <div className="App">
    //       Загрузка...
    //     </div>
    //   );
    // }

    return (
      <div className="App">
          <Switch>
            { routes.map( route => <Route key={ route.path } { ...route } /> ) }
          </Switch>
      </div>
    );
  }
}

export default connect(state => ({
  account: state.account
}))(App);