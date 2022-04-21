import React from "react";
import { connect } from "react-redux";
import Header from "../../components/template/Header";
import Footer from "../../components/template/Footer";
import renderHTML from "react-render-html";
import { getProjectBySlug } from "../../store/actions/projects_action";
import { useEffect } from "react";
import Spinner from "../../components/layout/Spinner";
import AwardCard from "../../components/cards/AwardCard";
import MediaCard from "../../components/cards/MediaCard";
import DonateCard from "../../components/donation/DonateCard";
import BreadCrumb from "../../components/template/BreadCrumb";
const SingleProject = ({
  getProjectBySlug,
  project: { project, loading },
  match,
}) => {
  useEffect(() => {
    if (match.params.slug) {
      getProjectBySlug(match.params.slug);
    }
  }, [match.params.slug]);
  return (
    <div>
      <Header active="PROJECTS" />
      <>
        {!loading ? (
          <>
            <BreadCrumb title={project && project.title} />
            {project && (
              <section className="main-cause ptb-50">
                <div className="container">
                  <div className="stic">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="banner-ei">
                          <div className="main-image">
                            <img
                              src={
                                project.featured_image
                                  ? project.featured_image
                                  : "/assets/images/22811264.jpg"
                              }
                            />
                          </div>

                          <div id="home" className="main-content">
                            <div className="#home">
                              <div>
                                <h2>Story</h2> <hr />
                                {project.content && renderHTML(project.content)}
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

const mapStateToProps = (state) => ({ project: state.project });

const mapDispatchToProps = { getProjectBySlug };

export default connect(mapStateToProps, mapDispatchToProps)(SingleProject);
