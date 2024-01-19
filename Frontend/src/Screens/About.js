
import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './screen3.css'; // Import the CSS file
// import './src/App.css';
import '../Styles/About.css'
const Screen3 = () => {
    const navigate = useNavigate();
  
    const handleButtonClick = () => {
      navigate('/');
    };
  
    return (
      <div className="about-screen">
        <img
          className="about-rectangle"
          src="https://c.animaapp.com/1uO5SkcF/img/rectangle-7.png"
          alt="Cat and dog"
        />
        <div className="about-text-wrapper">
          Playdate: where<br />paw-sibilities<br />begin
        </div>
        <p className="about-are-you-tired-of">
          Are you tired of swiping left on<br />dating apps for humans? Well,<br />your furry, feathered, or scaly<br />friend
          deserves love too! We've<br />unleashed the perfect solution -<br />a dating app where pets swipe<br />for
          their own happily ever after.
        </p>
        <img
          className="about-pexels-belen-capello"
          src="https://c.animaapp.com/1uO5SkcF/img/pexels-belen-capello-7527369--1--2.png"
          alt="Belen Capello on Pexels"
        />
        <button className="about-back-button" onClick={handleButtonClick}>
          Back
        </button>
      </div>
    );
  };
  
export default Screen3;
