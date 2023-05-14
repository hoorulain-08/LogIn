import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Link,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


import { useNavigate } from "react-router-dom";
import "./login.css";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

import { ClapSpinner, CircleSpinner } from "react-spinners-kit";
const Signup = () => {
  const navigate = useNavigate();
  const [response, setResponse] = useState("");
  const [success, setSuccess] = React.useState(false);
  // const paperStyle = { padding: 20, width: 400, margin: "150px auto" }
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };
  const btnstyle = { margin: "8px 0" };

  const initialValues = {
    firstname: "",
    lastname: "",
    mobile: "",
    username: "",
    password: "",
  };
  // ----------------------------------------------------------------------
  //validate form inputs

  // ----------------------------------------------------------------------
  //submit form after validation
  const onSubmit = (values, props) => {

    console.log("submitted");
    navigate('/login')
 
    // var response=SignUpRequest(req)

    

  };

  return (
    <Grid>
      <Paper elevation={20} id="paper">
        <Grid align="center">
          {/* <h6>Welcome to Digital Identity</h6> */}
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
              <Button
                disabled={props.isSubmitting}
                type="submit"
                variant="contained"
                id="button"
                fullWidth
              >
                {props.isSubmitting ? (
                  <CircleSpinner color="#FFFFFF" />
                ) : (
                  "Sign Up"
                )}
              </Button>

              

            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default Signup;
