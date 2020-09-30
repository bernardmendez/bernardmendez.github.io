import React from 'react';
import Article from './Article';
import './Latest.css';

function Latest() {
  return (
    <div className='Latest'>
      <h2><i>Latest Articles</i></h2>
      <Article />
      <Article />
      <Article />
      <button>See More</button>
    </div>
  );
}

export default Latest;
