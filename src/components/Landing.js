import React from "react";

const Landing = (props) => {
  return (
    <div className="landing">
      <div className="landing-title">{props.title}</div>
      <p className="drag">You can drag heres</p>
    </div>
  );
};

export default Landing;
