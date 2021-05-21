import React from 'react';
import './App.css';
import About from './homepage/About.js';
import Portfolio from './homepage/Section.js';

function App() {

  const date = new Date();
  const day_of_the_month = date.getDate();
  const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const month = month_names[date.getMonth()];
  const year = date.getFullYear();

  return (
    <div className="App">
                  
      <About />
      
      <Portfolio />


      <div id='header'>  
        <p><i>Created by Bernard Mendez using React</i></p>
      </div>

      <p id='go_to_top'><a href=''><b>Go to top</b></a></p>

    </div>
  );
}

export default App;
