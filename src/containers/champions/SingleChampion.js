import React from "react";
import { connect } from "react-redux";
import Header from "../../components/template/Header";
import Footer from "../../components/template/Footer";
import { Link } from "react-router-dom";
import { getChampionBySlug } from "../../store/actions/champions_action";
import { useEffect } from "react";
import Spinner from "../../components/layout/Spinner";
import renderHTML from "react-render-html";
import Sidebar from "../../components/cards/Sidebar";
const SingleChampion = ({
  getChampionBySlug,
  match,
  champion: { loading, champion },
}) => {
  useEffect(() => {
    if (match.params.slug) {
      getChampionBySlug(match.params.slug);
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
                  {champion && (
                    <>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="main-image">
                            <img
                              src={
                                champion.featured_image
                                  ? champion.featured_image
                                  : "/assets/images/22811264.jpg"
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="project-heading">
                            <h3>{champion.name}</h3>
                            <p>{champion.age} </p>
                          </div>
                          <hr />

                          <div>
                            {champion.content && renderHTML(champion.content)}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <h3> Documents </h3>
                          <div>
                            {champion.gallery &&
                              champion.gallery.map((item) => {
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

const mapStateToProps = (state) => ({ champion: state.champion });

const mapDispatchToProps = { getChampionBySlug };

export default connect(mapStateToProps, mapDispatchToProps)(SingleChampion);
