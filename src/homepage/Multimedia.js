import React from 'react';
import './Multimedia.css';
import { photos } from '../Photography.js';

const headline = 'Rats Orchestrate Takeover of New York City';

class Multimedia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      max: photos.length - 1,
      index: 0,
    };
  }
  
  increase = (direction) => {
    let newIndex = this.state.index + direction;
    
    if (newIndex == -1)
      { newIndex = this.state.max; }
    else if (newIndex == this.state.max + 1)
      { newIndex = 0; }
    
    this.setState({
     index: newIndex
    });
  }
    
  render() {
    return (
      <div className='Multimedia'>
      
        <button onClick={() => this.increase(1)}>increase</button>
        <button onClick={() => this.increase(-1)}>decrease</button>
        <div className='photos'>
          <img src={photos[this.state.index].src} />
        </div>
        <div>
          <span>
            {photos[this.state.index].label}
          </span>
          <span>
            {this.state.index} / {this.state.max}
          </span>
        </div>
        
      </div>
    );
  }
}

export default Multimedia;
