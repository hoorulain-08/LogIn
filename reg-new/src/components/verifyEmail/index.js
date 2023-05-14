import React from 'react';
import AsyncLoader from '../async_loader';
import VerifyEmail from "./VerifyEmail"

const LoginComponent = () => {

  return (
    <AsyncLoader>
      <VerifyEmail/>
    </AsyncLoader>
  );
};



export default LoginComponent;
