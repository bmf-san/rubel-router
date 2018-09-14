import React, {Component, Fragment} from 'react';
const history = window.history;

export default class Route extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    const locations = {
      'url': event.target.href,
      'path': event.target.pathname
    };

    this.handlePush(locations.url);
    this.props.handleRoute(locations);
  }

  handlePush(url) {
    history.pushState(null, null, url);
  }

  render() {
    return (<Fragment>
      <a href={this.props.path} onClick={this.handleClick}>{this.props.text}</a>
    </Fragment>);
  }
}
