import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage';
import uuid4 from 'uuid/v4';

export function login({ email, password }) {
  auth().signInWithEmailAndPassword(email, password)
    .then((value) => console.log(value))
    .catch(function (e) {
      console.log(e)
      alert(e)
    })
}

export function signup({ email, password, displayName }) {
  auth().createUserWithEmailAndPassword(email, password)
    .then((userInfo) => {
      let userData = { email: email, name: displayName };
      addUserInfo(userData);
      userInfo.user.updateProfile({ displayName: displayName.trim() })
        .then(() => { })
    })
}

export function subscribeToAuthChanges(authStateChanged) {
  auth().onAuthStateChanged((user) => {
    authStateChanged(user);
  })
}

export function signout(onSignedOut) {
  auth().signOut()
    .then(() => {
      onSignedOut();
    })
}

reauthenticate = (currentPassword) => {
  var user = auth().currentUser;
  var cred = auth.EmailAuthProvider.credential(
    user.email, currentPassword);
  return user.reauthenticateWithCredential(cred);
}

export function changePassword(currentPassword, newPassword, updateComplete) {
  reauthenticate(currentPassword).then(() => {
    var user = auth().currentUser;
    user.updatePassword(newPassword).then(() => {
      alert("Password updated!");
      updateComplete();
    }).catch((error) => { console.log(error); });
  }).catch((error) => { console.log(error); });
}

export function updateEvent(event, updateComplete) {
  event.updatedAt = firestore.FieldValue.serverTimestamp();
  console.log("Updating event in firebase");

  firestore()
    .collection('SportEvents')
    .doc(event.id).update(event)
    .then(() => updateComplete(event))
    .catch((error) => console.log(error));
}

export function updateUserInfo(userInfo, updateComplete) {
  userInfo.updatedAt = firestore.FieldValue.serverTimestamp();
  console.log("Updating userInfo in firebase");

  firestore()
    .collection('UserInfos')
    .doc(userInfo.id).update(userInfo)
    .then(() => updateComplete(userInfo))
    .catch((error) => console.log(error));
}

export function deleteEvent(event, deleteComplete) {
  console.log(event);

  firestore()
    .collection('SportEvents')
    .doc(event.id).delete()
    .then(() => deleteComplete())
    .catch((error) => console.log(error));
}

export async function getEvents(eventsRetreived) {

  var eventList = [];
  var currentUser = null;
  if (auth().currentUser) {
    currentUser = auth().currentUser.email;
  }
  var snapshot = await firestore()
    .collection('SportEvents')
    .where("email", "==", currentUser)
    .orderBy('createdAt')
    .get()

  snapshot.forEach((doc) => {
    const eventItem = doc.data();
    eventItem.id = doc.id;
    eventItem.dateString = doc.data().date

    eventList.push(eventItem);
  });
  var sportsList = [];
  var snapshot = await firestore()
    .collection('Sports')
    .orderBy('sport')
    .get()

  snapshot.forEach((doc) => {
    const sportItem = doc.data();
    sportsList.push(sportItem);
  });


  eventsRetreived(eventList, sportsList);
}

export async function getUserInfos(eventsRetreived) {

  var currentUser = null;
  if (auth().currentUser) {
    currentUser = auth().currentUser.email;
  }
  var userInfoList = [];
  var snapshot = await firestore()
    .collection('UserInfos')
    .where("email", "==", currentUser)
    .get()

  snapshot.forEach((doc) => {
    const userInfoItem = doc.data();
    userInfoItem.id = doc.id;

    userInfoList.push(userInfoItem);
  });
  eventsRetreived(userInfoList);
}

export function uploadEvent(event, onEventUploaded, { updating }) {

  if (event.imageUri) {
    const fileExtension = event.imageUri.split('.').pop();
    console.log("EXT: " + fileExtension);

    var uuid = uuid4();

    const fileName = `${uuid}.${fileExtension}`;
    console.log(fileName);

    var storageRef = storage().ref(`events/images/${fileName}`);

    storageRef.putFile(event.imageUri)
      .on(
        storage.TaskEvent.STATE_CHANGED,
        snapshot => {
          console.log("snapshot: " + snapshot.state);
          console.log("progress: " + (snapshot.bytesTransferred / snapshot.totalBytes) * 100);

          if (snapshot.state === storage.TaskState.SUCCESS) {
            console.log("Success");
          }
        },
        error => {
          unsubscribe();
          console.log("image upload error: " + error.toString());
        },
        () => {
          storageRef.getDownloadURL()
            .then((downloadUrl) => {
              console.log("File available at: " + downloadUrl);

              event.image = downloadUrl;

              delete event.imageUri;

              if (updating) {
                console.log("Updating....");
                updateEvent(event, onEventUploaded);
              } else {
                console.log("adding...");
                addEvent(event, onEventUploaded);
              }
            })
        }
      )
  } else {
    console.log("Skipping image upload");

    delete event.imageUri;

    if (updating) {
      console.log("Updating....");
      updateEvent(event, onEventUploaded);
    } else {
      console.log("adding...");
      addEvent(event, onEventUploaded);
    }
  }
}

export function addEvent(event, addComplete) {
  event.createdAt = firestore.FieldValue.serverTimestamp();
  var currentUser = null;
  if (auth().currentUser) {
    currentUser = auth().currentUser.email;
  }
  console.log(currentUser)
  firestore()
    .collection('SportEvents')
    .add({
      email: currentUser,
      createdAt: event.createdAt,
      sport: event.sport,
      date: event.date,
      distance: event.distance,
      duration: event.duration,
      notes: event.notes,
      image: event.image
    })
    .then(() =>
      addComplete(event))
    .catch((error) => console.log(error));
}

function addUserInfo(userData) {
  firestore()
    .collection('UserInfos')
    .add({
      createdAt: firestore.FieldValue.serverTimestamp(),
      email: userData.email,
      name: userData.name
    })
    .then(() =>
      console.log()
    )
    .catch((error) => console.log(error));
}
    /*
var date = new Date(doc.data().date.seconds * 1000);
    var dateString = date.getDate() + "."
    + date.getMonth() + "." + date.getFullYear()+ " "
    + date.getHours() + ":" + date.getMinutes() + ":"
    + date.getSeconds();
    eventItem.date = dateString;
*/