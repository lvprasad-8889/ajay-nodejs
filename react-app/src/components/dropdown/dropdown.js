import React, { useEffect, useRef, useState } from "react";
import "./dropdown.css";

const Dropdown = () => {
  let temp = ["apple", "banana", "orange"];
  temp = temp.map((item) => {
    return {
      name: item,
      active: false,
    };
  });
  let [data, setData] = useState(temp);
  let [showDropdown, setDropdown] = useState(false);
  let [curr, setCurr] = useState();
  let menuRef = useRef();

  const toggleDropdown = () => {
    setDropdown(!showDropdown);
  };

  const navigateList = (count) => {
    if (curr === undefined) {
      curr = 0;
    } else {
      curr = (curr + count + data.length) % data.length;
    }
    let res = data.map((item, index) => {
      if (index === curr) {
        item.active = true;
      } else {
        item.active = false;
      }
      return item;
    });
    setCurr(curr);
    setData([...res]);
  };

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
  }, [showDropdown]);

  useEffect(() => {
    const handler = (e) => {
      console.log("hello");
      if (e.keyCode === 40) {
        return navigateList(1);
      }
      if (e.keyCode === 38) {
        return navigateList(-1);
      }
      return;
    };
    document.addEventListener("keyup", handler);
  }, []);

  return (
    <div className="dropdown" ref={menuRef}>
      <div className="dropdown-btn" onClick={toggleDropdown}>
        Fruits
      </div>
      {showDropdown && (
        <div className="dropdown-list">
          <ul>
            {data.map((item, index) => (
              <li
                key={index}
                onKeyDown={navigateList}
                className={curr === index ? "curr" : ""}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
