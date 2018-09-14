[![npm version](https://badge.fury.io/js/rubel-router.svg)](https://badge.fury.io/js/rubel-router)

# Rubel Router
The simple router package for React with path-to-regexp.

# Installation
`npm install --save rubel-router`

# Get Started

`routes.js`
```javascript
import React, {Component} from "react";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Post from "./Post";

const HomeComponent = (params) => (<Home {...params}/>);
const DashboardComponent = (params) => (<Dashboard {...params}/>);
const ProfileComponent = (params) => (<Profile {...params}/>);
const PostComponent = (params) => (<Post {...params}/>);

export const routes = [
  {
    path: "/",
    action: HomeComponent
  }, {
    path: "/dashboard",
    action: DashboardComponent
  }, {
    path: "/profile",
    action: ProfileComponent
  }, {
    path: "/post/:id",
    action: PostComponent
  }
];
```

`App.js`
```javascript
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

  handleRoute(info) {
    // Update url info
    this.setState(info);
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
      <Router routes={routes} info={this.state}/>
    </React.Fragment>);
  }
}

export default App;
```

# Example
`cd rubel-router/example/`

`npm install`

`npm start`

## License

This project is licensed under the terms of the MIT license.

## Author

bmf - A Web Developer in Japan.

- [@bmf-san](https://twitter.com/bmf_san)
- [bmf-tech](http://bmf-tech.com/)
