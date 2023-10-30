import React from 'react';
import './screen2.css';

function Screen2() {
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
        <p className="nothing-to-see-here">
          <span className="text-wrapper">Nothing to see here - </span>
          <span className="span">YET<br /></span>
          <span className="text-wrapper">When approached, their requests will appear here.</span>
        </p>

        <div className="rectangle">
          <div className="div">Find a play date</div>
        </div>
      </div>
    </div>
  );
}

export default Screen2;
