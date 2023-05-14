import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Redirect,
  Navigate
} from 'react-router-dom';


import Login from './components/Login/Login';


// const Footer = React.lazy(() => import('shared/Footer'));
import Signup from './components/Register';
import BusinessSingup from './components/Register/BusinessRegister'
import Forgotpassword from './components/ForgotPassword';
import ConfirmPassword from './components/ForgotPassword/ConfirmPassword'

// import VerifyEmail from './components/verifyEmail/VerifyEmail';

import NewPassword from './components/ForgotPassword/NewPassword';




ReactDOM.render(
  
 
<div style={{paddingLeft:"473px"}}>
  <Router>
    <Routes>
      <Route>
      <Route path="/" element={<Login/>} exact /> 

      <Route path="/register" element={<Signup/>} exact /> 
      {/* <Route path="/elogin" element={<BusinessLogin/>} exact />  */}
      <Route path="/forgotpassword" element={<Forgotpassword/>} exact />
      <Route path="/confirmpassword" element={<ConfirmPassword/>} exact />
      {/* <Route path="/verifyemail" element={<VerifyEmail/>} exact /> */}
  
      <Route path="/newpassword" element={<NewPassword/>} exact />
      <Route path="/businesssignup" element={<BusinessSingup/>} exact />
      <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
   
    </Routes>
  </Router>
  </div>
  , document.getElementById('app'),
);
