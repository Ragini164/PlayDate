import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/pets.css';

function Screen4() {
  const [pets, setPets] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    fetchAvailablePets();
  }, []);

  const fetchAvailablePets = async () => {
    try {
      const response = await fetch('http://localhost:3005/api/Pet/available-pets');
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      setPets(data);
    } catch (error) {
      console.error('Error fetching available pets:', error);
    }
  };

  const handleButtonClick = () => {
    navigate('/Screen2'); // Replace '/Screen2' with the desired route
  };

  return (
    <div className="dashboard">
      {/* Render pets fetched from backend */}
      {pets.map((pet, index) => (
        <PetWrapper text={pet.petName} imageURL={pet.imageURL} key={index} />
      ))}
      <button className="pet-screen-about-back-button" onClick={handleButtonClick}>
        Back
      </button>
    </div>
  );
}

function PetWrapper({ imageURL, text }) {
  return (
    <div className="pet_wrapper">
      <img src={imageURL} alt={text} />
      <button>{text}</button>
    </div>
  );
}

export default Screen4;
