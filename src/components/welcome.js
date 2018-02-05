import React from "react";
import { Link } from "react-router-dom";

const welcome = () => {
  return (
    <div className="welcome-page">
      <div className="welcome-text">
        <h1>Welcome to Guitar Info</h1>
        <Link to={"/home"}>
          <button className="btn btn-success">View All</button>
        </Link>
        <br />
        <Link to={"listOf/neck"}>
          <button className="my-2 btn btn-success">View Neck Specs</button>
        </Link>
        <br />
        <Link to={"listOf/body"}>
          <button className="btn btn-success">View Body Specs</button>
        </Link>
      </div>
    </div>
  );
};

export default welcome;
