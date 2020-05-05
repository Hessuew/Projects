import React, { Component } from 'react';
import AuthForm from '../ui/AuthForm';
import { login, signup, subscribeToAuthChanges } from '../api/EventApi';

class LoginScreen extends Component {
  _isMounted = false;

  state = {
    authMode: 'login'
  }

  componentDidMount() {
    this._isMounted = true;
    subscribeToAuthChanges(this.onAuthStateChanged)
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onAuthStateChanged = (user) => {
    if (user !== null) {
      this.props.navigation.navigate('App');
    }
  }

  switchAuthMode = () => {
    if (this._isMounted) {
    this.setState(prevState => ({
      authMode: prevState.authMode === 'login' ? 'signup' : 'login'
    }));
  }
  }

  render() {
    return (
      <AuthForm
        login={login}
        signup={signup}
        authMode={this.state.authMode}
        switchAuthMode={this.switchAuthMode}
      />
    );
  }
}


export default LoginScreen;