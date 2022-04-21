import React from "react";
import { connect } from "react-redux";
import Header from "../../components/template/Header";
import Footer from "../../components/template/Footer";
import BreadCrumb from "../../components/template/BreadCrumb";
import { Link } from "react-router-dom";
const WhoWeAre = (props) => {
  return (
    <div>
      <Header active="ABOUT" />
      <BreadCrumb title={"WHO WE ARE"} />
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
                  rights of persons with disabilities (PWDs) in our society and
                  in the larger scheme of national development, through micro
                  level social intervention.
                </p>
                <p>
                  Established in 2012, National NGO has been continually working
                  for social integration of persons with disability. Although we
                  work with a small set of people, we go all the way in
                  supporting them to become self-sufficient. Through these
                  years, we have assumed the role of facilitators, counselors,
                  friends and teachers amongst others
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
      <section className="giving ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sec-heading">
                <h2>GIVING YOU CAN TRUST</h2>
              </div>
            </div>
          </div>
          <div className="main-giving">
            <div className="row">
              <div className="col-md-6 vl">
                <div className="logo-image">
                  <img src="assets/images/logo.png" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tincidunt consequat, posuere sagittis, tristique semper
                    rhoncus, amet. Libero, tempor sed imperdiet tincidunt vitae,
                    enim sed elementum. Lectus tristique facilisi fermentum
                    mauris amet diam massa mattis. Faucibus sed vulputate risus
                    placerat amet porttitor amet. Nulla sit felis venenatis ut
                    bibendum nullam cursus
                  </p>
                </div>
              </div>
              <div className="col-md-6 mx-auto">
                <div className="main-trust-flex">
                  <div className>
                    <h3>700CR+</h3>
                    <span>raised for nonprofits</span>
                  </div>
                  <div className>
                    <h3>2M+</h3>
                    <span>donors have contributed to causes </span>
                  </div>
                </div>
                <div className="main-trust-flex pt-50">
                  <div className>
                    <h3>15M+</h3>
                    <span>live impacted</span>
                  </div>
                  <div className>
                    <h3>Trusted</h3>
                    <span>by 150+ corporates and brands </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WhoWeAre);
