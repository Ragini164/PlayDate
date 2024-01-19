import React from "react";
//import './globals.css';
// import '../style/UserProfile.css';
import '../Styles/UserProfile.css';
import { useHistory, useNavigate } from 'react-router-dom';

function UserProfile(){

  const navigate = useNavigate();
  const Pet = () => {navigate('/')}; // Navigate to the login screen}


  return (
    <div className="user-profile">
      <div className="div">
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="text-wrapper">Adam</div>
          <div className="flexcontainer">
            <p className="text">
              <span className="span">
                Add Description
                <br />
              </span>
            </p>
            <p className="text">
              <span className="span">
                Add Description
                <br />
              </span>
            </p>
            <p className="text">
              <span className="span">Add Description</span>
            </p>
          </div>
          <div className="text-wrapper-2">Area:</div>
          <div className="text-wrapper-3">Age:</div>
          <div className="flexcontainer-2">
            <p className="span-wrapper">
              <span className="text-wrapper-4">
                Favorite <br />
              </span>
            </p>
            <p className="span-wrapper">
              <span className="text-wrapper-4">Breed:</span>
            </p>
          </div>
          <img className="img" alt="Rectangle" src="rectangle-26.png" />
        </div>
        <div className="overlap">
          <img className="vector" alt="Vector" src="vector-2.png" />
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <img className="iconoir-heart-solid" alt="Iconoir heart solid" src="iconoir-heart-solid.png" />
          <div className="text-wrapper-5">8</div>
          <div className="text-wrapper-6">Total Playdates</div>
          <div className="rectangle-4" />
          <div className="rectangle-5" />
          <div className="text-wrapper-7">4.5</div>
          <div className="text-wrapper-8">10</div>
          <div className="text-wrapper-9">Rating</div>
          <div className="text-wrapper-10">Followers</div>
          <img className="tabler-thumb-up" alt="Tabler thumb up" src="tabler-thumb-up-filled.png" />
          <img className="solar-star-line" alt="Solar star line" src="solar-star-line-duotone.png" />
          
        </div>
        <div className="overlap-2">
          <div className="overlap-3">
            <img className="vector-2" alt="Vector" src="vector-3.png" />
            <div className="rectangle-6" />
            <div className="rectangle-7" />
            <div className="text-wrapper-11">Reviews</div>
          </div>

          <div className="text-wrapper-12" onClick={() => navigate('/')}>
            Back</div>
          </div>

      </div>
    </div>
  );
};

export default UserProfile;