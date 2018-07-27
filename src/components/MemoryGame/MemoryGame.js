import React from "react";
import "./MemoryGame.css";

const MemoryGame = props => (
  <div 
    className="card" 
  >
    <div className="img-container">
      <img alt={props.name} 
      src={props.image}   
      value={props.id} 
      onClick={() => props.imageClick(props.id)}
      />
    </div>
  </div>
);

export default MemoryGame;
