import React from "react";

export default function LoginView() {
  return (
    <div className="row center">
      <div className="login-holder">
        <div className="sign-text-holder">
          <h1>Welcome to ChatZ</h1>
          <h1>Sign in</h1>
        </div>
        <div className="inputs-box">
          <label>Email</label>
          <input type="text" placeholder="Enter your email"></input>
        </div>
        <div className="inputs-box">
          <label>Password</label>
          <input type="Password" placeholder="Enter your password"></input>
        </div>

        <button>Sign in</button>

        <div className="signup-holder">
          <p>New to ChatZ? </p>
          <a href="http://localhost:3000/register">Sign up now!</a>
        </div>
      </div>
    </div>
  );
}
