import React from "react";
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
    component: HomeComponent
  }, {
    path: "/dashboard",
    component: DashboardComponent
  }, {
    path: "/profile",
    component: ProfileComponent
  }, {
    path: "/post/:id",
    component: PostComponent
  }
];
