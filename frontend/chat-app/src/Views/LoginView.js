import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../actions/userActions";

export default function LoginView(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("initialState");

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/home";

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  return (
    <div className="row center">
      <form className="login-holder" onSubmit={submitHandler}>
        <div className="sign-text-holder">
          <h1>Welcome to ChatZ</h1>
          <h1>Sign in</h1>
        </div>
        <div className="inputs-box">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <div className="inputs-box">
          <label>Password</label>
          <input
            type="Password"
            placeholder="Enter your password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>

        <button>Sign in</button>

        <div className="signup-holder">
          <p>New to ChatZ? </p>
          <a href="http://localhost:3000/register">Sign up now!</a>
        </div>
      </form>
    </div>
  );
}
