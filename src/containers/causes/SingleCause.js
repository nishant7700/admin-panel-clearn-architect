import React from "react";
import { connect } from "react-redux";
import Header from "../../components/template/Header";
import Footer from "../../components/template/Footer";
import renderHTML from "react-render-html";
import { getCauseBySlug } from "../../store/actions/causes_action";
import { useEffect } from "react";
import Spinner from "../../components/layout/Spinner";
import AwardCard from "../../components/cards/AwardCard";
import MediaCard from "../../components/cards/MediaCard";
import DonateCard from "../../components/donation/DonateCard";
const SingleCause = ({ getCauseBySlug, cause: { cause, loading }, match }) => {
  useEffect(() => {
    if (match.params.slug) {
      getCauseBySlug(match.params.slug);
    }
  }, [match.params.slug]);
  return (
    <div>
      <Header active="CAUSES" />
      <>
        {!loading ? (
          <>
            {cause && (
              <section className="main-section-page ptb-50">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 mx-auto">
                      <div className="cause-content">
                        <h3> {cause.meta_title} </h3>
                        <div className="logo-cause">
                          <div>
                            <img src="/assets/images/logo.png" />
                          </div>
                          <div className="heath-tag">
                            <button className="btn btn-health">
                              <i className="fa fa-heart" />
                              Urgent
                            </button>
                          </div>
                          <div className="heath-tag">
                            <button className="btn btn-health">
                              <i className="fa fa-map-marker" />
                              Verified By National NGO
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
            {cause && (
              <section className="main-cause pb-50">
                <div className="container">
                  <div className="stic">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="banner-ei">
                          <div className="main-image">
                            <img
                              src={
                                cause.featured_image
                                  ? cause.featured_image
                                  : "/assets/images/22811264.jpg"
                              }
                            />
                          </div>
                          <div>
                            <div className="project-heading">
                              <h3>{cause.name}</h3>
                            </div>
                            <p className="disease">
                              <strong>
                                <i className="fa fa-ambulance"> </i>{" "}
                                {cause.disease}
                              </strong>
                            </p>
                          </div>

                          <div className="tabs-btn">
                            <ul className="nav nav-tabs">
                              <li className="active">
                                <a data-toggle="tab" href="#story">
                                  Story
                                </a>
                              </li>
                              <li>
                                <a data-toggle="tab" href="#update">
                                  Updates
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div id="story" className="main-content">
                            <div className="story">
                              <div>
                                <h2>Story</h2>
                                {cause.content && renderHTML(cause.content)}
                              </div>
                            </div>
                            <div className="about-the-program">
                              <div className="ab-pro">
                                <div className="ab-img">
                                  <img src="/assets/images/about-p.png" />
                                </div>
                                <div className="ab-program-c">
                                  <h3>By Donating to this Program</h3>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Mi nibh blandit risus
                                    tellus mollis venenatis. Massa volutpat quam
                                    sit eu pellentesque semper purus.
                                  </p>
                                </div>
                              </div>
                              <h2 id="update">Updates</h2>
                              <p>
                                We are most grateful to people like you who make
                                our work and the program possible through your
                                support.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <DonateCard />

                        <div className="sidebar">
                          <AwardCard />
                        </div>
                        <div className="sidebar">
                          <MediaCard />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </>
        ) : (
          <div>
            <Spinner />
          </div>
        )}
      </>

      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({ cause: state.cause });

const mapDispatchToProps = { getCauseBySlug };

export default connect(mapStateToProps, mapDispatchToProps)(SingleCause);
