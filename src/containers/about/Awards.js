import React from "react";
import { connect } from "react-redux";
import Header from "../../components/template/Header";
import Footer from "../../components/template/Footer";
import BreadCrumb from "../../components/template/BreadCrumb";
import { Link } from "react-router-dom";
const Award = (props) => {
  return (
    <div>
      <Header active="ABOUT" />
      <BreadCrumb title={"AWARDS & RECOGNITIONS"} />

      <section className="events" style={{ background: "rgb(248, 249, 246)" }}>
        <div style={{ background: "rgb(255, 255, 255)", padding: "30px 0px" }}>
          <div className="container">
            <div className="row row-event">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="row">
                  <div className="col-md-4" style={{ paddingBottom: 20 }}>
                    <a href="#open">
                      {" "}
                      <img
                        src="/assets/images/MS_Award.png"
                        alt="national ngo"
                      />{" "}
                    </a>
                  </div>
                  <div className="col-md-4" style={{ paddingBottom: 20 }}>
                    <a href="#open">
                      <img
                        src="/assets/images/NCT_Award.png"
                        alt="national ngo"
                      />
                    </a>
                  </div>
                  <div className="col-md-4" style={{ paddingBottom: 20 }}>
                    <a href="#open">
                      <img
                        src="/assets/images/NCT Award_1.png"
                        alt="national ngo"
                      />
                    </a>
                  </div>
                  <div className="col-md-4" style={{ paddingBottom: 20 }}>
                    <a href="#open">
                      <img
                        src="/assets/images/NCT Award_2.png"
                        alt="national ngo"
                      />
                    </a>
                  </div>
                  <div className="col-md-4" style={{ paddingBottom: 20 }}>
                    <a href="#open">
                      <img
                        src="/assets/images/Validation_Cert.png"
                        alt="national ngo"
                      />
                    </a>
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

export default connect(mapStateToProps, mapDispatchToProps)(Award);
