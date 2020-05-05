import React, { Component } from 'react';
import {
  Text,
  FlatList,
  StyleSheet,
  Button,
  ImageBackground,
  View
} from 'react-native';
import { ListItem, Divider } from 'react-native-elements';
import { signout } from '../api/EventApi';

class InformationScreen extends Component {
  static navigationOptions = ({ navigation }) => {

    onSignedOut = () => {
      navigation.navigate('Auth');
    }

    return {
      title: 'Information',
      headerStyle: {
        backgroundColor: 'white',
      },
      headerRight: () =>
        <Button
          color= '#000066'
          title='log out'
          onPress={() => signout(onSignedOut)} />
    }
  };
  
  state = {
    requirements: [{
      header: 'Requirements',
      registeration: 'Done',
      login: 'Done',
      passwordChange: 'Done',
      logout: 'Done',
      splashScreen: 'Done',
      eventListView: 'Done',
      eventAdding: 'Done',
      eventEdit: 'Done',
      eventDelete: 'Done',
      logoAdding: 'I combined part 10&11 as agreed',
      photoAdd: 'Done and shows in listView',
      multipleScreens: 'Done',
      ownDataEdit: 'Done',
      sportsFromServer: 'Done',
    }]  
  }

    render() {
      return (
        <ImageBackground source={require('../assets/bac2.png')} style={styles.container}>
          <View style={styles.viewcontainer}>
          <Text style={styles.text}>This app was made by Juhani Juusola</Text>
          <Text style={styles.text}>ETA17SP</Text>
          </View>
          <FlatList
          data={this.state.requirements}
          ItemSeparatorComponent={() => <Divider style={{ backgroundColor: 'black' }} />}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <ListItem
                containerStyle={styles.listItem}
                title={item.header}
                subtitle={
                `Käyttäjän rekisteröinti: ${item.registeration} 
                \nLogin: ${item.login}
                \nPassword change: ${item.passwordChange}
                \nLogout: ${item.logout}
                \nSplashScreen: ${item.splashScreen}
                \nEventListView: ${item.eventListView}
                \nAdding event: ${item.eventAdding}
                \nEdit event: ${item.eventEdit}
                \nDelete event: ${item.eventDelete}
                \nAdd logo: ${item.logoAdding}
                \nAdd photo: ${item.photoAdd}
                \nMultiple screens: ${item.multipleScreens}
                \nEdit users data: ${item.ownDataEdit}
                \nSports from server: ${item.sportsFromServer}
                `}
                titleStyle={styles.titleStyle}
                subtitleStyle={styles.subtitleStyle}              
              />
            );
          }
          }
        />
        </ImageBackground >
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,   
    },
    viewcontainer: {
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    text: {
      fontStyle: 'italic',
      fontSize: 24,
      marginBottom: 32,
      color: 'white'
    },
    listItem: {
      marginTop: 8,
      marginBottom: 8
    },
    titleStyle: {
      fontSize: 30,
      marginBottom: 10
    },
    subtitleStyle: {
      fontSize: 18
    },
  });
  export default InformationScreen;