import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

import About from "./components/about/about";
import { Counter } from "./components/counter/counter";
import Login from "./components/login/login";
import TodoList from "./components/todolist/todolist";
import NotFound from "./components/pagenotfound/notfound";
import ProtectedRoute from "./components/Protectedroute/protectedroute";
import Carousel from "./components/carousel/carousel";
import Toggle from "./components/toggle/toggle";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Dropdown from "./components/dropdown/dropdown";
import Contact from "./components/contact/contact";
import { firstActionThunk, secondActionThunk } from "./store/action";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  let [appList, setList] = useState([]);
  let dispatch = useDispatch();
  const updateAppList = (tempList) => {
    setList([...tempList]);
  };

  return (
    <div className="App">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="card">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6" >
              <img className="card-img" src="data:image/jpeg;base64,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" alt="" />
            </div>
            <div className="col-12 col-sm-12 col-md-6">
              <div className="text-primary">
                Hello I am amsterdam
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis labore nisi provident autem deleniti inventore a, sapiente placeat veniam. Tempore quibusdam unde voluptates minima nemo soluta iusto omnis aliquid sint.
              </div>
              <hr />
              <div className="footer d-flex justify-content-between">
                <div className="rating">5 Star</div>
                <div className="btn btn-primary">Book Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

// install react-router-dom

// routes should be available globally to the application

// set the routes

// import { connect } from 'react-redux'

// a--> b --> c --> d

//          redux
// a                       d

// store --> create store

// reducer --> access to update state in store

// dispatch an action from component a

// component a needs to subscribe to store

// <Routes>
//         <Route path="/" Component={ProtectedRoute}>
//           <Route path="counter" Component={Counter}>
//             <Route path="todolist" Component={TodoList} />
//           </Route>
//           <Route path="counter/:id" Component={Counter} />
//           <Route path="todolist" Component={TodoList} />
//         </Route>
//         <Route path="login" Component={Login} />
//         <Route path="*" Component={NotFound} />
//       </Routes>
