import React, { Component } from "react";

import siteInfo from '../guitarDetails';

class Topic extends Component {
    constructor(props){
        super(props)

    this.state = {
        topicName: this.props.match.params.topicName,
        guitarList: siteInfo.guitarDetails
    }

    }

  render() {
    var guitarQuery = this.state.guitarList.filter((item) => {
        return item.topic === this.state.topicName;
    })

    var currentGuitar = guitarQuery[0];


    return (
      <div className="container">
        <div className="row">
          <div className="col-12 mx-auto">{currentGuitar.topic}</div>
        </div>
        <div className="row">
        <div className="col-12 mx-auto">{currentGuitar.description}</div>
        </div>
      </div>
    );
  }
}

export default Topic;
