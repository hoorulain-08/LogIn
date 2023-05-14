import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Typography,
  Link,
} from "@material-ui/core";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { SetLoginDigitalData, SetProfileData } from "../../components/SetData";

import { withThemeCreator } from "@material-ui/styles";
import { ClapSpinner, CircleSpinner  } from "react-spinners-kit";
// import Box from "@mui/material/Box";
// import Alert from "@mui/material/Alert";

// const Footer = React.lazy(() => import('shared/Footer'));

// import Alert from "react-bootstrap"


// import Alert from "../utils/Alert";


const Login = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [response, setResponse] = useState("");
  const [success, setSuccess] = React.useState(false);
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState();

  // const geolocation=getGeoData

  const initialValues = {
    username: "",
    password: "",
  };

  const radios = [
    { name: "Digital Citizen", value: "NATURL_PERON" },
    { name: "Legal Entity", value: "LEGAL_ENTITY" },
  ];

  // ----------------------------------------------------------------------
  //validate form inputs
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .email("Please enter a valid email address")
      .required("Required"),
    password: Yup.string().required("Required"),
  });

  // ----------------------------------------------------------------------
  //submit form after validation
  const onSubmit = (values, props) => {
 
    console.warn(values);
   
  };

  return (
    <div>
      <Grid>
        <Paper elevation={20} id="paper">
          <Grid align="center">
          
            
{/* // { console.warn(geolocation)} */}
            <Avatar id="Avatar">
              <LockOutlinedIcon />
            </Avatar>

            <h3 className="reg" id="heading">
              Log in
            </h3>
            {/* Below style{Tag} is used for small tag on login/signup screens*/}
            {/* <Typography style={Tag} component={'div'} variant='caption' gutterBottom>For Enterprise</Typography> */}
            <Typography component={"div"} variant="caption" gutterBottom>
              Please Provide Registered Details!
            </Typography>
          </Grid>
          <div>
            <Box sx={{ width: "100%" }}>
              <Collapse in={success}>
                <Alert
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setSuccess(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                  severity="error"
                  sx={{ mb: 2 }}
                >
                  {response}
                </Alert>
              </Collapse>
            </Box>
          </div>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(props) => (
              <Form>
                <Field
                  as={TextField}
                  label="Username"
                  name="username"
                  placeholder="Enter username"
                  fullWidth
                  helperText={
                    <ErrorMessage name="username">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                  }
                />
                <Field
                  as={TextField}
                  label="Password"
                  name="password"
                  placeholder="Enter password"
                  type="password"
                  fullWidth
                  helperText={
                    <ErrorMessage name="password">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                  }
                />
                <Button
                  disabled={props.isSubmitting}
                  type="submit"
                  variant="contained"
                  id="button"
                  fullWidth
                >
                  {props.isSubmitting ? <CircleSpinner color='#FFFFFF'  /> : "Sign in"}
                </Button>

                {/* <div className="login">
                  <Link href="/elogin">Login into business account</Link>
                </div> */}

                <Typography component={"div"}>
                  <Link href="/forgotpassword">Forgot password ?</Link>
                </Typography>

                <Typography component={"div"}>
                  {" "}
                  Do you have an account ?
                  <Link href="/register">&nbsp; Sign Up</Link>
                </Typography>
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
    </div>
  );
};

// function setProfile() {
//   var req = SetProfileData();

//   console.log("Request", req);

//   const API_URL = config.USER_PROFILE;
//   fetch(API_URL, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//     },
//     body: JSON.stringify(req),
//   })
//     .then((response) => response.json())
//     .then((res) => {
//       sessionStorage.removeItem("user-info");
//       sessionStorage.setItem(
//         "user-info",
//         JSON.stringify(res.successResponseData.payload)
//       );
//     });
// }

export default Login;


