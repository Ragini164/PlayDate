// ErrorPopup.js
import React from 'react';

function ErrorPopup({ errors, onClose }) {
  return (
    <div className="error-popup">
      <div className="error-popup-content">
        <h2>Error</h2>
        <ul>
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default ErrorPopup;