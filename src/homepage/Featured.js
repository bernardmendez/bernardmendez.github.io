import React from 'react';
import Article from '../Article.js';
import './Featured.css';

function Featured(props) {
  return (
    <div className='Featured'>
      <h2><i>Featured Articles</i></h2>
      <div id='Featured'>
        <Article index={props.left} />
        <Article index={props.middle} />
        <Article index={props.right} />
      </div>
    </div>
  );
}

export default Featured;
