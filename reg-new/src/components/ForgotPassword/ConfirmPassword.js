import React, { useState, useEffect } from 'react'
import { Grid, Paper, Avatar, Modal, Box, TextField, Button, Typography, Link } from '@material-ui/core'

import { useNavigate } from 'react-router-dom';
import EmailOutlinedIcon from '@material-ui/icons/SecurityOutlined';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { SetVerifyData } from "../../components/SetData";
// import ConfirmpasswordRequest from '../APIs/Verify';
import './login.css';


const ConfirmPassword = () => {

    const paperStyle = { padding: 20, width: 400 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }

    const initialValues = {
        otp: '',

    }

    const validationSchema = Yup.object().shape({
        otp: Yup.string().required("Required")
    })
    // const history = useHistory();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);


    // ----------------------------------------------------------------------
    //submit form after validation
    const onSubmit = (values, props) => {
        console.warn("OTP",values.otp)
        var req = SetVerifyData(values)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting()
        }, 2000)

        // var respose = ConfirmpasswordRequest(req)
        // console.log('response ', respose)
      navigate('/newpassword');
    }



    const onResendCode = (values, props) => {
        var req = SetVerifyData(values)
        console.log('request', req)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting()
        }, 2000)

        // var respose = ConfirmpasswordRequest(req)
      // navigate('/newpassword');
    }


    return (
        <div>
            <Grid>
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar id="Avatar"><EmailOutlinedIcon /></Avatar>
                        <h3 className='reg' id="heading">Confirm OTP</h3>
                        <Typography sx={{ color: 'text.secondary' }}>
                            We have emailed a 6-digit confirmation code to {localStorage.getItem('email')}, please enter the code in below box to verify your
                            email.
                        </Typography>
                    </Grid>

                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        {(props) => (
                            <Form>
                                <Field as={TextField} label='OTP' name='otp' placeholder='Enter OTP' fullWidth
                                    helperText={
                                        <ErrorMessage name="otp">
                                            {msg => <div style={{ color: 'red' }}>{msg}</div>}
                                        </ErrorMessage>
                                    }
                                />
                                <Button  type='submit' variant="contained" disabled={props.isSubmitting} id="button" fullWidth>
                                    {props.isSubmitting ? "Loading" : "Verify OTP"}</Button>

                                <Typography component={'div'}>
                                    <Link href='/'>
                                        Resend the Code
                                    </Link>

                                </Typography>
                                <Typography component={'div'}>
                                    <Link href="/forgotpasswordmobile">
                                        Reset with mobile number
                                    </Link>
                                </Typography>
                            </Form>)
                        }

                    </Formik>

                </Paper>
            </Grid>
        </div>
    )
}
export default ConfirmPassword