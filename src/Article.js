import React from 'react';
import './Article.css';

const headline = 'Rats Orchestrate Takeover of New York City';
const author = 'Bernard Mendez';
const link = '.';

class Article extends React.Component {

  newTab = (link) => {
    window.open(link);
  }

  render () {
    return (
      <div className='Article' onClick={this.newTab}>
        <div>
          <div class='img'></div>
        </div>
        
        <div className='headline'>
          <h3>{headline}</h3>
          <h4>By {author}</h4>
        </div>
      </div>
    );
  }
}


export default Article;
