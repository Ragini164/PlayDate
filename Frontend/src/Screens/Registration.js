// RegistrationPage.js
import React, { useEffect, useState } from 'react';
import '../Styles/Registration.css' // Import the CSS file
import ErrorPopup from './ErrorPopup';
import { useNavigate } from 'react-router-dom';


function Popup() {
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>You were successful Registered</h2>
        <button >Close</button>
      </div>
    </div>
  );
}

function RegistrationPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [username, setUsername] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);
  const [errors, setErrors] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const history = useNavigate();
  const Login = () => {
    history('/LoginPage');
  };

const handleLogin = async () => {
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
  setIsPopupOpen(newErrors.length > 0);

  if (newErrors.length === 0) {
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          repassword,
          username,
          termsChecked,
        }),
      });

      console.log('Response Status:', response.status);

      if (response.ok) {
        const data = await response.json();
        console.log('Response Data:', data);

        if (data.success) {
          console.log('Registration successful');
          setEmail('')
          setPassword('')
          setRepassword('')
          setUsername('')
          Popup();
          // Optionally, you can redirect the user to a different page (e.g., login page) here
        } else {
          console.error('Registration failed', data.error);
          // Handle registration failure (e.g., display an error message)
        }
      } else {
        console.error('Registration failed');
        // Handle registration failure (e.g., display an error message)
      }
    } catch (error) {
      console.error('Error registering user', error);
      // Handle other errors (e.g., network issues)
    }
  }
};


  const closeErrorPopup = () => {
    setErrors([]);
    setIsPopupOpen(false);
  };

  return (
    <div className="registration-page">
      <div className="div">
        <div className="text-wrapper">Register</div>
        <label htmlFor="email" className="text-wrapper-2">
          Email:
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password" className="text-wrapper-3">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="repassword" className="text-wrapper-4">
          Re-Password:
        </label>
        <input
          type="password"
          id="repassword"
          name="repassword"
          onChange={(e) => setRepassword(e.target.value)}
        />

        <label htmlFor="username" className="text-wrapper-5">
          Username:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <button
          className="text-wrapper-6"
          id="alreadyUserButton"
          onClick={Login}
        >
          Already a User?
        </button>
        <p className="p">I accept the terms and conditions</p>
        <button className="group" id="loginButton" onClick={handleLogin}>
          Register Now!
        </button>
        <img
          className="img"
          src="https://c.animaapp.com/XlV2VCXd/img/rectangle-4.png"
          alt="Background Image"
        />
        <input
          type="checkbox"
          id="termsCheckbox"
          name="termsCheckbox"
          onChange={() => setTermsChecked(!termsChecked)}
        />
        <p className="text-wrapper-8">Get your pet to start grooving now!</p>

        {isPopupOpen && <ErrorPopup errors={errors} onClose={closeErrorPopup} />}
      </div>
    </div>
  );
}

export default RegistrationPage;