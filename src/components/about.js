import React from "react";

const about = props => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="col align-self-center">Why I made this site</h1>
      </div>

      <div className="row">
        <p style={{ fontFamily: "Raleway" }} className="col align-self-center lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          elementum metus in enim consectetur, et consequat dui imperdiet. Nam
          condimentum purus vitae posuere tempus. Nullam vel suscipit purus, vel
          pretium velit. Morbi vel dolor lorem. Proin felis ipsum, porta a
          dapibus eget, tincidunt sed tortor. Pellentesque non libero gravida
          massa maximus semper. Donec sit amet mollis mi.
        </p>
      </div>

      <div className="row">
        <p className="col align-self-center lead">
          Mauris eget ante eget libero molestie fermentum. Curabitur quis
          pulvinar libero. Sed vestibulum, tellus congue eleifend dignissim,
          libero mi lobortis mauris, in varius mauris urna ac felis. Mauris nisl
          lacus, tristique et est at, congue porttitor metus. In tempus volutpat
          euismod. Mauris dapibus orci nec mi semper, et dapibus elit
          pellentesque. Duis enim ex, scelerisque eget metus ut, ullamcorper
          consectetur magna. Mauris placerat non dolor nec mollis. Phasellus
          laoreet condimentum odio, at consequat risus. Pellentesque porttitor
          libero et lacus pharetra, vel consectetur enim elementum. Aenean eu
          orci quam. Sed aliquam ante urna, quis hendrerit sapien rhoncus eget.
          Nulla pharetra, tortor ut suscipit rhoncus, diam nibh dapibus justo,
          eget pretium enim massa et nisi.
        </p>
      </div>
    </div>
  );
};

export default about;
