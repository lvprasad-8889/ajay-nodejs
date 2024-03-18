import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  let [list, setList] = useState(false);
  let [data, setData] = useState([
    {
      to: "home",
      text: "home",
      active: false,
    },
    {
      to: "about",
      text: "about",
      active: false,
    },
    {
      to: "experience",
      text: "experience",
      active: false,
    },
    {
      to: "education",
      text: "education",
      active: false,
    },
    {
      to: "project",
      text: "project",
      active: false,
    },
    {
      to: "contact",
      text: "contact",
      active: false,
    },
  ]);

  const setActive = (index) => {
    let temp = data.map((item, ind) => {
      if (ind === index) {
        data[ind].active = true;
      } else {
        data[ind].active = false;
      }
      return item;
    });
    setData([...temp]);
  };
  return (
    <nav className="nav-container">
      <Link className="title" to="#">
        PORTFOLIO
      </Link>
      <div className="menu" onClick={() => setList(!list)}>
        <span className="menu-item "></span>
        <span className="menu-item"></span>
        <span className="menu-item"></span>
      </div>
      <ul className={list ? "open" : ""}>
        {data.map((item, index) => (
          <li key={index}>
            <Link
              to={item.to}
              className="navigate"
              onMouseOver={() => setActive(index)}
              onClick={() => setActive(index)}
            >
              {item.text}
            </Link>
            {item.active && <div className="active"></div>}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
