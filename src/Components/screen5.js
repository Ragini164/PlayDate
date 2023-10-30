import React from 'react';
import './screen5.css';

function LoginPage() {
  return (
    <div className="login-page">
      <div className="div">
        <div className="overlap">
          <div className="overlap-group">
            <img className="vector" src="https://c.animaapp.com/7hZfpL7J/img/vector-1.svg" alt="Vector" />
            <div className="text-wrapper">Login</div>
          </div>
          <div className="text-wrapper-2">Email:</div>
          <input type="text" id="email" className="text-wrapper-3" name="email" />
          <div className="text-wrapper-3">Password:</div>
          <input type="password" id="password" className="text-wrapper-4" name="password" />
          <p className="p">Your pet is not a user yet?</p>
          <div className="group">
            <div className="div-wrapper">
              <div className="text-wrapper-4">Register Now!</div>
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-2">
              <div className="text-wrapper-5">Lets go!</div>
            </div>
          </div>
        </div>
        <img className="img" src="https://c.animaapp.com/7hZfpL7J/img/vector-2.svg" alt="Image" />
        <img className="vector-2" src="https://c.animaapp.com/7hZfpL7J/img/vector-3.svg" alt="Vector 2" />
      </div>
    </div>
  );
}

export default LoginPage;