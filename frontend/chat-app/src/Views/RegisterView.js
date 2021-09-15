import React from "react";

export default function RegisterView() {
  return (
    <div>
      <div className="row center">
        <div className="login-holder register-holder">
          <div className="sign-text-holder">
            <h1>Register now in</h1>
            <h1>Chatz</h1>
          </div>
          <div className="register-input-box">
            <div className="inputs-box">
              <label>Email</label>
              <input type="text" placeholder="Enter email"></input>
            </div>
            <div className="inputs-box">
              <label>Username</label>
              <input type="text" placeholder="Enter username"></input>
            </div>
          </div>

          <div className="register-input-box">
            <div className="inputs-box">
              <label>Password</label>
              <input type="Password" placeholder="Enter password"></input>
            </div>
            <div className="inputs-box">
              <label>Confirm Password</label>
              <input type="Password" placeholder="Enter confirm password"></input>
            </div>
          </div>

          <button>Sign in</button>

          <div className="signup-holder">
            <p>Existing User? </p>
            <a href="http://localhost:3000/signin">Sign in</a>
          </div>
        </div>
      </div>
    </div>
  );
}
