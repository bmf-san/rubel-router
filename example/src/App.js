import React, {Component} from 'react';
import {Router, Route} from 'rubel-router';
import {routes} from './routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'url': '', // current url
      'path': '' // current path
    };

    this.handleRoute = this.handleRoute.bind(this);
  }

  handleRoute(locations) {
    // Update url locations
    this.setState(locations);
  }

  render() {
    return (<React.Fragment>
      <p>Current URL: {this.state.url}</p>
      <p>Current Path: {this.state.path}</p>
      {/* Navigation */}
      <ul>
        <li>
          <Route path="/" text="Top" handleRoute={this.handleRoute}/>
        </li>
        <li>
          <Route path="/dashboard" text="Dashboard" handleRoute={this.handleRoute}/>
        </li>
        <li>
          <Route path="/profile" text="Profile" handleRoute={this.handleRoute}/>
        </li>
        <li>
          <Route path="/post/9" text="Post-Id" handleRoute={this.handleRoute}/>
        </li>
      </ul>
      {/* Router Component */}
      <Router routes={routes} locations={this.state}/>
    </React.Fragment>);
  }
}

export default App;
