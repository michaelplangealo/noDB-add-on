import React from "react";
import "./MoreQuotes.css";

const MoreQuotes = props => {
  return (
    <button className="add-button" onClick={props.newQuote}>
      MAKE AMERICA GREAT AGAIN
    </button>
  );
};

export default MoreQuotes;
