import './toggle.css'
import { useState } from "react"

const Toggle = () => {
    let [show, setShow] = useState(false);
    const showText = () => {
      console.log("I am cicked")
      setShow(!show)
    }
    return (
      <div className="app">
        <button onClick={showText}>
          {
            show ? ("Hide text") : "Show text"
          }
        </button>
        {
          show && <div className="one">I am ajay</div>
        }
      </div>
    );
};

export default Toggle;