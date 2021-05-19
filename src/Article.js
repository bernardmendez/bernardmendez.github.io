import React from 'react';
import './Article.css';
import { stories } from './Stories.js';

class Article extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      article: stories[this.props.index-1],
      show: 'none',
    }

  }
  
  newTab = () => {
    window.open(stories[this.props.index-1].url);
  }
  

  render () {
    return (
      <div className='Article' onClick={this.newTab}>
        <div>
          <img className='img' src={this.state.article.image}></img>
        </div>
        
        <div className='headline'>
          <h3>{this.state.article.title}</h3>
          <h5>By {this.state.article.author}</h5>
          {/*
          <p style={{display: this.show,}}>{this.state.article.description} Read more here &#10063;</p>
          */}
        </div>
      </div>
    );
  }
}


export default Article;
