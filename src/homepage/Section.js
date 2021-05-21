import React from 'react';
import './Section.css';
import Article from "../Article.js";
import { ArticleChoices } from "../ArticleChoices.js";

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        expanded: true,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
      this.setState(state => ({
          expanded: !this.state.expanded,
      }));
      this.collapse();
  }

  test(a) {
    return (
        <div>
            {ArticleChoices[a].map(items => (
              <div className='content-holder'>
                <div id='descriptions'>
                    <div className='descr'>{items.descr}</div>
                </div>
                <div id='stories'>
                    <Article index={items.story} />
                </div>
              </div>
            ))}
        </div>
     
    )
  }

  render() {
    return (
      <div className='outer' id={this.props.index}>
        <div id='topBar'>
          <h2>{this.props.title}</h2>
          {this.test(this.props.index)}
        </div>
      </div>
    );
  }
}

const Otherlinks = () => {
    return (
        <div id='other_ex'>
        <div id='other_ex_2'>
          <h2>Other examples:</h2>
          <ul>
            <li><a href='#0'>Reporting on UCLA student at the U.S. Capitol riots &#10063;</a></li>
            <li><a href='#1'>Data reporting &#10063;</a></li>
            <li><a href='#2'>Reporting on the COVID-19 pandemic &#10063;</a></li>
            <li><a href='#3'>Other daily reporting &#10063;</a></li>
          </ul>
        </div>
      </div>
    )
}

const Portfolio = () => {


    return (
        <div id='portfolio'>
            <Section title='Reporting on UCLA student at the U.S. Capitol riots' index={0}/>
            <Otherlinks />
            <Section title='Data reporting' index={1}/>
            <Otherlinks />
            <Section title='COVID-19 reporting' index={2}/>
            <Otherlinks />
            <Section title='Other daily reporting' index={3}/>
            <Otherlinks />
        </div>
    );
}

function fadeOutOnScroll(element) {
	if (!element) {
		return;
	}
	
	var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
	var elementHeight = element.offsetHeight;
	var scrollTop = document.documentElement.scrollTop;
	
	var opacity = 1;
	
	if (scrollTop > distanceToTop) {
		opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
	}
	
	if (opacity >= 0) {
		element.style.opacity = opacity;
    }
}

function scrollHandler() {
    fadeOutOnScroll(document.getElementById('descr'));
}

window.addEventListener('scroll', scrollHandler);


export default Portfolio;