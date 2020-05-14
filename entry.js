
'use strict';

const e = React.createElement;

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
    
  }
}

const domContainer = document.querySelector('#entry');
ReactDOM.render(e(Entry), domContainer);
