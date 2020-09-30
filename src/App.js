import React from 'react';
import './App.css';
import Head from './Head.js';
import Featured from './Featured.js';
import Latest from './Latest.js';
import Multimedia from './Multimedia.js';
import About from './About.js';

const day_names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


function App() {

  const date = new Date();
  const day_of_the_week = date.getDay();
  const day_of_the_month = date.getDate();
  const month = month_names[date.getMonth()];
  const year = date.getFullYear();

  return (
    <div className="App">
      
      <div>
        <h1>Bernard Mendez</h1>
        <b>{month} {day_of_the_month}, {year}</b>
      </div>
      
      <div id='line'></div>
      

      <Head />
            
      <Featured />

      <div id='line'></div>
      <About />
      <div id='line'></div>
      <Multimedia />

      <Latest />

      <div id='line'></div>



      <div id='line'></div>
      
      <p><i>Created by Bernard Mendez, 2020, using React</i></p>
            
    </div>
  );
}

export default App;
