import React, { Component } from "react";

import siteInfo from "../guitarDetails";

class Topic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topicName: this.props.match.params.topicName,
      guitarList: siteInfo.guitarDetails
    };
  }

  render() {
    var guitarQuery = this.state.guitarList.filter(item => {
      return item.topic === this.state.topicName;
    });

    var currentGuitar = guitarQuery[0];

    return (
      <div className="container">
        <div className="row">
          <h1 style={{ textAlign: "center" }} className="col-12 mx-auto">
            {currentGuitar.topic}
          </h1>
        </div>
        <div className="row">
          <img
            className="img-fluid"
            alt="display"
            style={{ margin: "auto", maxHeight: "20em" }}
            src={currentGuitar.image}
          />
        </div>
        <div className="row my-2">
          <div className="col-12 mx-auto">
            <h4>Factors: {currentGuitar.factors}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mx-auto">{currentGuitar.description1}</div>
        </div>
      </div>
    );
  }
}

export default Topic;
