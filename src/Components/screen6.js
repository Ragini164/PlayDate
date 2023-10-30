// RegistrationPage.js
import React, { useState } from 'react';
import './screen6.css'; // Import the CSS file
import ErrorPopup from './ErrorPopup';

function RegistrationPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [username, setUsername] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);

  const [errors, setErrors] = useState([]);

  const handleLogin = () => {
    const newErrors = [];

    if (email.trim() === '') {
      newErrors.push('Email cannot be empty');
    } else if (!email.includes('@')) {
      newErrors.push('Invalid email format');
    }

    if (password.trim() === '') {
      newErrors.push('Password cannot be empty');
    }

    if (repassword.trim() === '') {
      newErrors.push('Re-enter password cannot be empty');
    } else if (repassword !== password) {
      newErrors.push('Passwords do not match');
    }

    if (!termsChecked) {
      newErrors.push('You must accept the terms and conditions');
    }

    setErrors(newErrors);
  };

  const closeErrorPopup = () => {
    setErrors([]);
  };

  return (
    <div className="registeration-page">
      <div className="div">
        <div className="text-wrapper">Register</div>
        <label htmlFor="email" className="text-wrapper-2">Email:</label>
        <input type="text" id="email" name="email" />

        <label htmlFor="password" className="text-wrapper-3">Password:</label>
        <input type="password" id="password" name="password" />

        <label htmlFor="repassword" className="text-wrapper-4">Re-Password:</label>
        <input type="password" id="repassword" name="repassword" />

        <label htmlFor="username" className="text-wrapper-5">Username:</label>
        <input type="text" id="username" name="username" />

        
        {/* <div className="text-wrapper-6">Already a User?</div> */}
        <button className="text-wrapper-6" id="alreadyUserButton">Already a User?</button>
        <p className="p">I accept the terms and conditions</p>
        {/* <div className="group">
          <div className="overlap-group"><div className="text-wrapper-7">Login Now!</div></div>
        </div> */}
        <button className="group" id="loginButton">Login Now!</button>
        <img className="img" src="https://c.animaapp.com/XlV2VCXd/img/rectangle-4.png" alt="Background Image" />
        <input type="checkbox" id="termsCheckbox" name="termsCheckbox" />
        <p className="text-wrapper-8">Get your pet to start grooving now!</p>
        {/* <img className="vector" src="https://c.animaapp.com/XlV2VCXd/img/vector.svg" /> */}
        {/* Conditionally render the error popup if there are errors */}
        handleLogin 
        {errors.length > 0 && (
          <ErrorPopup errors={errors} onClose={closeErrorPopup} />
        )}
      </div>
    </div>
  );
}

export default RegistrationPage;