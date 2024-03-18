import "./list.css";
import React, { memo } from "react";

function List(props) {
  console.log("I am list")
  return (
    <React.Fragment>
      {props.list &&
        props.list.map((item, index) => (
          <ul key={index}>
            <li>
              <div className="">{item}</div>
            </li>
          </ul>
        ))}
    </React.Fragment>
  );
}

export default memo(List);
