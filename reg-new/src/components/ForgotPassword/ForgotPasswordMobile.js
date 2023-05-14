import React, { useState, useEffect } from 'react'
import { Grid, Paper, Avatar, Modal, Box, TextField, Button, Typography, Link } from '@material-ui/core'
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import uuid from 'react-uuid'
import momemt from "moment";

const ForgotPassword = () => {
    const FORGOTPASSWORD_URL = "http://192.168.18.235:8083/login";
    const paperStyle = { padding: 20, width: 300, margin: "150px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    const navigate = useNavigate();
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const initialValues = {
        mobile: '',
    }
    const validationSchema = Yup.object().shape({
        mobile: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
        
    })
 
// ----------------------------------------------------------------------
    //submit form after validation
    const onSubmit = (values, props) => {
        console.log(values)
        setdata(values)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting()
        }, 2000)
      
    }

// ----------------------------------------------------------------------
    //Preparing request data
    const setdata = (props) => {
        var request = {
            "requestData": {
                "person": {
                    "personDetails": {
                        "mobileNumber": props.mobile,
                    }
                },
                "serviceInfo": {
                    "iam": "Wso2",
                    "channelId": "Null",
                    "accountProviderId": "Null",
                    "userId": "Null",
                    "countryId": "+92",
                    "transactionId": uuid(),
                    "origin": "Web",
                    "service": "identityServiceWeb",
                    "instance": "EEEEE",
                    "timestamp": momemt().format('MMMM Do YYYY, h:mm:ss a')
                }
            }
        }

        ForgotpasswordRequest(request, FORGOTPASSWORD_URL)
    }

// ----------------------------------------------------------------------
    //making request to the server
    async function ForgotpasswordRequest(data,url) {

        console.log(data)
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((res) => {
                console.log('Token', res.responseData.payload.eId)
            });
        navigate('/confirmpassword');
        return response;
    }

    return (
        <div>
            <Grid>
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>
                       
                        <h2>Forgot Password</h2>
                        <Typography component={'div'} variant='caption' gutterBottom>Please enter your registered Mobile Number!</Typography>
                    </Grid>
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        {(props) => (
                            <Form>
                                <Field as={TextField} label='Mobile No' name='mobile' placeholder='Enter Mobile No' fullWidth
                                    helperText={
                                        <ErrorMessage name="mobile">
                                            {msg => <div style={{ color: 'red' }}>{msg}</div>}
                                        </ErrorMessage>
                                    }
                                />
                                <Button color='primary' type='submit' variant="contained" disabled={props.isSubmitting} style={btnstyle} fullWidth>
                                    {props.isSubmitting ? "Loading" : "Send Code"}</Button>
                            </Form>
                        )
                        }
                    </Formik>

                </Paper>
            </Grid>
        </div>
    )
}
export default ForgotPassword