import React from "react";
import Spinner from "../layout/Spinner";
import Slider from "react-slick";
import AwardCard from "../cards/AwardCard";
function Testimonials({ testimonials, loading }) {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      {!loading ? (
        <section className="what-people ptb-50">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="sec-heading">
                  <h2>GIVING YOU CAN TRUST</h2>
                </div>
              </div>
            </div>
            <div className="pt-50">
              <div className="row">
                <div className="col-md-8">
                  <div style={{ padding: "25px 25px" }}>
                    <Slider {...settings}>
                      {testimonials &&
                        testimonials.map((item) => {
                          if (item.approved == 1) {
                            return (
                              <div>
                                <div className="main-testi-flex ">
                                  <div className>
                                    <img
                                      src={
                                        item.featured_image
                                          ? item.featured_image
                                          : "/assets/images/default.jpg"
                                      }
                                      className="testimonial-pic"
                                    />
                                  </div>
                                  <div className="testimonial-content">
                                    <h3>{item.name}</h3>
                                    <p>{item.testimonial}</p>
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        })}
                    </Slider>
                  </div>
                </div>
                <div className="col-md-4">
                  <AwardCard />
                </div>
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

export default Testimonials;
