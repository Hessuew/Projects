import React, { Component } from 'react';
import { Button } from 'react-native';
import Settings from '../ui/ChangePassword';
import { signout } from '../api/EventApi';

export default class ChangePasswordScreen extends Component {
  _isMounted = false;

  static navigationOptions = ({ navigation }) => {

    onSignedOut = () => {
      navigation.navigate('Auth');
    }
    return {
      title: 'Settings',
      headerStyle: {
        backgroundColor: 'white',
      },
      headerRight: () =>
        <Button
          color='#000066'
          title='log out'
          onPress={() => signout(onSignedOut)} />
    }
  };

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onPasswordUpdated = (event) => {
    this.props.navigation.navigate('Settings');
  }

  render() {
    return (
        <Settings
          onPasswordUpdated={this.onPasswordUpdated}
        />
    );
  }
}