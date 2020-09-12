import React, { useState } from "react";
import { signInWithGoogle } from "../../firebase/firebase-utils";
import CustomButton from "../custom-button/custom-button";
import FormInput from "../form-input/formInput";
import "./sign-in.scss";

export default function SignIn() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with user name and password</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit" value="Submit Form">
            Sign In
          </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}
