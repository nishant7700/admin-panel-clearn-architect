import React from "react";
import { connect } from "react-redux";
import Header from "../../components/template/Header";
import Footer from "../../components/template/Footer";
import { Link } from "react-router-dom";
import { getStorieBySlug } from "../../store/actions/stories_action";
import { useEffect } from "react";
import Spinner from "../../components/layout/Spinner";
import renderHTML from "react-render-html";
import Sidebar from "../../components/cards/Sidebar";
const SingleSuccessStory = ({
  getStorieBySlug,
  match,
  storie: { loading, storie },
}) => {
  useEffect(() => {
    if (match.params.slug) {
      getStorieBySlug(match.params.slug);
    }
  }, [match.params.slug]);
  return (
    <div>
      <Header active="SUCCESS_STORIES" />
      {!loading ? (
        <section className=" ptb-50">
          <div className="container">
            <div className="who-we-are">
              <div className="row">
                <div className="col-md-8">
                  {storie && (
                    <>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="main-image">
                            <img
                              src={
                                storie.image
                                  ? storie.image
                                  : "/assets/images/22811264.jpg"
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="project-heading">
                            <h3>
                              {storie.name} ({storie.age}){" "}
                            </h3>
                            {storie.money_spent && (
                              <p>
                                <strong>
                                  Money Spent : ₹{storie.money_spent}
                                </strong>
                              </p>
                            )}
                          </div>
                          <hr />
                          <p className="disease">
                            <strong>
                              <i className="fa fa-ambulance"> </i>{" "}
                              {storie.disease}
                            </strong>
                          </p>
                          <div>
                            {storie.content && renderHTML(storie.content)}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <h3> Documents </h3>
                          <div>
                            {storie.document &&
                              storie.document.map((item) => {
                                return (
                                  <div>
                                    <iframe
                                      src={item}
                                      style={{ width: "100%", height: "550px" }}
                                      frameborder="0"
                                    ></iframe>
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="col-md-4">
                  <Sidebar />
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

      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({ storie: state.storie });

const mapDispatchToProps = { getStorieBySlug };

export default connect(mapStateToProps, mapDispatchToProps)(SingleSuccessStory);
