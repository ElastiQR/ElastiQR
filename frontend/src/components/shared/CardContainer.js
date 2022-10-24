import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import "./shared.css";

const CardContainer = (props) => {
  let history = useHistory();

  return (
    <div className="card-container">
      {props.children}
    </div>
  );
};

export default CardContainer;