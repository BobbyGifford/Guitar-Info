import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/navbar";
import Home from "./containers/Home";
import About from "./components/about";
import Topic from './containers/Topic';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/topic/:topicName" component={Topic} /> 
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
