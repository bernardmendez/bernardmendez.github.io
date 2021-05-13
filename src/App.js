import React from 'react';
import './App.css';
import About from './homepage/About.js';
import Section from './homepage/Section.js';

function App() {

  const date = new Date();
  const day_of_the_month = date.getDate();
  const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const month = month_names[date.getMonth()];
  const year = date.getFullYear();

  return (
    <div className="App">
      
      <div id='header'>
        <h2>Bernard Mendez</h2>
        <b>{month} {day_of_the_month}, {year}</b>
      </div>


            
      <About />
      
        <div id='line'></div>


      <div id='header'>  
        <p><i>Created by Bernard Mendez using React</i></p>
      </div>

    </div>
  );
}

export default App;
