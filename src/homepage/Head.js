import React from 'react';
import Article from '../Article.js';
import './Head.css';
import { stories } from '../Stories.js';

var temp = stories;

function Head(props) {
  return (
    <div className='Head'>
    
      <Article index={props.head}/>
      <div id='description'>
        <p>Follow along here for the latest updates on election results in LA County and California 
          for five races that may affect UCLA students: 
          the president of the United States, Proposition 14, Proposition 16, 
          the 33rd District U.S. House representative and the LA County district attorney. Read more <a href='https://dailybruin.com/2020/11/03/2020-election-results-in-california-and-los-angeles-county'> here &#10063;</a></p>
      </div>
      
    </div>
  );
}

export default Head;
