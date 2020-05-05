import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Picker,
  Button,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView
} from 'react-native';
//import GridList from '../ui/GridList';
import { withFormik } from 'formik';
import * as yup from 'yup';
import { uploadEvent } from '../api/EventApi';
import ImgPicker from '../ui/ImgPicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const EventForm = (props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    props.values.date = date; //Math.round(date.getTime());
    props.values.dateString = date.toString().substr(4, 17)
    hideDatePicker();
  };

  const setEventImage = (image) => {
    props.setFieldValue('imageUri', image.uri);
  }

  return props.values.distance != null ?
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ImageBackground source={require('../assets/bac2.png')} style={styles.container}>
        <View style={styles.viewcontainer}>
          <ImgPicker image={props.event.image} onImagePicked={setEventImage} />
          <View style={styles.longFormInput}>
          <Picker
            style={styles.picker}
            selectedValue={props.values.sport}
            onValueChange={(itemValue, itemIndex) => { props.setFieldValue('sport', itemValue) }}>
            {props.values.sport != -1 &&
              <Picker.Item label={'Pick a sport'} value={-1} />
            }
            {props.sports.map((item, index) => {
              return (<Picker.Item label={item.sport} value={item.sport} key={index} />)
            })}
          </Picker>
          </View>
          <Text style={styles.validationText}> {props.touched.sport && props.errors.sport}</Text>
          <TouchableOpacity onPress={showDatePicker}
            style={styles.longFormInput}
          >
            <TextInput
              value={props.values.dateString}
              style={styles.text}
              placeholderTextColor="white"
              placeholder='Date'
              editable={false}
            />
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="datetime"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          <Text style={styles.validationText}> {props.errors.date}</Text>
          
          <View style={styles.row}>
            <TextInput
              value={props.values.distance}
              style={styles.shortFormInput}
              placeholderTextColor="white"
              placeholder='Distance'
              onBlur={props.handleBlur('distance')}
              keyboardType={'numeric'}
              onChangeText={number => { props.setFieldValue('distance', number) }}
            />
            <Text style={styles.validationText}> {props.touched.distance && props.errors.distance}</Text>
            <TextInput
              value={props.values.duration}
              style={styles.shortFormInput}
              placeholderTextColor="white"
              placeholder='Duration'
              onBlur={props.handleBlur('duration')}
              onChangeText={text => { props.setFieldValue('duration', text) }}
            />
            <Text style={styles.validationText}> {props.touched.duration && props.errors.duration}</Text>
          </View>
          <TextInput
            value={props.values.notes}
            style={styles.longFormInput}
            placeholderTextColor="white"
            placeholder='Notes'
            onBlur={props.handleBlur('notes')}
            onChangeText={text => { props.setFieldValue('notes', text) }}
          />
          <Text style={styles.validationText}> {props.touched.notes && props.errors.notes}</Text>

          <Button
            title='Submit'
            onPress={() => props.handleSubmit()}
          />
        </View>
      </ImageBackground>

    </KeyboardAvoidingView>
    :
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ImageBackground source={require('../assets/bac2.png')} style={styles.container}>
        <View style={styles.viewcontainer}>
          <ImgPicker image={props.event.image} onImagePicked={setEventImage} />
          <View style={styles.longFormInput}>
          <Picker
            style={styles.picker}
            selectedValue={props.values.sport}
            onValueChange={(itemValue, itemIndex) => { props.setFieldValue('sport', itemValue) }}>

            {props.sports.map((item, index) => {
              return (<Picker.Item label={item.sport} value={item.sport} key={index} />)
            })}
          </Picker>
          </View>
          <Text style={styles.validationText}> {props.touched.sport && props.errors.sport}</Text>
          <TouchableOpacity onPress={showDatePicker}
            style={styles.longFormInput}
          >
            <TextInput
              value={props.values.dateString}
              style={styles.text}
              placeholderTextColor="white"
              placeholder='Date'
              editable={false}
            />
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="datetime"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          <Text style={styles.validationText}> {props.errors.date}</Text>
          <View style={styles.row}>
            <TextInput
              value={props.values.duration}
              style={styles.shortFormInput}
              placeholderTextColor="white"
              placeholder='Duration'
              onBlur={props.handleBlur('duration')}
              onChangeText={text => { props.setFieldValue('duration', text) }}
            />
            <Text style={styles.validationText}> {props.touched.duration && props.errors.duration}</Text>
            {props.values.sport == 'Running' &&
              <TextInput
                value={props.values.distance}
                style={styles.shortFormInput}
                placeholderTextColor="white"
                placeholder='Distance (km)'
                onBlur={props.handleBlur('distance')}
                keyboardType={'numeric'}
                onChangeText={number => { props.setFieldValue('distance', number) }}
              />
            }
            <Text style={styles.validationText}> {props.touched.distance && props.errors.distance}</Text>
          </View>
          <TextInput
            value={props.values.notes}
            style={styles.longFormInput}
            placeholderTextColor="white"
            placeholder='Notes'
            onBlur={props.handleBlur('notes')}
            onChangeText={text => { props.setFieldValue('notes', text) }}
          />
          <Text style={styles.validationText}> {props.touched.notes && props.errors.notes}</Text>

          <Button
            title='Submit'
            onPress={() => props.handleSubmit()}
          />
        </View>
      </ImageBackground>

    </KeyboardAvoidingView>
}

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32
  },
  container: {
    alignItems: 'center',
    flex: 1,
  },
  viewcontainer: {
    width: 300,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'flex-end'
  },
  formInput: {
    borderColor: '#B5B4BC',
    borderWidth: 1,
    padding: 8,
    height: 50,
    color: 'white',
    width: '75%',
    marginBottom: 16,
    marginTop: 16
  },
  validationText: {
    color: 'white'
  },
  longFormInput: {
    width: '100%',
    height: 40,
    color: 'white',
    borderColor: '#B5B4BC',
    borderWidth: 1,
    margin: 8,
  },
  shortFormInput: {
    width: '50%',
    height: 40,
    color: 'white',
    borderColor: '#B5B4BC',
    borderWidth: 1,
    margin: -1,
  },
  picker: {
    width: '100%',
    color: 'white',
    height: 40
  },
  text: {
    color: 'white'
  }
});

export default withFormik({
  mapPropsToValues: ({ event }) => ({
    sport: event.sport,
    dateString: event.dateString,
    distance: event.distance,
    duration: event.duration,
    notes: event.notes,
    imageUri: null
  }),
  enableReinitialize: true,
  validationSchema: (props) => yup.object().shape({
    sport: yup.string().required(),
    date: yup.date().max(new Date()
      , "Date cannot be in the future"),
    distance: yup.number().min(0).max(200).nullable(),
    duration: yup.string().max(10).nullable(),
    notes: yup.string().max(50).nullable(),
  }),
  handleSubmit: (values, { props }) => {
    console.log(props);
    console.log(values);
    values.date = values.dateString;

    if (props.event.id) {
      values.id = props.event.id;
      values.createdAt = props.event.createdAt;
      values.image = props.event.image;
      uploadEvent(values, props.onEventUpdated, { updating: true })
    } else {
      uploadEvent(values, props.onEventUpdated, { updating: false })
    }
  },
})(EventForm);