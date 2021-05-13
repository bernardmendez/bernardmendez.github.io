import React from 'react';
import './About.css';


function About() {
  return (
    <div className='About'>
     
     <div id='meat'>
     
       <h2>About Bernard</h2>
        <p>
          Bernard is a journalist based out of Los Angeles. He currently attends UCLA, where he studies applied mathematics.
        </p>
       <h2>Quick Links</h2>
       <ul>
        <li><a href='https://twitter.com/bernardhmendez'>Twitter &#10063;</a> – (@bernardhmendez)</li>
        <li><a href='https://www.linkedin.com/in/bernard-mendez/'>LinkedIn &#10063;</a> – (/in/bernard-mendez)</li>
        <li><a href='https://github.com/bernardmendez'>Github &#10063;</a> – (@bernardmendez)</li>
       </ul>

       <h2>Experience</h2>
       <ul>
        <li>Editorial Intern, <a href='https://dot.LA'>dot.LA &#10063;</a> - <i>Summer 2021</i></li>
        <li>News editor, <a href='https://dailybruin.com'>Daily Bruin &#10063;</a> - <i>2020 to 2021</i></li>
        <li>Reporter/Photographer, <a href='https://dailybruin.com'>Daily Bruin &#10063;</a> - <i>2019 to 2020</i></li>
       </ul>

       <h2>Coding</h2>
       <ul>
        <li>Object-oriented: Proficient in Python and Javascript, moderately proficient in C++</li>
        <li>Front-end Web Development: Proficient in Javascript, React.js, CSS and HTML</li>
       </ul>
       
       <h2>Contact Bernard</h2>
       <ul>
        <li>You can contact Bernard at: bernardhmendez@gmail.com or bernardhmendez@protonmail.com</li>
       </ul>
       
     </div>
    
    </div>
  );
}

export default About;
