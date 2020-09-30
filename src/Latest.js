import React from 'react';
import Article from './Article';
import './Latest.css';
import { stories } from './Stories.js';

const len = stories.length;

function Latest() {
  return (
    <div className='Latest'>
      <h2><i>Latest Articles</i></h2>
      <Article index={len} />
      <Article index={len-1} />
      <Article index={len-2} />
      <Article index={len-3} />
      <Article index={len-4} />
    </div>
  );
}

export default Latest;
