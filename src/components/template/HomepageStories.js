import React from "react";
import Spinner from "../layout/Spinner";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import StoryCard from "../cards/StoryCard";
function HomepageStories({ stories, loading }) {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  return (
    <>
      {!loading ? (
        <section className="current ptb-50">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="sec-heading">
                  <h2>Successful Stories</h2>
                </div>
              </div>
            </div>
            <div className="current-project">
              <div>
                <Slider {...settings}>
                  {stories &&
                    stories.map((item) => {
                      return <StoryCard item={item} />;
                    })}
                </Slider>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="text-center">
                    <Link to={`/success-stories`} className="btn btn-donate-lg">
                      {" "}
                      View All{" "}
                    </Link>
                  </div>
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

export default HomepageStories;
