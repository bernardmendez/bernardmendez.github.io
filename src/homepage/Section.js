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

const Portfolio = () => {
    return (
        <div id='portfolio'>
            <Section title='Reporting on UCLA student at the U.S. Capitol riots' index={0}/>
            <Section title='Data reporting' index={1}/>
            <Section title='COVID-19 reporting' index={2}/>
            <Section title='Other daily reporting' index={3}/>
        </div>
    );
}

export default Portfolio;