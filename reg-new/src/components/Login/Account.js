// import React, { useState } from "react";
// import {
//   Grid,
//   Paper,
//   Avatar,
//   Modal,
//   Box,
//   TextField,
//   Button,
//   Typography,
//   Link,
// } from "@material-ui/core";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import { useNavigate } from "react-router-dom";
// import "./login.css";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import AsyncLoader from "../async_loader/index";
// import { SetLoginDigitalData, SetProfileData } from "../../components/SetData";
// import SignIn from "../APIs/SignIn";
// import { withThemeCreator } from "@material-ui/styles";
// // const Footer = React.lazy(() => import('shared/Footer'));

// import SelectSearch from "react-select-search";
// import config from "../../../config.json";
// // import Alert from "react-bootstrap"

// import ButtonGroup from "react-bootstrap/ButtonGroup";
// import ToggleButton from "react-bootstrap/ToggleButton";
// import Alert from "../utils/Alert";

// import BusinessLogin from "./BusinessLogin";

// const Account = () => {
//   const navigate = useNavigate();
//   const [show, setShow] = useState(true);
//   const [checked, setChecked] = useState(false);
// var SelectSearchOption=""
//   const [account, setAccount] = useState("");

//   const [radioValue, setRadioValue] = useState();
//   const initialValues = {
//     username: "",
//     password: "",
//   };

//   const cats = [
//     { name: "Digital Citizen", value: "NATURL_PERON" },
//     { name: "Legal Entity", value: "LEGAL_ENTITY" },
//   ];



//   // ----------------------------------------------------------------------
//   //validate form inputs
//   const validationSchema = Yup.object().shape({
//     username: Yup.string()
//       .email("Please enter a valid email address")
//       .required("Required"),
//     password: Yup.string().required("Required"),
//   });

//   // ----------------------------------------------------------------------
//   //submit form after validation
//   const onSubmit = (values, props) => {
//     sessionStorage.removeItem("email");
//     sessionStorage.setItem("email", values.username);

//     const LOGIN_URL = config.LOGIN_URL;
//     var req = SetLoginDigitalData(values);
//     console.warn(req);
//     setTimeout(() => {
//       props.resetForm();
//       props.setSubmitting();
//     }, 10000);

//     // if(values.username==='ghayour.haider@vialogic.co'){
//     //     navigate('/business/dashboard')
//     // }

    
//   };

//   return (
//     <div>
//       <Grid>
//         <Paper elevation={20} id="paper">
//           <Grid align="center">
//             <h6>Welcome to Digital Identity  test is here </h6>

//             <Avatar id="Avatar">
//               <LockOutlinedIcon />
//             </Avatar>

//             <h3 className="reg" id="heading">
//               Log in
//             </h3>
//             {/* Below style{Tag} is used for small tag on login/signup screens*/}
//             {/* <Typography style={Tag} component={'div'} variant='caption' gutterBottom>For Enterprise</Typography> */}
//             <Typography component={"div"} variant="caption" gutterBottom>
//               Please Provide Registered Details!
//             </Typography>
//           </Grid>
//           {/* <div className="reg">
//           <ButtonGroup>
//             {radios.map((radio, idx) => (
//               <ToggleButton
//                 key={idx}
//                 id={`radio-${idx}`}
//                 type="radio"
//                 variant={idx % 2 ? "outline-success" : "outline-danger"}
//                 name="radio"
//                 value={radio.value}
//                 checked={radioValue === radio.value}
//                 onChange={(e) => setRadioValue(e.currentTarget.value)}
//               >
//                 {radio.name}
//               </ToggleButton>
//             ))}
//           </ButtonGroup>
//           </div>
//           */}
//           {/* <Formik
//             initialValues={initialValues}
//             onSubmit={onSubmit}
//             validationSchema={validationSchema}
//           >
//             {(props) => (
//               <Form>
//                 <Field
//                   as={TextField}
//                   label="Username"
//                   name="username"
//                   placeholder="Enter username"
//                   fullWidth
//                   helperText={
//                     <ErrorMessage name="username">
//                       {(msg) => <div style={{ color: "red" }}>{msg}</div>}
//                     </ErrorMessage>
//                   }
//                 />
//                 <Field
//                   as={TextField}
//                   label="Password"
//                   name="password"
//                   placeholder="Enter password"
//                   type="password"
//                   fullWidth
//                   helperText={
//                     <ErrorMessage name="password">
//                       {(msg) => <div style={{ color: "red" }}>{msg}</div>}
//                     </ErrorMessage>
//                   }
//                 />
//                 <Button
//                   disabled={props.isSubmitting}
//                   type="submit"
//                   variant="contained"
//                   id="button"
//                   fullWidth
//                 >
//                   {props.isSubmitting ? "Loading" : "Sign in"}
//                 </Button>

//                 <div className="login">
//                     <Link href="/elogin">Login into business account</Link>
//                 </div>

//                 <Typography component={"div"}>
//                   <Link href="/forgotpassword">Forgot password ?</Link>
//                 </Typography>

//                 <Typography component={"div"}>
//                   {" "}
//                   Do you have an account ?
//                   <Link href="/register">&nbsp; Sign Up</Link>
//                 </Typography>
//               </Form>
//             )}
//           </Formik> */}

//           <div className="myDropBox">
//             <SelectSearch
//               options={cats}
//               value={SelectSearchOption}
//               name="categories"
//               placeholder="Select Account"
//               onChange={()=>{setAccount(options.name)}}
//             />
//           </div>
//         </Paper>
//       </Grid>
//     </div>
//   );
// };

// export default Account;
