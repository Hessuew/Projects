import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    Button,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import { withFormik } from 'formik';
import * as yup from 'yup';
import { updateUserInfo } from '../api/EventApi';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const UserInfoForm = (props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    props.values.date = date; //Math.round(date.getTime());
    props.values.dateString = date.toString().substr(4, 11)
    hideDatePicker();
  };
    return (
        <ImageBackground source={require('../assets/bac2.png')} style={styles.container}>
          <View style={styles.viewcontainer}>
            <Text style={styles.headerText}>User Information</Text>
            <TextInput
                value={props.values.name}
                style={styles.longFormInput}
                placeholderTextColor="white"
                placeholder='Name'
                onBlur={props.handleBlur('name')}
                onChangeText={text => { props.setFieldValue('name', text) }}
            />
            <Text style={styles.validationText}> {props.touched.name && props.errors.name}</Text>
            <TextInput
                value={props.values.lenght}
                style={styles.longFormInput}
                placeholderTextColor="white"
                placeholder='Lenght'
                onBlur={props.handleBlur('lenght')}
                onChangeText={text => { props.setFieldValue('lenght', text) }}
            />
            <Text style={styles.validationText}> {props.touched.lenght && props.errors.lenght}</Text>
            <TextInput
                value={props.values.weight}
                style={styles.longFormInput}
                placeholderTextColor="white"
                placeholder='Weight'
                onBlur={props.handleBlur('weight')}
                onChangeText={text => { props.setFieldValue('weight', text) }}
            />
            <Text style={styles.validationText}> {props.touched.weight && props.errors.weight}</Text>
            <TouchableOpacity onPress={showDatePicker}
            style={styles.longFormInput}
          >
            <TextInput
              value={props.values.dateString}
              style={styles.validationText}
              placeholderTextColor="white"
              placeholder='Date'
              editable={false}
            />
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          <Text style={styles.validationText}> {props.errors.date}</Text>
            <Button
                title='Submit'
                onPress={() => props.handleSubmit()}
            />
            <TouchableOpacity 
            style={styles.changePasswordBtn}>
            <Button
              title='Change password'
              onPress={() => props.navigate('ChangePassword')
            }
            />
            </TouchableOpacity>
          </View>       
        </ImageBackground >
    );
}

const styles = StyleSheet.create({
    viewcontainer: {
        width: 300,
        alignSelf: 'center',
        alignItems: 'center',
      },
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    longFormInput: {
      width: '100%',
      height: 40,
      color: 'white',
      borderColor: '#B5B4BC',
      borderWidth: 1,
      margin: 8,
    },
    headerText: {
        fontSize: 32,
        marginBottom: 32,
        color: 'white'
      },
    validationText: {
        color: 'white'
      },
    changePasswordBtn: {
      paddingTop: 50
    }
});
export default withFormik({
    mapPropsToValues: ({ userInfo }) => ({
        email: userInfo.email,
        id: userInfo.id,
        name: userInfo.name,
      //  dateString: userInfo.dateString,
        lenght: userInfo.lenght,
        weight: userInfo.weight,
        dateString: userInfo.dateString,
    }),
    enableReinitialize: true,
    validationSchema: (props) => yup.object().shape({
        name: yup.string().max(30).required(),
        date: yup.date().max(new Date()
        , "Date cannot be in the future"),
        lenght: yup.string().max(10).required(),
        weight: yup.string().max(50),
    }),
    handleSubmit: (values, { props }) => {
        console.log(props);
        console.log(values);
       // values.date = values.date.toString().substr(4, 17);

        updateUserInfo(values, props.onUserInfoUpdated)
    }
})(UserInfoForm);