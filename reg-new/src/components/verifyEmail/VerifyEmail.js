import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Modal,
  TextField,
  Typography,
  Link,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { SetVerifyData } from "../../components/SetData";
// import VerifyRequest from "../APIs/Verify";
import EmailOutlinedIcon from "@material-ui/icons/VerifiedUser";
import { ClapSpinner, CircleSpinner } from "react-spinners-kit";
import config from "../../../config.json";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import "./login.css";
const VerifyEmail = () => {
  const navigate = useNavigate();
  const [response, setResponse] = useState("");
  const [success, setSuccess] = React.useState(false);

  const initialValues = {
    opt: "",
  };
  const validationSchema = Yup.object().shape({
    otp: Yup.string().required("OTP does not match!"),
  });

  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);

 

  //submit form after validation
  const onSubmit = (values, props) => {

    console.warn("submited");
  

   
  };

  const reSendCodeHandler = (values, props) => {
    var req = SetVerifyData(values);
    console.warn(req);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting();
    }, 1000);
    // history.push('/login')
    var response = VerifyRequest(req);
    console.log("Backend response", response.then());
    navigate("/login");
  };

  // ----------------------------------------------------------------------
  return (
    <div>
      <Grid>
        <Paper elevation={20} id="paper">
          <Grid align="center">
            <Avatar id="Avatar">
              <EmailOutlinedIcon />
            </Avatar>
            {/* <div className="image">
                            <img
                                alt="..."
                                src={require('../assets/img/email-verification.png') } width={250} height={250}
                            />
                        </div> */}
            <h5>Verify your email address</h5>
            <Typography sx={{ color: "text.secondary" }}>
              Please enter the code you recieved to verify your email.
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
                  label="OTP"
                  name="otp"
                  placeholder="Enter OTP"
                  fullWidth
                  helperText={
                    <ErrorMessage name="otp">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                  }
                />
                <Button
                  color="primary"
                  type="submit"
                  variant="contained"
                  disabled={props.isSubmitting}
                  id="button"
                  fullWidth
                >
                  {props.isSubmitting ? <CircleSpinner color="#FFFFFF" /> : "Verify Email"}
                </Button>

                <Typography component={"div"}>
                  <Link href={reSendCodeHandler}>Resend the Code</Link>
                </Typography>
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
    </div>
  );
};
export default VerifyEmail;
