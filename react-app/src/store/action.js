// action thunks...
import { useNavigate } from "react-router-dom";
import { counterActions } from "./reducer";

export const userLoginAction = (credentails) => {
  return async (dispatch) => {
    try {
      let res = await fetch("http://localhost:4000/advanced-api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentails),
      });
      let result = await res.json();
      if (result.message === "success") {
        dispatch(counterActions.setLoggedIn(true))
        localStorage.setItem("token", ("Bearer " + result.token));
        localStorage.setItem("loggedIn", true)
        alert("User Login Successfull")
      } else {
        alert("Invalid Credentials")
      }
    } catch (err) {
      alert("sorry error from our side")
    }
  };
};

export const firstActionThunk = () => {
  return async (dispatch) => {
    try {
      let res = await fetch("http://localhost:4000/advanced-api/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization : (localStorage.getItem("token"))
        }
      });
      let result = await res.json();
      console.log(result);
      if (result) {
        dispatch(counterActions.users({ data: result.message }));
      } else {
        alert("Sorry please re login again");
      }
    } catch (err) {
      console.log("error in first api", err);
    } finally {
      console.log("I will execute no matter what");
    }
  };
};

export const secondActionThunk = () => {
  return async (dispatch) => {
    // JSON js Object notation
    let login = {
      name: "abc",
      password: "farhaan@123",
    };
    try {
      let res = await fetch("http://localhost:4000/advanced-api/create-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
      });
      let result = await res.json();
      alert(result.message);
    } catch (err) {
      console.log("error in first api", err);
    } finally {
      console.log("I will execute no matter what");
    }
  };
};
