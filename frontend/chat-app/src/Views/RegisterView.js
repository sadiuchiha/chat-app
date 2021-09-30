import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";
export default function RegisterView(props) {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const redirect = props.location.search
  ? props.location.search.split("=")[1]
  : "/addPhoto";

const userRegister = useSelector((state) => state.userRegister);
const { userInfo, loading, error } = userRegister;

const dispatch = useDispatch();

const submitHandler = (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    alert("Password and confirm password doesn't match!");
  } else {
    dispatch(register(username, email, password));
  }
};

useEffect(() => {
  if (userInfo) {
    props.history.push(redirect);
  }
}, [props.history, redirect, userInfo]);

  return (
    <div>
      <div className="row center" onSubmit={submitHandler}>
        <form className="login-holder register-holder">
          <div className="sign-text-holder">
            <h1>Register now in</h1>
            <h1>Chatz</h1>
          </div>
          <div className="register-input-box">
            <div className="inputs-box">
              <label>Email</label>
              <input type="text" placeholder="Enter email"  onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className="inputs-box">
              <label>Username</label>
              <input type="text" placeholder="Enter username"  onChange={(e) => setUsername(e.target.value)}></input>
            </div>
          </div>

          <div className="register-input-box">
            <div className="inputs-box">
              <label>Password</label>
              <input type="Password" placeholder="Enter password"  onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <div className="inputs-box">
              <label>Confirm Password</label>
              <input type="Password" placeholder="Enter confirm password"  onChange={(e) => setConfirmPassword(e.target.value)}></input>
            </div>
          </div>

          <button>Sign up</button>

          <div className="signup-holder">
            <p>Existing User? </p>
            <Link to={`/signin?redirect=${redirect}`}>Sign in</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
