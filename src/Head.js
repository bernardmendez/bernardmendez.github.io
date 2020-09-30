import React from 'react';
import Article from './Article.js';
import './Head.css';

function Head() {
  return (
    <div className='Head'>
    
      <Article />
      
      <div id='description'>
        <p>Bernard is a journalist based out of Los Angeles. He is currently the News editor at the Daily Bruin and a third-year Applied Mathematics student at UCLA. He is also a contributor for CalMatters as part of its College Journalism Network. Read more <a href=''>here &#10063;</a></p>
      </div>
      
    </div>
  );
}

export default Head;
