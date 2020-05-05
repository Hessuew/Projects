import React, { Component } from 'react';
import EventForm from '../ui/EventForm';

export default class EventFormScreen extends Component {
  _isMounted = false;

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('event') ? 'Edit Event' : 'New Event',
      headerStyle: {
        backgroundColor: 'white',
      },
    }
  };

  state = {
    event: [],
    sports: [],
  }

  componentDidMount() {
    this._isMounted = true;
    const currentEvent = this.props.navigation.getParam('event').event;
    const currentSports = this.props.navigation.getParam('event').sports;

    if (this._isMounted) {
      if (currentEvent) {
        this.setState(prevState => ({
          event: prevState.event = currentEvent
        }));
      }
      if (currentSports) {
        this.setState(prevState => ({
          sports: prevState.sports = currentSports
        }));
      }
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onEventUpdated = (event) => {
    this.props.navigation.popToTop();
  }

  render() {
    return (
      <EventForm
        event={this.state.event}
        sports={this.state.sports}
        onEventAdded={this.props.navigation.getParam('eventAddedCallback')}
        onEventUpdated={this.onEventUpdated}
      />
    );
  }
}