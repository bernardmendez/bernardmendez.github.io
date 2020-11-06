import React from 'react';
import './App.css';
import Head from './homepage/Head.js';
import Featured from './homepage/Featured.js';
import Latest from './homepage/Latest.js';
import Multimedia from './homepage/Multimedia.js';
import About from './homepage/About.js';


function App() {

  const date = new Date();
  const day_of_the_month = date.getDate();
  const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const month = month_names[date.getMonth()];
  const year = date.getFullYear();

  return (
    <div className="App">
      
      <div>
        <h1>Bernard Mendez</h1>
        <b>{month} {day_of_the_month}, {year}</b>
      </div>
      
        <div id='line'></div>

      <Head head={78}/>
            
      <Featured left={79} middle={75} right={72}/>
      
        <div id='line'></div>
            
      <Latest />
      
        <div id='line'></div>
      
      <About />
      
        <div id='line'></div>
            
      <p><i>Created by Bernard Mendez using React</i></p>
            
    </div>
  );
}

export default App;
