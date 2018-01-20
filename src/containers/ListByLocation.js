import React, { Component } from "react";
import { Link } from "react-router-dom";

import siteInfo from "../guitarDetails";

class GuitarList extends Component {
  renderContent() {
    // eslint-disable-next-line
    return siteInfo.guitarDetails.map(guitar => {
      if (guitar.location === this.props.match.params.location) {
        return (
          <div className="col-md-3 my-3" key={guitar.topic}>
            <div
              className="card"
              style={{ textAlign: "center", height: "25em" }}
            >
              <img
                className="card-img-top img-thumbnail card-img"
                src={guitar.image}
                alt="a"
              />
              <h5 className="card-title">{guitar.topic}</h5>
              <hr />
              <Link to={"/topic/" + guitar.topic}>
                <button className="btn btn-primary btn-lg mb-2">Learn More</button>
              </Link>
            </div>
          </div>
        );
      }
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">{this.renderContent()}</div>
      </div>
    );
  }
}

export default GuitarList;
