import React, { useState } from 'react';
import '../Styles/Login.css'
import ErrorPopup from './ErrorPopup';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const history = useNavigate(); // Call useNavigate as a function to get the navigate function

  const navigateToRegistration = () => {
    history('/RegistrationPage');
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
  
    setErrors(newErrors);
    setIsPopupOpen(newErrors.length > 0);
  
    if (newErrors.length === 0) {
      try {
        const response = await fetch('http://localhost:5000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });
  
        console.log('Response Status:', response.status);
  
        if (response.ok) {
          // Add logic for successful login, e.g., redirect to a new page
          history('/PetProfile')
        } else {
          const data = await response.json();
          console.error('Login failed', data.error);
  
          // Display server errors in the ErrorPopup
          setErrors([...newErrors, data.error]);
          setIsPopupOpen(true);
        }
      } catch (error) {
        console.error('Error logging in', error);
        // Handle other errors (e.g., network issues)
      }
    }
  };
  
  const closeErrorPopup = () => {
    setErrors([]);
    setIsPopupOpen(false);
  };

  return (
    <div className="login-page">
      <div className="div">
        <div className="overlap">
          <div className="overlap-group">
            <img
              className="vector"
              src="https://c.animaapp.com/7hZfpL7J/img/vector-1.svg"
              alt="Vector"
            />
            <div className="text-wrapper">Login</div>
          </div>
          <div className="text-wrapper-2">Email:</div>
          <input
            type="text"
            id="email"
            className="text-wrapper-3"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="text-wrapper-3">Password:</div>
          <input
            type="password"
            id="password"
            className="text-wrapper-4"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="button">
            Your pet is not a user yet?
          </div>
          <div className="group">
            <div className="div-wrapper">
              <button className="text-wrapper-4" onClick={navigateToRegistration}>Register Now!</button>
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-2">
              <button className="text-wrapper-5" onClick={handleLogin}>Lets go!</button>
            </div>
          </div>
        </div>
        <img
          className="img"
          src="https://c.animaapp.com/7hZfpL7J/img/vector-2.svg"
          alt="Image"
        />
        <img
          className="vector-2"
          src="https://c.animaapp.com/7hZfpL7J/img/vector-3.svg"
          alt="Vector 2"
        />
      </div>
      {isPopupOpen && <ErrorPopup errors={errors} onClose={closeErrorPopup} />}
    </div>
  );
}

export default LoginPage;