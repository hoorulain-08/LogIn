import React, { useState, useEffect } from 'react'
import { Grid, Paper, Avatar, Modal, Box, TextField, Button, Typography, Link } from '@material-ui/core'
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {SetForgotPasswordData} from "../../components/SetData";

import EmailOutlinedIcon from '@material-ui/icons/SecurityOutlined';
import './login.css';

const ForgotPassword = () => {

    const paperStyle = { padding: 20, width: 400}
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }


    const navigate = useNavigate();
    const initialValues = {
        email: '',
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Please enter a valid email address').required("Required"),
    })
 
// ----------------------------------------------------------------------
    //submit form after validation
    const onSubmit = (values, props) => {
        // localStorage.setItem("email", values.email)

        // var payload=SetForgotPasswordData(values.email)
        // console.log("Values",values)
        // setTimeout(() => {
        //     props.resetForm()
        //     props.setSubmitting()
        // }, 2000)

       
        
      navigate('/confirmpassword');
    }
    
    return (
        <div>
            <Grid>
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>
                    <Avatar id="Avatar"><EmailOutlinedIcon/></Avatar>
                        <h3 className='reg' id="heading">Forgot Password</h3>
                        <Typography component={'div'} variant='caption' gutterBottom>Please enter your registered email!</Typography>
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
                                <Button color='primary' type='submit' variant="contained" disabled={props.isSubmitting} id="button" fullWidth>
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