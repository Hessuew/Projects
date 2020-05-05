import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  FlatList,
  Text,
  View,
  ImageBackground
} from 'react-native';
import { getEvents, signout } from '../api/EventApi';
import { ListItem, Divider } from 'react-native-elements';
import ActionButton from 'react-native-action-button';

class EventList extends Component {
  _isMounted = false;

  static navigationOptions = ({ navigation }) => {


    onSignedOut = () => {
      navigation.navigate('Auth');
    }

    return {
      title: 'Event List',
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
    eventList: [],
    sportList: [],
    selectedIndex: 0
  }

  onEventAdded = (event) => {
    if (this._isMounted) {
      this.setState(prevState => ({
        eventList: [...prevState.eventList, event]
      }));
      this.props.navigation.popToTop();
    }
  }

  onEventDeleted = () => {
    if (this._isMounted) {
      var newEventList = [...this.state.eventList];
      newEventList.splice(this.state.selectedIndex, 1);

      this.setState(prevState => ({
        eventList: prevState.eventList = newEventList
      }));

      this.props.navigation.popToTop();
    }
  }

  onEventsReceived = (eventList, sportList) => {
    if (this._isMounted) {
      this.setState(prevState => ({
        eventList: prevState.eventList = eventList
      }));
      this.setState(prevState => ({
        sportList: prevState.sportList = sportList
      }));
    }
  }

  componentDidMount() {
    this._isMounted = true;
    getEvents(this.onEventsReceived);
    this.props.navigation.addListener("didFocus", () => {
      getEvents(this.onEventsReceived);
    })
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  showActionButton = () =>
    <ActionButton
      buttonColor='#000066'
      onPress={() => this.props.navigation.navigate('EventForm', { event: { sports: this.state.sportList }, eventAddedCallback: this.onEventAdded })}
    />

  render() {
    return this.state.eventList.length > 0 ?
      <ImageBackground source={require('../assets/bac2.png')} style={styles.container}>
        <FlatList
          data={this.state.eventList}
          ItemSeparatorComponent={() => <Divider style={{ backgroundColor: 'black' }} />}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <ListItem
                containerStyle={styles.listItem}
                title={item.sport}
                subtitle={`Date: ${item.date} \nDuration: ${item.duration}`}
                titleStyle={styles.titleStyle}
                subtitleStyle={styles.subtitleStyle}
                leftAvatar={{
                  size: 'large',
                  rounded: false,
                  source: item.image && { uri: item.image }
                }}
                onPress={() => {
                  this.setState(prevState => ({ selectedIndex: prevState.selectedIndex = index }))
                  this.props.navigation.navigate('EventDetail', { event: { event: item, sports: this.state.sportList }, eventDeletedCallback: this.onEventDeleted })
                }
                }

              />
            );
          }
          }
        />
        {this.showActionButton()}
      </ImageBackground> :
      <ImageBackground source={require('../assets/bac2.png')} style={styles.container}>
        <Text style={styles.emptyTitle}>No Events found</Text>
        <Text style={styles.emptySubtitle}>Add a new event using the + button below</Text>
        {this.showActionButton()}
      </ImageBackground>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listItem: {
    marginTop: 8,
    marginBottom: 8
  },
  titleStyle: {
    fontSize: 30
  },
  subtitleStyle: {
    fontSize: 18
  },
  emptyTitle: {
    fontSize: 32,
    marginBottom: 16
  },
  emptySubtitle: {
    fontSize: 18,
    fontStyle: 'italic'
  }
});

export default EventList;