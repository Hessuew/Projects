import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    Button,
    ImageBackground
} from 'react-native';
import { withFormik } from 'formik';
import * as yup from 'yup';
import { changePassword } from '../api/EventApi';

const changePasswordScreen = (props) => {
    return (
        <ImageBackground source={require('../assets/bac2.png')} style={styles.container}>
          <View style={styles.viewcontainer}>
                <Text style={styles.headerText}>Change Password</Text>
                <TextInput
                    style={styles.longFormInput}
                    placeholderTextColor="white"
                    placeholder='Current password'
                    onBlur={props.handleBlur('currentPassword')}
                    onChangeText={text => { props.setFieldValue('currentPassword', text) }}
                />
                <Text style={styles.validationText}> {props.touched.currentPassword && props.errors.currentPassword}</Text>
                <TextInput
                    style={styles.longFormInput}
                    placeholderTextColor="white"
                    placeholder='New password'
                    onBlur={props.handleBlur('newPassword')}
                    onChangeText={text => { props.setFieldValue('newPassword', text) }}
                />
                <Text style={styles.validationText}> {props.touched.newPassword && props.errors.newPassword}</Text>
                <TextInput
                    style={styles.longFormInput}
                    placeholderTextColor="white"
                    placeholder='Confirm new password'
                    onBlur={props.handleBlur('newPasswordConfirm')}
                    onChangeText={text => { props.setFieldValue('newPasswordConfirm', text) }}
                />
                <Text style={styles.validationText}> {props.touched.newPasswordConfirm && props.errors.newPasswordConfirm}</Text>
                <Button
                    title='Submit'
                    onPress={() => props.handleSubmit()}
                />
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
        flex: 1
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
        marginTop: 29,
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
    enableReinitialize: true,
    validationSchema: (props) => yup.object().shape({
        currentPassword: yup.string().required(),
        newPassword: yup.string().min(10).max(30).required(),
        newPasswordConfirm: yup.string()
        .oneOf([yup.ref('newPassword'), null], 'Passwords must match')
    }),
    handleSubmit: (values, { props }) => {
        changePassword(values.currentPassword, values.newPassword, props.onPasswordUpdated)
    },
})(changePasswordScreen);