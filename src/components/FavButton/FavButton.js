import React from "react";
import "./FavButton.css";

const FavButton = props => {
  return <button className="favbtn" onClick={() => props.add()} />;
};

export default FavButton;
