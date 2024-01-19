import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/Requests.css';
import Screen2 from './Nopets';
import { Link } from 'react-router-dom';

function Screen1() {
  const [availablePets, setAvailablePets] = useState([]);

  useEffect(() => {
    const fetchAvailablePets = async () => {
      try {
        const response = await axios.get('http://localhost:3010/api/available-playdate-requests');
        console.log('Fetched Data:', response.data); // Log the fetched data
        setAvailablePets(response.data);
      } catch (error) {
        console.error('Error fetching available pets:', error);
      }
    };

    fetchAvailablePets();
  }, []); // Empty dependency array to fetch data only once

  
  // Update body class to apply unique styles for this screen
  useEffect(() => {
    document.body.classList.add('screen1-body');
    return () => {
      document.body.classList.remove('screen1-body');
    };
  }, []);


  return (
    <div>
      <div className="requests-screen-app-bar">
        <div className="requests-screen-left-content">
          <div className="requests-screen-text-wrapper-5">PlayDate</div>
        </div>
        <div className="requests-screen-right-content">
          <div className="requests-screen-group">
            <div className="requests-screen-text-wrapper-2">
              <Link to="/about">About</Link>
            </div>
            {/* <div className="requests-screen-text-wrapper-2">About</div> */}
            <div className="requests-screen-text-wrapper-3">Contact Us</div>
            <div className="requests-screen-text-wrapper-4">Profile</div>
            <img
              className="ri-arrow-drop-down-2"
              src="https://c.animaapp.com/Wrx0uJr5/img/ri-arrow-drop-down-fill-1.svg"
              alt="Arrow"
            />
          </div>
        </div>
      </div>

      <div className="requests-screen-container">
        {availablePets.length > 0 ? (
          availablePets.map((pet, index) => (
            <div className={`requests-screen-frame requests-screen-frame-${index + 1}`} key={index}>
              <div className={`requests-screen-ellipse requests-screen-ellipse-${index + 1}`}>
                <img src={pet.imageURL} alt={`Pet ${index + 1}`} />
              </div>
              <div className="requests-screen-text-wrapper">
                {`${pet.petName} has connected with you!`}
              </div>
            </div>
          ))
        ) : (
          <Screen2 />
        )}       
        <p className="requests-screen-choose-to-chat">Choose one to start a chat!</p>
      </div>
    </div>
  );
}

export default Screen1;
