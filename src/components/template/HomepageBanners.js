import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Spinner from "../layout/Spinner";

function HomepageBanners({ banners, loading }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      {!loading ? (
        <Slider {...settings}>
          {banners &&
            banners.map((item) => {
              return (
                <section
                  className="banner"
                  style={{
                    background: `url(${item.featured_image}) center center`,
                  }}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="banner-content">
                          <h1>{item.title}</h1>
                          <p>{item.description}</p>
                          <div className="banner-button">
                            <Link to={item.link} className="btn btn-donate-lg">
                              DONATE NOW
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
        </Slider>
      ) : (
        <div>
          <Spinner />
        </div>
      )}
    </>
  );
}

export default HomepageBanners;
