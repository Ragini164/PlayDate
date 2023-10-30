import React from 'react';
import './screen4.css'; // Import your CSS file

function Screen4() {
  return (
    <div className="screen">
      <div className="rectangle" id="rectangle1"></div>
      <div className="rectangle" id="rectangle2"></div>
      <div className="rectangle" id="rectangle3"></div>
      <div className="rectangle" id="rectangle4"></div>
      
      <SquareBox id="square-box1" text="Dogs" />
      <SquareBox id="square-box2" text="Cats" />
      <SquareBox id="square-box3" text="Hamsters" />
      <SquareBox id="square-box4" text="Turtles" />
    </div>
  );
}

function SquareBox({ id, text }) {
  return (
    <div className="square-box" id={id}>
      <div className="text-wrapper">{text}</div>
    </div>
  );
}

export default Screen4;
