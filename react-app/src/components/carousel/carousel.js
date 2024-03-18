import React, { Fragment, useEffect, useRef, useState } from "react";
import "./carousel.css";

const Carousel = () => {
  let data = [
    "https://plus.unsplash.com/premium_photo-1666863911660-d64fc1022c12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fHwwhttps://images.unsplash.com/photo-1533450718592-29d45635f0a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1533450718592-29d45635f0a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1666672388644-2d99f3feb9f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8anBnfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1669839774885-b1958e625b5e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8anBnfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1585468491047-f02d6f7c706c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8anBnfGVufDB8fDB8fHww",
  ];

  let carousel = useRef();
  let [slideNum, setSlideNum] = useState(0);
  let [slide, setSlide] = useState(true);

  const nextSlide = () => {
    // 1 -> 0
    // 2 -> 100 = (2 - 1) * width of image
    // 3 -> 200 = (3 - 1) * width of image
    // 4
    // 0 
    setSlideNum((nextSlide) => {
      carousel.current.scrollLeft =
        ((nextSlide + 1) % data.length) * (carousel.current.offsetWidth);
      return (nextSlide + 1) % data.length;
    });
  };

  const prevSlide = () => {
    setSlideNum((prevSlide) => {
      // 1 * 0
      // 2 = 100
      // 2 - 1 + 5 = 6 % 5 = 1 * 100 = 100
      carousel.current.scrollLeft =
        ((prevSlide - 1 + data.length) % data.length) *
        (carousel.current.offsetWidth);
      return (prevSlide - 1 + data.length) % data.length;
    });
  };

  const movetoNthSlide = (index) => {
    carousel.current.scrollLeft = index * carousel.current.offsetWidth;
    setSlideNum(index);
  };

  // setInterval will slide // 0 // 3
  // after mouse on carousel
  // slide change
  // useEffect executes

  return (
    <React.Fragment>
      <div
        className="carousel"
        onMouseOver={() => setSlide(false)}
        onMouseLeave={() => setSlide(true)}
      >
        <div className="carousel-body" ref={carousel}>
          {data.map((item, index) => (
            <img src={item} alt="Loading..." key={index} />
          ))}
        </div>
        {slideNum !== 0 && (
          <button className="carousel-prev-button" onClick={prevSlide}>
            <img
              src="https://www.svgrepo.com/show/27797/right-arrow.svg"
              alt=""
            />
          </button>
        )}
        {slideNum !== data.length - 1 && (
          <button className="carousel-next-button" onClick={nextSlide}>
            <img
              src="https://www.svgrepo.com/show/27797/right-arrow.svg"
              alt=""
            />
          </button>
        )}
        <div className="dots">
          {data.map((item, index) => (
            <div
              className={`dot ${index === slideNum ? 'dot-focused' : ''}`}
              key={index}
              onClick={() => movetoNthSlide(index)}
            >{index + 1}</div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Carousel;
