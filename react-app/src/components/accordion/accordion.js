import React, { useState } from "react";
import "./accordion.css";

function Accordion() {
  let [data, setData] = useState([
    {
      title: "Accordion One",
      body: "Accordion Text, description, hello every one",
      showAccordion: true
    },
    {
      title: "Accordion Two",
      body: "Accordion Text, description, hello every one",
      showAccordion: false
    },
    {
      title: "Accordion Three",
      body: "Accordion Text, description, hello every one",
      showAccordion: false
    },
  ])
  let toggleAccordion = (index) => {
    let res = data.map((item, ind) =>{
      if (ind === index) {
        item.showAccordion = !item.showAccordion
      } else {
        item.showAccordion = false;
      }
      return item;
    })
    console.log(res);
    setData([...res])
  }
  return (
    <div className="accordion">
      {data.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div className="accordion-header" onClick={() => toggleAccordion(index)}>
            <div className="accordion-title">{item.title}</div>
            <div className={item.showAccordion ? 'accordion-arrow' : 'normal'}>
              <svg width="20" height="10" viewBox="-2.5 -5 75 60">
                <path
                  d="M0,0 l35,50 l35,-50"
                  fill="none"
                  stroke="black"
                  strokeLinecap="round"
                  strokeWidth="7"
                />
              </svg>
            </div>
          </div>
          {item.showAccordion && (
            <div className="accordion-body">{item.body}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
