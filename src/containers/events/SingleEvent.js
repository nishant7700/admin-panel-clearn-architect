import React from "react";
import { connect } from "react-redux";
import Header from "../../components/template/Header";
import Footer from "../../components/template/Footer";
import { Link } from "react-router-dom";
import { getEventBySlug } from "../../store/actions/events_action";
import { useEffect } from "react";
import Spinner from "../../components/layout/Spinner";
import renderHTML from "react-render-html";
import Sidebar from "../../components/cards/Sidebar";
const SingleEvent = ({ getEventBySlug, match, event: { loading, event } }) => {
  useEffect(() => {
    if (match.params.slug) {
      getEventBySlug(match.params.slug);
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
                  {event && (
                    <div>
                      <div className="row">
                        {event.gallery &&
                          event.gallery.map((item) => {
                            return (
                              <div className="col-md-4">
                                <img src={item} className="gallery-image" />
                              </div>
                            );
                          })}
                      </div>
                      <div>
                        <h3> {event.title} </h3>
                        <div>{event.content && renderHTML(event.content)}</div>
                      </div>
                    </div>
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

const mapStateToProps = (state) => ({ event: state.event });

const mapDispatchToProps = { getEventBySlug };

export default connect(mapStateToProps, mapDispatchToProps)(SingleEvent);
