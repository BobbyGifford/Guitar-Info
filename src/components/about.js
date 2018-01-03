import React from "react";

const about = props => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="col align-self-center">Why I made this site</h1>
      </div>

      <div className="row">
        <hr />
        <p className="col align-self-center lead">
          Playing guitar has been one of my favorite hobbies for about a decade.
          When I first started playing I didn’t understand what any of the
          technical specs meant. If you go guitar shopping online you see the
          same strange looking specs listed such as: scale length, radius, fret
          size, etc. I made this site to explain what these specs mean to the
          average person.
        </p>
      </div>

      <div className="row">
        <p className="col align-self-center lead">
          Guitar specs can make or break guitar playing for most people. I
          didn’t like the feeling of my guitar when I started. Knowing guitar
          specs could make guitar playing infinitely easier for people just
          starting.
        </p>
      </div>
    </div>
  );
};

export default about;
