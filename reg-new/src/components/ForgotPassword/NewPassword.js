import React, { useState, useEffect } from 'react'
import { Grid, Paper, Avatar, Modal, Box, TextField, Button, Typography, Link } from '@material-ui/core'
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './login.css';
import { SetUpdatePasswordData } from "../../components/SetData";

import EmailOutlinedIcon from '@material-ui/icons/SecurityOutlined';
const NewPassword = () => {
    const paperStyle = { padding: 20, width: 400}
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    const navigate = useNavigate();

    const initialValues = {
        email: '',
        password: '',
        newpassword: '',
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Please enter a valid email address').required("Required"),
        password: Yup.string().required('Password is required'),
        newpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
    })
    // ----------------------------------------------------------------------
    //submit form after validation
    const onSubmit = (values, props) => {

      
        // var respose = UpdatepasswordRequest(req)
       navigate('/login');

    }
    return (
        <div>
            <Grid>
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar id="Avatar"><EmailOutlinedIcon /></Avatar>
                        <h3 id='heading'>Reset  Password</h3>
                        <Typography component={'div'} variant='caption' gutterBottom>Please enter your new password</Typography>
                    </Grid>
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        {(props) => (
                            <Form>

                                <Field as={TextField} label='Email' name='email' placeholder='Enter Email' fullWidth
                                    helperText={
                                        <ErrorMessage name="email">
                                            {msg => <div style={{ color: 'red' }}>{msg}</div>}
                                        </ErrorMessage>
                                    }
                                />
                                <Field as={TextField} label='New password' name='password' placeholder='Enter New Password' fullWidth
                                    helperText={
                                        <ErrorMessage name="password">
                                            {msg => <div style={{ color: 'red' }}>{msg}</div>}
                                        </ErrorMessage>
                                    }
                                />
                                <Field as={TextField} label='Confirm password' name='newpassword' placeholder='Enter New Password to confirm' fullWidth
                                    helperText={
                                        <ErrorMessage name="newpassword">
                                            {msg => <div style={{ color: 'red' }}>{msg}</div>}
                                        </ErrorMessage>
                                    }
                                />




                                <Button id="button" type='submit' variant="contained" disabled={props.isSubmitting} fullWidth>
                                    {props.isSubmitting ? "Loading" : "Reset Password"}</Button>
                            </Form>
                        )
                        }
                    </Formik>

                </Paper>
            </Grid>
        </div>
    )
}
export default NewPassword