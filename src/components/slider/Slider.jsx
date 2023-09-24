import React from "react";
import "./slider.css";
import Pic1 from ".././../assets/Images/images/m1.png";
import Pic2 from ".././../assets/Images/images/m2.png";
import Pic3 from ".././../assets/Images/images/m3.png";
import Pic4 from ".././../assets/Images/images/w1.png";
import Pic5 from ".././../assets/Images/images/w2.png";
import Pic6 from ".././../assets/Images/images/k1.png";
import Pic7 from ".././../assets/Images/images/k2.png";
import Pic8 from ".././../assets/Images/images/k3.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const Slider = () => {
  const productImages = [
    {
      id: 1,
      img: Pic1,
      head: "Mens Suite",
    },
    {
      id: 2,
      img: Pic2,
      head: "Mens formal",
    },
    {
      id: 3,
      img: Pic3,
      head: "Mens Casual",
    },
    {
      id: 4,
      img: Pic4,
      head: "Womens Ethnic",
    },
    {
      id: 5,
      img: Pic5,
      head: "Womens party wear",
    },
    {
      id: 6,
      img: Pic6,
      head: "kids Girls",
    },
    {
      id: 7,
      img: Pic7,
      head: "Kids Party Wear",
    },
    {
      id: 8,
      img: Pic8,
      head: "Kids Boys",
    },
  ];
  return (
    <div className="slider-container">
      <div className="slider-text">
        <div className="text-heading">50+ Beautiful rooms inspiration</div>
        <div className="text-content">
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </div>
        <button className="text-btn">Buy Now</button>
      </div>
      <div className="slider">
        <div className="slider-img">
          <img src={productImages[0].img} alt="" />
        </div>
        <div className="slider-sub">
          <div className="slider-sub-image">
            {productImages.map((value, ind) => {
              return <img src={value.img} alt="" key={ind} />;
            })}
          </div>
          <div className="slider-bottom">
            {[0, 1, 2, 3].map((value, ind) => {
              if (value === 0) {
                return (
                  <div className="select-round">
                    <div></div>
                  </div>
                );
              } else {
                return <div className="round"></div>;
              }
            })}
          </div>
        </div>
        <div className="arrow">
          <AiOutlineArrowRight className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
