import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/navbar";
import Welcome from "./components/welcome";
import Home from "./containers/Home";
import About from "./components/about";
import Topic from './containers/Topic';
import ListByLocation from './containers/ListByLocation';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <div>
            <Route exact path="/" component={Welcome} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topic/:topicName" component={Topic} />
            <Route path="/listOf/:location" component={ListByLocation} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
