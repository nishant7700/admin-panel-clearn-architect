import React from "react";
import Spinner from "../layout/Spinner";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import renderHTML from "react-render-html";
import CauseCard from "../cards/CauseCard";

function HomepageCurrentBeneficiaries({ causes, loading }) {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      {!loading ? (
        <section className="current ptb-50">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="sec-heading">
                  <h2>Current Beneficiaries</h2>
                </div>
              </div>
            </div>
            <div className="current-project">
              <div>
                <Slider {...settings}>
                  {causes &&
                    causes.map((item) => {
                      return <CauseCard item={item} />;
                    })}
                </Slider>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div>
          <Spinner />
        </div>
      )}
    </>
  );
}

export default HomepageCurrentBeneficiaries;
