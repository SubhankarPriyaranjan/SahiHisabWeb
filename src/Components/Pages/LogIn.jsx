import React from 'react'
import './LoginPage.css';
import { useState } from 'react';

function LogIn() {
  const [isRightPanelActive, setRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setRightPanelActive(false);
  };

  return (
    <div className="loginPage">
      <div className={`container ${isRightPanelActive ? "right-panel-active" : ""}`} id="container">

        <div className="form-container sign-up-container">
          <form className="loginForm" action="#">
            <h1 id="title">Create Account</h1>
            <div className="social-container">
              <a className="loginA" href="#"><i className="fab fa-facebook-f"></i></a>
              <a className="loginA" href="#"><i className="fab fa-twitter"></i></a>
              <a className="loginA" href="#"><i className="fab fa-google"></i></a>
            </div>
            <span className="loginSpan">Or use your email for registration</span>
            <label htmlFor="name" id="name-label">
              <input className="loginInput" type="text" id="name" placeholder="Name" name="name" required />
            </label>
            <label htmlFor="email" id="email-label">
              <input className="loginInput" type="email" id="email" placeholder="Email" name="email" required />
            </label>
            <label htmlFor="password" id="password-label">
              <input className="loginInput" type="password" id="password" placeholder="Password" name="password" required />
            </label>
            <button className="loginButton">Sign Up</button>
          </form>
        </div>

        <div className="form-container sign-in-container">
          <form className="loginForm" action="#">
            <h1 id="title">Sign in</h1>
            <div className="social-container">
              <a className="loginA" href="#"><i className="fab fa-facebook-f"></i></a>
              <a className="loginA" href="#"><i className="fab fa-twitter"></i></a>
              <a className="loginA" href="#"><i className="fab fa-google"></i></a>
            </div>
            <span className="loginSpan">Or use your account</span>
            <label htmlFor="email" id="email-label">
              <input className="loginInput" type="email" id="email" placeholder="Email" name="email" required />
            </label>
            <label htmlFor="password" id="password-label">
              <input className="loginInput" type="password" id="password" placeholder="Password" name="password" required />
            </label>
            <a className="loginA" href="#">Forgot your password?</a>
            <button className="loginButton">Sign In</button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 id="title">Welcome!</h1>
              <p className="loginP">Login with your personal info</p>
              <button className="loginButton ghost" id="signIn" onClick={handleSignInClick}>Sign In</button>
            </div>

            <div className="overlay-panel overlay-right">
              <h1 id="title">Hello!</h1>
              <p className="loginP">Enter your personal details and start</p>
              <button className="loginButton ghost" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );

}

export default LogIn