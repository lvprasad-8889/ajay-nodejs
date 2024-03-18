import { useEffect, useState, useMemo, useCallback } from "react";
import "./counter.css";
import {counterActions} from '../../store/reducer'

import List from '../list/list'

import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export const Counter = () => {
  let count = useSelector((state) => state.counter.count)
  let params = useParams();
  let dispatch = useDispatch();


  const incrementCount = () => {
    dispatch(counterActions.increment());
  }

  const decrementCount = () => {
    dispatch(counterActions.decrement());
    //dispatch({type: "decrement"})
  };

  const incrementByN = (data) => {
    dispatch(counterActions.incrementByN({data: data}))
  }

  return (
    <div className="counter">
      <Outlet></Outlet>
      <div className="count">{count}</div>
      <button className="btn btn-primary" onClick={incrementCount}>Increment</button>
      <button className="btn btn-primary" onClick={decrementCount}>Decrement</button>
      <button className="btn btn-primary" onClick={() => incrementByN(100)}>Increment By N</button>
      
      <Link to="../todolist" className="btn btn-primary">Navigate to Todo List</Link>
    </div>
  );
};

// created a store from createStore method

//  created areducer, which takes state and action as parameter

// imported provider from react-redux, imported store, made it available globally..

// created multiple actions....

// send data to store from counter by hook useDispatch, dispatch an action

// components need to subscribe that variable...

// counter --> store --> counter

























// create a folder which contains css and js

// in js u need to a function which retuen html code

// function name should be upper camel case

// function has html, js, u need to import css

// u want to reuse it, then u need to import it

// u need to export it by using keyword "export"
// or "ecport default"
