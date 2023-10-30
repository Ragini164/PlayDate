import React from 'react';
import './screen1.css'; // Import the CSS file
function Screen1() {
  return (
    <div>
      <div className="app-bar">
        <div className="left-content">
          <div className="text-wrapper-5">PlayDate</div>
        </div>
        <div className="right-content">
          <div className="group">
            <div className="text-wrapper-2">About</div>
            <div className="text-wrapper-3">Contact Us</div>
            <div className="text-wrapper-4">Profile</div>
            <img
              className="ri-arrow-drop-down-2"
              src="https://c.animaapp.com/Wrx0uJr5/img/ri-arrow-drop-down-fill-1.svg"
              alt="Arrow"
            />
          </div>
        </div>
      </div>

      <div className="screen-container">
        {/* Place your frames here */}
        <div className="frame frame-1">
          <div className="ellipse ellipse-1">
            <img
              src="https://c.animaapp.com/Wrx0uJr5/img/ellipse-4@2x.png"
              alt="Ellipse 1"
            />
          </div>
          <div className="text-wrapper">Joey has<br />connected with<br />you!</div>
        </div>
        <div className="frame frame-2">
          <div className="ellipse ellipse-2">
            <img
              src="https://c.animaapp.com/Wrx0uJr5/img/ellipse-6@2x.png"
              alt="Ellipse 2"
            />
          </div>
          <div className="text-wrapper">Kainat has<br />connected with<br />you!</div>
        </div>
        <div className="frame frame-3">
          <div className="ellipse ellipse-3">
            <img
              src="https://c.animaapp.com/Wrx0uJr5/img/ellipse-3@2x.png"
              alt="Ellipse 3"
            />
          </div>
          <div className="text-wrapper">Tommy has<br />connected with<br />you!</div>
        </div>
        <p className="p">Choose one to start a chat!</p>
      </div>
    </div>
  );
}

export default Screen1;
