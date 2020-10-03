import React from 'react';
import './Article.css';
import { stories } from './Stories.js';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: stories[this.props.index-1],
    }
  }
  
  newTab = () => {
    window.open(stories[this.props.index-1].url);
  }

  render () {
    return (
      <div className='Article' onClick={this.newTab}>
        <div>
          <img className='img' src={this.state.article.image} alt={"../Images" + this.state.article.image.substring(6)}></img>
        </div>
        
        <div className='headline'>
          <h3>{this.state.article.title}</h3>
          <h4>By {this.state.article.author}</h4>
        </div>
      </div>
    );
  }
}


export default Article;
