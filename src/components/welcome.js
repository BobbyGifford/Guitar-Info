import React from "react";

const welcome = () => {
  return (
    <div className="welcome-page">
      <div className="welcome-text">
        <h1>Welcome to Guitar Info</h1>
        <button className="btn btn-info">Neck Specs</button>
        <br />
        <button className="mt-2 btn btn-info">Body Specs</button>
      </div>
    </div>
  );
};

export default welcome;
