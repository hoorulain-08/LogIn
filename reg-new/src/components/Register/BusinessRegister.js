import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Link,
} from "@material-ui/core";
// import config from "../../../config.json";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { SetSignUpLegalData } from "../../components/SetData";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { ClapSpinner, CircleSpinner  } from "react-spinners-kit";
import "./login.css";
const Signup = () => {
  const navigate = useNavigate();
  const [response, setResponse] = useState("");
  const [success, setSuccess] = React.useState(false);
  const paperStyle = { padding: 20, width: 500, margin: "150px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };
  const btnstyle = { margin: "8px 0" };

  const initialValues = {
    firstname: "",
    lastname: "",
    fullname: "",
    companyname: "",
    domainname: "",
    mobile: "",
    username: "",
    password: "",
    incno: "",
  };

  // ----------------------------------------------------------------------
  //validate form inputs
  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("Required"),
    lastname: Yup.string().required("Required"),
    companyname: Yup.string().required("Required"),
    domainname: Yup.string().required("Required"),
    // domainname:  Yup.object().noUnknown().shape({
    //     domain: Yup.string().domain().required(),
    //   }),
    mobile: Yup.number().required("Required"),
    username: Yup.string()
      .email("Please enter a valid email address")
      .required("Required"),
    password: Yup.string()
      .required("Required")
      .min(5, "password must contain 5 or more characters"),
    incno: Yup.string().required("Required"),
  });

  // ----------------------------------------------------------------------
  //submit form after validation
  const onSubmit = (values, props) => {
    sessionStorage.removeItem("email");
    sessionStorage.setItem("email", values.username);
    var req = SetSignUpLegalData(values);
    console.warn(req);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting();
    }, 10000);
    // var response = SignUpRequest(req);
    // const SIGNUP_URL = config.SIGNUP_URL;
    // fetch(SIGNUP_URL, {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //   },
    //   body: JSON.stringify(req),
    // })
    //   .then((response) => response.json())
    //   .then((res) => {
    //     if (res.successResponseData.status.message=="SUCCESSFULL") {
    //       navigate("/verifybusiness");
    //     }
    //   });
  };
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <h6>Welcome to Business Digital Identity</h6>
          <Avatar id="Avatar">
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h3 className="reg" id="heading">
            Sign Up
          </h3>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
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
                label="First Name"
                name="firstname"
                placeholder="Enter first name"
                fullWidth
                helperText={
                  <ErrorMessage name="firstname">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                }
              />
              <Field
                as={TextField}
                label="Last Name"
                name="lastname"
                placeholder="Enter last name"
                fullWidth
                helperText={
                  <ErrorMessage name="lastname">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                }
              />
              <Field
                as={TextField}
                label="Company Name"
                name="companyname"
                placeholder="Enter company name"
                fullWidth
                helperText={
                  <ErrorMessage name="companyname">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                }
              />
              <Field
                as={TextField}
                label="Company Domain"
                name="domainname"
                placeholder="eidnow.com"
                fullWidth
                helperText={
                  <ErrorMessage name="domainname">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                }
              />

              <Field
                as={TextField}
                label="Email"
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
                label="Mobile No"
                name="mobile"
                placeholder="Enter mobile No"
                fullWidth
                helperText={
                  <ErrorMessage name="mobile">
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
              <Field
                as={TextField}
                label="Incorporation No"
                name="incno"
                placeholder="Enter incorporation No"
                fullWidth
                helperText={
                  <ErrorMessage name="incno">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                }
              />

              <Button
                color="primary"
                type="submit"
                variant="contained"
                id="button"
                disabled={props.isSubmitting}
                style={btnstyle}
                fullWidth
              >
                {" "}
                {props.isSubmitting ? <CircleSpinner color='#FFFFFF'  /> : "Sign Up"}
              </Button>

              <Typography component={"div"}>
                {" "}
                Do you need eID for individual ?
                <Link href="/register">&nbsp; Register as digital citizen</Link>
              </Typography>

              <Typography component={"div"}>
                {" "}
                Already have an account ?
                <Link href="/login">&nbsp; Log In</Link>
              </Typography>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default Signup;
