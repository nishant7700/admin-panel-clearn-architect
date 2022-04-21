import React from "react";
import { Link } from "react-router-dom";

function WhoWeAre() {
  return (
    <section className="who-we ptb-50">
      <div className="container">
        <div className="who-we-are">
          <div className="row">
            <div className="col-md-6">
              <h3>WHO WE ARE</h3>
              <p>
                National Organisation for Social Empowerment (NOFSE) is a
                registered NGO working for the differently abled and
                underprivileged of our community. We are a group of dreamers
                with a collective vision; ‘Inclusiveness’. We believe that a
                world without barriers should not be a luxury but a right. We
                are doing our bit to ensure that disability does not entail
                disadvantage. At National NGO we are working to advance the
                rights of persons with disabilities (PWDs) in our society and in
                the larger scheme of national development, through micro level
                social intervention.
              </p>
              <p>
                Established in 2012, National NGO has been continually working
                for social integration of persons with disability. Although we
                work with a small set of people, we go all the way in supporting
                them to become self-sufficient. Through these years, we have
                assumed the role of facilitators, counselors, friends and
                teachers amongst others
              </p>
              <div className="hungry">
                <Link className="btn btn-donate-lg">FEED A HUNGRY CHILD</Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="who-we-image">
                <img src="assets/images/who-we-are-main.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
