import React from "react";

function FeaturedIn() {
  return (
    <section className="featured ptb-50">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sec-heading">
              <h2>Featured In</h2>
            </div>
          </div>
        </div>
        <div className="pt-30">
          <div className="row">
            <div className="col-md-12">
              {" "}
              <div className="featured-item">
                <img src="assets/images/featured.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedIn;
