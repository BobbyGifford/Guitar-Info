import React, { Component } from "react";
import { Link } from "react-router-dom";

import siteInfo from "../guitarDetails";

class Home extends Component {
  renderContent() {
    return siteInfo.guitarDetails.map(guitar => {
      return (
        <div className="col-md-3 my-3" key={guitar.topic}>
          <div className="card" style={{ textAlign: "center", height: '25em'}}>
            <img style={{maxHeight: "350px", maxWidth: "300px", margin: 'auto'}} className="card-img-top img-thumbnail" src={guitar.image} alt="a" />
            <h5 className="card-title">{guitar.topic}</h5>
            <hr />
            <Link to={"/topic/" + guitar.topic}>
              <button className="btn btn-dark btn-lg mb-2">Learn More</button>
            </Link>
          </div>
        </div>
      );
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

export default Home;
