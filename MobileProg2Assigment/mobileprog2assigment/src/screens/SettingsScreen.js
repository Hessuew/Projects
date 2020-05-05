import React, { Component } from 'react';
import { Button } from 'react-native';
import Settings from '../ui/Settings';
import { signout, getUserInfos } from '../api/EventApi';

export default class SettingsScreen extends Component {
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

  state = {
    userInfo: {
      email: '',
      name: '',
      lenght: '',
      weight: '',
      birthDate: '',
      id: ''
    }
  }

  componentDidMount() {
    console.log(this.props)
    this._isMounted = true;
    getUserInfos(this.onEventsReceived);
    this.props.navigation.addListener("didFocus", () => {
      getUserInfos(this.onEventsReceived);
    })
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onEventsReceived = (userInfoList) => {
    if (this._isMounted) {
      if (userInfoList[0].name) {
        this.setState(prevState => ({
          userInfo: prevState.userInfo = userInfoList[0]
        }));
      }
      if (userInfoList[0].email) {
        this.setState(prevState => ({
          userInfo: { ...prevState.userInfo, email: userInfoList[0].email, id: userInfoList[0].id },
        }));
      }
    }
  }

  onUserInfoUpdated = (event) => {
    this.props.navigation.navigate('EventList');
  }

  render() {
    return (
        <Settings
          userInfo={this.state.userInfo}
          onUserInfoUpdated={this.onUserInfoUpdated}
          navigate={this.props.navigation.navigate}
        />
    );
  }
}