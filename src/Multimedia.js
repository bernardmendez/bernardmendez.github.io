import React from 'react';
import './Multimedia.css';
import Slideshow from './Slideshow.js';

const headline = 'Rats Orchestrate Takeover of New York City';

function Multimedia() {
  return (
    <div className='Multimedia'>
      <div>
        <h2><i>Multimedia</i></h2>
      </div>
      
      <div id='multimedia_container'>
        <Slideshow />
        
        <div id='multimedia_text'>
          <h4>{headline}</h4>
          <p>Text</p>
        </div>
      </div>
    </div>
  );
}

export default Multimedia;
