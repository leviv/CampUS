import React from "react";

const Memory = (props) => {
  return (
    <div className="card memory">
      <h3>{props.title}</h3>
      <p className="attr">By {props.attribution}</p>
      <img src={props.image} alt="" />
      <blockquote>{props.description}</blockquote>
    </div>
  );
};

export default Memory;
