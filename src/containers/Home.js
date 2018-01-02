import React, { Component } from "react";
import { Link } from "react-router-dom";

import siteInfo from "../guitarDetails";

class Home extends Component {
  renderContent() {
    return siteInfo.guitarDetails.map(guitar => {
      return (
        <div className="col-md-3 my-3" key={guitar.topic}>
          <Link to={"/topic/" + guitar.topic}>{guitar.topic}</Link>
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
{
  /* <div className="container-fluid">
<div className="row">
  <div className="col-md-3 my-3"><Link to="/topic/scale length">Scale Length</Link></div>
  <div className="col-md-3 my-3">item</div>
  <div className="col-md-3 my-3">item</div>
  <div className="col-md-3 my-3">item</div>
  <div className="col-md-3 my-3">item</div>
  <div className="col-md-3 my-3">item</div>
  <div className="col-md-3 my-3">item</div>
  <div className="col-md-3 my-3">item</div>
</div>
</div> */
}
