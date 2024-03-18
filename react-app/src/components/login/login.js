import { useEffect, useRef, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { userLoginAction } from "../../store/action";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  let username = useRef();
  let password = useRef();
  let [formSubmitted, setSubmitted] = useState(false);
  let loggedIn = useSelector((state) => state.counter.loggedIn);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const submitForm =  (event) => {
    event.preventDefault();
    if (username.current.value && password.current.value) {
      dispatch(
        userLoginAction({
          name: username.current.value,
          password: password.current.value,
        })
      );
    } else {
      setSubmitted(true);
    }
  };

  useEffect(() => {
    if(loggedIn) {
      navigate("/home/counter")
    }
  }, [loggedIn]);

  return (
    <form>
      <div className="block">
        <label htmlFor="">Username</label>
        <input type="text" ref={username} />
        {formSubmitted && username && <small>Enter the username</small>}
      </div>
      <div className="block">
        <label htmlFor="">Password</label>
        <input type="password" ref={password} />
        {formSubmitted && password && <small>Enter th password</small>}
      </div>
      <input type="submit" value="Login" onClick={submitForm} />
    </form>
  );
};

export default Login;
