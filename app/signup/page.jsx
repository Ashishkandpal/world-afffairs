"use client";

import { useState } from "react";

import SignUpComponent from "@components/SignupComponent";
import LoginComponent from "@components/LoginComponent";

const Signup = () => {
  const [flag, setFlag] = useState("");
  return (
    <div>
      <div className="signup-login-wrapper">
        {!flag ? <SignUpComponent /> : <LoginComponent />}
        {!flag ? (
          <p className="signup-login-toggle" onClick={() => setFlag(!flag)}>
            Already have an Account? Click here to Login.
          </p>
        ) : (
          <p className="signup-login-toggle" onClick={() => setFlag(!flag)}>
            Don't have an account? Click here to sign up
          </p>
        )}
      </div>
    </div>
  );
};

export default Signup;
