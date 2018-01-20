import React, {Component} from 'react';
const history = window.history;

export default class Route extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    const info = {
      'url': event.target.href,
      'path': event.target.pathname
    };

    this.handlePush(info.url);
    this.props.handleRoute(info);
  }

  handlePush(url) {
    // Create a history, and transition to next url
    history.pushState(null, null, url);
  }

  render() {
    return (<React.Fragment>
      <a href={this.props.path} onClick={this.handleClick}>{this.props.text}</a>
    </React.Fragment>);
  }
}
