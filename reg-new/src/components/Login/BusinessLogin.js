import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Modal,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { SetLoginLegalData, SetProfileData } from "../../components/SetData";
// const Footer = React.lazy(() => import('shared/Footer'));
import config from "../../../config.json";
// import Alert from "react-bootstrap"
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import { ClapSpinner, CircleSpinner  } from "react-spinners-kit";
import CloseIcon from "@mui/icons-material/Close";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

const Login = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [checked, setChecked] = useState(false);
  const [response, setResponse] = useState("");
  const [success, setSuccess] = React.useState(false);
  const [radioValue, setRadioValue] = useState();
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
    localStorage.removeItem("email");
    sessionStorage.removeItem("email");
    sessionStorage.setItem("email", values.username);
    localStorage.setItem("email", values.username);
    console.warn(sessionStorage.email);

    const LOGIN_URL = config.LOGIN_URL;
    var req = SetLoginLegalData(values);
    console.warn(req);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting();
    }, 10000);

    //making request to the server
  fetch(LOGIN_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    })
      .then((response) => response.json())
      .then((res) => {
        // if (res.errorResponseData.error != null) {
        //   setResponse(res.errorResponseData.error.details);
        //   console.warn("request failed: " + response);
        //   setSuccess(true);
        // }
        if (
          res.successResponseData.payload.authToken.token !== null &&
         res.successResponseData.serviceInfo.partyType == "LEGAL_ENTITY"
        ) {

          
        sessionStorage.setItem(
          "token",
          res.successResponseData.payload.authToken.token
        );
        console.warn(
          "Token present",
          res.successResponseData.payload.authToken.token
        );
       
        navigate("/business/dashboard");


        }

      });
 
  };

  return (
    <div>
      <Grid>
        <Paper elevation={20} id="paper">
          <Grid align="center">
            <h6>Welcome to Business Digital Identity</h6>

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
          {/* <div className="reg">
          <ButtonGroup>
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={idx % 2 ? "outline-success" : "outline-danger"}
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
          </div>
          */}

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

                <div className="login">
                  <Link href="/login">Login into individual account</Link>
                </div>

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

export default Login;

// export function getProfile() {
//   return async (dispatch) => {
//     dispatch(slice.actions.startLoading());
//     try {
//       const response = await axios.get("/api/user/profile");
//       dispatch(slice.actions.getProfileSuccess(response.data.profile));
//     } catch (error) {
//       dispatch(slice.actions.hasError(error));
//     }
//   };
// }
