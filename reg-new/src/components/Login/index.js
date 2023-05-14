import React from 'react';
import AsyncLoader from '../async_loader';
import Login from "./Login"

const LoginComponent = () => {

  return (
    <AsyncLoader>
      <Login/>
    </AsyncLoader>
  );
};
export default LoginComponent;
