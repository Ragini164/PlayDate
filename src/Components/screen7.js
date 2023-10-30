import React, { useState } from 'react';
import './globals.css'; // Import your global CSS file
import './screen7.css'; // Import your CSS file


function PetProfile() {

  const [showAlternateImage, setShowAlternateImage] = useState(false);

  const toggleImage = () => {
    setShowAlternateImage(!showAlternateImage);
  };

  return (
    <div className="pet-profile">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <img
              className="vector"
              src="https://c.animaapp.com/0Q3SQHCs/img/vector-1.svg"
            />
            <img
              className="img"
              src="https://c.animaapp.com/0Q3SQHCs/img/vector-2.svg"
            />
            <img
              className="rectangle"
              src="https://c.animaapp.com/0Q3SQHCs/img/rectangle-18@2x.png"
            />
            <div className="div"></div>
            <img
              className="rectangle-2"
              src="https://c.animaapp.com/0Q3SQHCs/img/rectangle-20@2x.png"
            />
            <div className="rectangle-3"></div>
            <div className="rectangle-4"></div>
            <div className="rectangle-5"></div>
            <div className="text-wrapper">Koko’s Profile</div>
            <div className="text-wrapper-2">Breed:</div>
            <div className="text-wrapper-3">Age:</div>
            <div className="text-wrapper-4">Location:</div>
            <div className="rectangle-6"></div>
            <div className="text-wrapper-5">Find with Google Maps</div>
            <div className="rectangle-7"></div>
            <div className="rectangle-8"></div>
            <div className="rectangle-9"></div>
            <img
              className="rectangle-10"
              src="https://c.animaapp.com/0Q3SQHCs/img/rectangle-26@2x.png"
            />
            <img
              className="icon-arrow-right"
              src="https://c.animaapp.com/0Q3SQHCs/img/---icon--arrow-right--1@2x.png"
            />
            <img
              className="icon-arrow-right-2"
              src="https://c.animaapp.com/0Q3SQHCs/img/---icon--arrow-right-@2x.png"

              alt="Arrow Right"
              onClick={toggleImage}
            />

            {showAlternateImage ? (
              <img
                className="rectangle-2"
                src="https://c.animaapp.com/0Q3SQHCs/img/rectangle-18@2x.png"
              />
            ) : (
              <img
                className="rectangle-2"
                src="https://c.animaapp.com/0Q3SQHCs/img/rectangle-20@2x.png"
              />
            )}

          </div>
          <div className="overlap-2">
            <img
              className="vector-2"
              src="https://c.animaapp.com/0Q3SQHCs/img/vector-3.svg"
            />
            <div className="rectangle-11"></div>
            <div className="rectangle-12"></div>
            <div className="rectangle-13"></div>
            <img
              className="rectangle-14"
              src="https://c.animaapp.com/0Q3SQHCs/img/rectangle-33.svg"
            />
            <div className="rectangle-15"></div>
            <div className="point-point-point">point<br />point<br />point</div>
            <div className="point-point-point-2">point<br />point<br />point</div>
            <div className="text-wrapper-6">Koko Likes</div>
            <div className="text-wrapper-7">Koko Dislikes</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetProfile;