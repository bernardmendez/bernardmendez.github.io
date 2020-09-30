import React from 'react';
import './Multimedia.css';

const headline = 'Rats Orchestrate Takeover of New York City';

function Multimedia() {
  return (
    <div className='Multimedia'>
      <div id='img_container'>
        <div id='img'>
        <div className='next'>&#9655;</div>
        <div className='next'>&#9655;</div>
        </div>
        <img></img>
      </div>
      
      <div id='img_description'>
        <div>
          <h4>{headline}</h4>
          <p>Rats Orchestrate Takeover of New York City. Rats Orchestrate Takeover of New York City. Rats Orchestrate Takeover of New York City.</p>
        </div>
      </div>
      
    </div>
  );
}

export default Multimedia;
