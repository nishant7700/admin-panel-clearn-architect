import React from "react";
import Slider from "react-slick";

function MediaCard() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <h3> Media </h3>
      <Slider {...settings}>
        <div className="item">
          <img src="/assets/images/media/1.png" alt="national ngo" />
        </div>
        <div className="item">
          <img src="/assets/images/media/2.png" alt="national ngo" />
        </div>
        <div className="item">
          <img src="/assets/images/media/3.jpg" alt="national ngo" />
        </div>
        <div className="item">
          <img src="/assets/images/media/4.jpg" alt="national ngo" />
        </div>
      </Slider>
    </div>
  );
}

export default MediaCard;
