import React from 'react';
import Article from './Article.js';
import './Head.css';
import { stories } from './Stories.js';

var temp = stories;

function Head() {
  return (
    <div className='Head'>
    
      <Article index={66}/>
      <div id='description'>
        <p>UCLA will likely not fully reopen until an effective COVID-19 treatment is available to students and staff, according to UCLA’s four-phase reopening plan released Friday. The plan eases restrictions on campus activities in four phases, with the last phase being a return to normal operations. The plan is based on public health guidelines from the state, county and University of California. Read more <a href='https://dailybruin.com/2020/09/18/ucla-to-likely-not-fully-reopen-until-effective-covid-19-treatment-is-available'>here &#10063;</a></p>
      </div>
      
    </div>
  );
}

export default Head;
