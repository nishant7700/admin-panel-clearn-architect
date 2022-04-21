import React from "react";
import Slider from "react-slick";

function AwardCard() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <h3 className="award-title"> Awards </h3>
      <Slider {...settings}>
        <div>
          <img src="/assets/images/MS_Award.png" alt="national ngo" />
        </div>
        <div>
          <img src="/assets/images/NCT_Award.png" alt="national ngo" />
        </div>
        <div>
          <img src="/assets/images/NCT Award_1.png" alt="national ngo" />
        </div>
        <div>
          <img src="/assets/images/NCT Award_2.png" alt="national ngo" />
        </div>
        <div>
          <img src="/assets/images/Validation_Cert.png" alt="national ngo" />
        </div>
      </Slider>
    </div>
  );
}

export default AwardCard;
