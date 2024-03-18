import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

import "./home.css";

const Home = () => {
  let navigate = useNavigate();
  const changeRoute = (routeName) => {
    navigate(routeName);
  };
  return (
    <div className="home">
      <div className="right">
        <Outlet></Outlet>
      </div>
      <div className="left">
        <button onClick={() => changeRoute("counter")}>Counter</button>
        <button onClick={() => changeRoute("toggle")}>Toggle</button>
        <button onClick={() => changeRoute("carousel")}>Carousel</button>
      </div>
    </div>
  );
};

export default Home;
