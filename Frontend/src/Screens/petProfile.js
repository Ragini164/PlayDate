import React, { useState, useEffect } from 'react';
import '../Styles/petProfile.css'
import { useHistory, useNavigate } from 'react-router-dom';
function PetProfile(){
  const [count, setcount] = useState(0);

  const navigate = useNavigate();
  const User = () => {
    console.log('Contact Owner clicked');
    navigate('/userprofile');
  };

  const toggleImageForward = () => {
    if (count < 4) {
      setcount(count + 1);
    }
  };

  const toggleImageBack = () => {
    if (count > 0) {
      setcount(count - 1);
    }
  };
  
  return (
    <div className="pet-profile">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <img className="vector" alt="Vector" src="https://c.animaapp.com/kIsUFLxW/img/vector-1.png" />
            <img className="img" alt="Vector" src="https://c.animaapp.com/kIsUFLxW/img/vector-2.svg" />
            <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/kIsUFLxW/img/rectangle-18@2x.png" />
            <div className="div" />
            {/* <img
              className="rectangle-2"
              alt="Rectangle"
              src="https://c.animaapp.com/kIsUFLxW/img/rectangle-20@2x.png"
            /> */}
            <div className="rectangle-3" />
            <div className="rectangle-4" />
            <div className="rectangle-5" />
            <div className="text-wrapper">Koko’s Profile</div>
            <div className="text-wrapper-2">Breed:Ragdoll</div>
            <div className="text-wrapper-3">Age:5</div>
            <div className="text-wrapper-4">Location:Clifton</div>
            <div className="rectangle-6" />
            <div className="rectangle-7" />
            <div className="rectangle-8" />
            <div className="rectangle-9" />
            <img
              className="icon-arrow-right"
              alt="Icon arrow right"
              src="https://c.animaapp.com/kIsUFLxW/img/---icon--arrow-right--1@2x.png"

              onClick={toggleImageBack}
            />
            <img
              className="icon-arrow-right-2"
              alt="Icon arrow right"
              src="https://c.animaapp.com/kIsUFLxW/img/---icon--arrow-right-@2x.png"

              onClick={toggleImageForward}
            />


            {count === 0 && (
              <img
                className="rectangle-2"
                src="https://c.animaapp.com/kIsUFLxW/img/rectangle-20@2x.png"
                alt="Image 0"
              />
            )}
            {count === 1 && (
              <img
                className="rectangle-2"
                src="https://c.animaapp.com/0Q3SQHCs/img/rectangle-18@2x.png"
                alt="Image 1"
              />
            )}
            {count >= 2 && (
              <img
              className="rectangle-2"
              src="add-image.png" 
              alt="Image 3"
              />
            )}
            {count === 3 && (
              <img
                className="rectangle-2"
                src="add-image.png" 
                alt="Image 4"
              />
            )}
            {count === 4 && (
              <img
                className="rectangle-2"
                src="add-image.png" 
                alt="Image 5"
              />
            )}

            {/* Add ImageUpload component with onSelectImage prop
            <ImageUpload onSelectImage={setSelectedImage} />

            {/* Add the following section for displaying the selected image */}
            {/* <DisplayImagePage imageUrl={selectedImage} /> */} 

            {/* {showAlternateImage ? (
              <img
                className="rectangle-2"
                src="https://c.animaapp.com/0Q3SQHCs/img/rectangle-18@2x.png"
              />
            ) : (
              <> </>
            )} */}

            <div className="text-wrapper-5" onClick={() => navigate('/userprofile')}>
              Contact Owner
            </div>

            <div className="text-wrapper-edit" onClick={() => navigate('/editpetprofile')}>
              Edit
            </div>

            

            <img
              className="rectangle-10"
              alt="Rectangle"
              src="https://c.animaapp.com/kIsUFLxW/img/rectangle-26@2x.png"
            />
            
          </div>
          <div className="overlap-group-2">
            <img className="vector-2" alt="Vector" src="https://c.animaapp.com/kIsUFLxW/img/vector-3.png" />
            <div className="rectangle-11" />
            <div className="rectangle-12" />
            <div className="rectangle-13" />
            <img className="rectangle-14" alt="Rectangle" src="https://c.animaapp.com/kIsUFLxW/img/rectangle-33.svg" />
            <div className="rectangle-15" />

            

            <div className="point-point-point">
              point
              <br />
              point
              <br />
              point
            </div>
            <div className="point-point-point-2">
              point
              <br />
              point
              <br />
              point
            </div>
            <div className="text-wrapper-6">Koko Likes</div>
            <div className="text-wrapper-7">Koko Dislikes</div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default PetProfile;