import React from 'react';
import './About.css';


var hour = new Date().getHours();
var time_of_day;
if (hour > 5 && hour <= 11) {
  time_of_day = "Good morning"
} else if (hour > 11 && hour <= 18) {
  time_of_day = "Hello"
} else if (hour > 18 || hour <= 5) {
  time_of_day = "Good evening"
}

function About() {
  return (
    <div className='About'>
     
     <div id='meat'>
     
       <h2>About Bernard Mendez</h2>
        <p>
          <b>{time_of_day}</b>. I am a journalist based out of the Los Angeles and Orange County area. I currently attend UCLA, where I study applied mathematics.
        </p>
        <p>
          I am hoping to pursue a career either as a data journalist or as a reporter covering topics like technology, policy or business. If you are reading this, I am probably looking for employment.
        </p>
        <p>
          Feel free to reach out to me at my email, <a href='mailto: bhmendez@protonmail.com'>bhmendez@protonmail.com &#10063;</a>, or via my Twitter, <a href='https://twitter.com/bernardhmendez'>@bernardhmendez &#10063;</a>.
        </p>

      <h2>Reporting Experience</h2>
       <ul>
        <li>College Journalism Network Fellow, <a href='https://calmatters.org'>CalMatters &#10063;</a> - <i>Fall 2021</i></li>
        <li>Editorial Intern, <a href='https://dot.LA'>dot.LA &#10063;</a> - <i>Summer 2021</i></li>
        <li>News editor, <a href='https://dailybruin.com'>Daily Bruin &#10063;</a> - <i>2020 to 2021</i></li>
        <li>Reporter/Photographer, <a href='https://dailybruin.com'>Daily Bruin &#10063;</a> - <i>2019 to 2020</i></li>
       </ul>

      <h2>Technical Skills</h2>
       <ul>
        <li>Proficient in <b>Python</b> and <b>Javascript</b>, moderately proficient in <b>C++</b></li>
        <li>Data analysis using <b>pandas</b> and <b>Jupyter notebooks</b></li>
        <li>Front end web development with <b>Javascript</b>, <b>React.js</b>, <b>CSS</b> and <b>HTML</b></li>
        <li>Data visualization with <b>D3.js</b>, <b>Chart.js</b> and other Javascript packages</li>
        <li>Machine learning with packages like numpy and scikit</li>
       </ul>
      
      <h2>Quick Links</h2>
       <ul>
        <li><a href='https://twitter.com/bernardhmendez'>Twitter &#10063;</a> – (@bernardhmendez)</li>
        <li><a href='https://www.linkedin.com/in/bernard-mendez/'>LinkedIn &#10063;</a> – (/in/bernard-mendez)</li>
        <li><a href='https://github.com/bernardmendez'>Github &#10063;</a> – (@bernardmendez)</li>
       </ul>
      
      <h2>Here are some examples of my work:</h2>
        <ul>
          <li><a href='#0'>Reporting on UCLA student at the U.S. Capitol riots &#10063;</a></li>
          <li><a href='#1'>Data reporting &#10063;</a></li>
          <li><a href='#2'>Reporting on the COVID-19 pandemic &#10063;</a></li>
          <li><a href='#3'>Other daily reporting &#10063;</a></li>
        </ul>


     </div>
    
    </div>
  );
}

export default About;
