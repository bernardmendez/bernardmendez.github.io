import React from 'react';
import Article from './Article.js';
import './Featured.css';

function Featured() {
  return (
    <div className='Featured'>
      <h2><i>Featured Articles</i></h2>
      <div id='Featured'>
        <Article index={56} />
        <Article index={70} />
        <Article index={34} />
      </div>
    </div>
  );
}

export default Featured;
