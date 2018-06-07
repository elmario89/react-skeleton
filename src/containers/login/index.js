import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export class Login extends Component {

  static propTypes = {
    //login: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    account: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      isRestore: false
    }
  }

  componentWillMount() {
    if (this.props.account.hasToken) {
      this.props.history.replace('/main');
    }
  }

  changeView = () => {
    this.setState({isRestore: !this.state.isRestore});
  };

  restorePassword = () => {
    console.log('restored');
  };

  render() {
    return (
      <div>
        { !this.state.isRestore &&
          <from className="login">
            <input type="email" placeholder="email"/>
            <input type="password" placeholder="password"/>
            <button className="restore" onClick={this.changeView}>go to restore</button>
          </from>
        }
        { this.state.isRestore &&
          <from className="restoreForm">
            <input type="email" placeholder="email"/>
            <button className="restore" onClick={this.restorePassword}>restore</button>
            <button className="login" onClick={this.changeView}>cancel</button>
          </from>
        }
      </div>
    );
  }
}

export default connect(state => ({
  account: state.account,
  isLoading: state.account.loginWait
}))(Login);
