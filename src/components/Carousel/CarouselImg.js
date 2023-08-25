import React from "react";
import "./CarouselImg.scss";
import { Carousel } from "3d-react-carousal";

import img1 from "../../img/matthew-moloney-932YzOC4x0o-unsplash.png";
import img2 from "../../img/maxim-yuryshev-J_8tLZElhwE-unsplash.png";
import img3 from "../../img/nolan-issac-K5sjajgbTFw-unsplash.png";

let slides = [
  <img src={img1} alt="1" />,
  <img src={img2} alt="2" />,
  <img src={img3} alt="3" />,
];

const CarouselImg = () => {
  return (
    <div className="carus">
      <Carousel slides={slides} autoplay={true} interval={3000} />
    </div>
  );
};

export default CarouselImg;
