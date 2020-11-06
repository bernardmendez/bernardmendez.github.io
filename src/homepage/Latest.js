import React from 'react';
import Article from '../Article.js';
import './Latest.css';
import { stories } from '../Stories.js';

const len = stories.length;

class Latest extends React.Component {

  constructor() {
    super();
    this.state = {
      articlesToShow: 3,
      stories: stories,
    }
    this.seeMore = this.seeMore.bind(this);
  }
  
  seeMore() {
    this.setState({
      articlesToShow: this.state.articlesToShow += 2,
    });
  }

  render() {
    return (
      <div className='Latest'>
        <h2><i>Latest Articles</i></h2>
        <div>
          {
            this.state.stories.slice(0, this.state.articlesToShow).map((story, i) =>
              <Article index={len-i} />
            )
          }
        <div id='button_container'>
          <button id='seeMoreButton' onClick={this.seeMore}>See More</button>
        </div>
        </div>
      </div>
    );
  }
}

export default Latest;
