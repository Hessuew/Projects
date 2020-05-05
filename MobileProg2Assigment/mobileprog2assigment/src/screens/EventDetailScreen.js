import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Image,
  ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { deleteEvent } from '../api/EventApi'

class EventDetailScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Event Details',
      headerStyle: {
        backgroundColor: 'white',
      },
    }
  };

  render() {
    const event = this.props.navigation.getParam('event').event;
    const sports = this.props.navigation.getParam('event').sports;

    const onEventDeleted = this.props.navigation.getParam('eventDeletedCallback');

    return event.distance ?
      <ImageBackground source={require('../assets/bac2.png')} style={styles.container}>
        <View style={styles.row}>
          <Icon.Button
            name="edit"
            backgroundColor="#000066"
            size={30}
            style={{ marginRight: -15 }}
            onPress={() =>
              this.props.navigation.navigate('EventForm', {
                event: {event: event, sports: sports}
              })
            }>
          </Icon.Button>
          <Icon.Button
            name="trash"
            backgroundColor="#CA300E"
            size={25}
            style={{ marginRight: -10 }}
            onPress={() =>
              Alert.alert(
                'Delete?',
                'Cannot be undone',
                [
                  { text: 'Cancel' },
                  { text: 'OK', onPress: () => { deleteEvent(event, onEventDeleted) } }
                ],
                { cancelable: false },
              )
            }>
          </Icon.Button>
        </View>
        <Image style={styles.image} source={event.image && { uri: event.image }} />
        <Text style={styles.sport}>{event.sport}</Text>
        <Text style={styles.otherInfo}>Date: {event.dateString}</Text>
        <Text style={styles.otherInfo}>Distance: {event.distance}</Text>
        <Text style={styles.otherInfo}>Duration: {event.duration}</Text>
        <Text style={styles.otherInfo}>Notes: {event.notes}</Text>
      </ImageBackground >
      :
      <ImageBackground source={require('../assets/bac2.png')} style={styles.container}>
        <View style={styles.row}>
          <Icon.Button
            name="edit"
            backgroundColor="#000066"
            size={30}
            style={{ marginRight: -15 }}
            onPress={() =>
              this.props.navigation.navigate('EventForm', {
                event: {event: event, sports: sports}
              })
            }>
          </Icon.Button>
          <Icon.Button
            name="trash"
            backgroundColor="#CA300E"
            size={25}
            style={{ marginRight: -10 }}
            onPress={() =>
              Alert.alert(
                'Delete?',
                'Cannot be undone',
                [
                  { text: 'Cancel' },
                  { text: 'OK', onPress: () => { deleteEvent(event, onEventDeleted) } }
                ],
                { cancelable: false },
              )
            }>
          </Icon.Button>
        </View>
        <Image style={styles.image} source={event.image && { uri: event.image }} />
        <Text style={styles.sport}>{event.sport}</Text>
        <Text style={styles.otherInfo}>Date: {event.dateString}</Text>
        <Text style={styles.otherInfo}>Duration: {event.duration}</Text>
        <Text style={styles.otherInfo}>Notes: {event.notes}</Text>
      </ImageBackground >
  }
}

const styles = StyleSheet.create({
  sport: {
    fontSize: 32,
    marginBottom: 20,
    color: 'white'
  },
  otherInfo: {
    fontSize: 20,
    marginBottom: 20,
    color: 'white'
  },
  image: {
    width: '100%',
    aspectRatio: 2,
    marginBottom: 16
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 16,
    marginBottom: 16,
    paddingLeft: 16,
    paddingRight: 16
  },
  container: {
    alignItems: 'center',
    flex: 1,
  },
  listContainer: {
    borderWidth: 0.5,
    width: 200,
    borderColor: 'grey'
  }
});

export default EventDetailScreen;