import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Header from "../../components/template/Header";
import Footer from "../../components/template/Footer";
import BreadCrumb from "../../components/template/BreadCrumb";
import { Link } from "react-router-dom";
import renderHTML from "react-render-html";
import {
  getReleases,
  getNextReleases,
  getPreviousReleases,
} from "../../store/actions/releases_action";
import { LIMIT } from "../../domain/constant";
import Pagination from "../../components/common/Pagination";
import Spinner from "../../components/layout/Spinner";
import Sidebar from "../../components/cards/Sidebar";
function AllPressReleases({
  getReleases,

  getNextReleases,
  getPreviousReleases,
  release: { loading, releases },
}) {
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function allQuery() {
      getReleases({});
    }
    allQuery();
  }, []);
  const nextButtonClicked = () => {
    if (releases && releases.length === LIMIT) {
      const lastRelease = releases[releases.length - 1];
      getNextReleases({ last: lastRelease });
      setPage(page + 1);
    }
  };
  const prevBtnClicked = () => {
    if (page > 1) {
      const lastRelease = releases[0];
      getPreviousReleases({
        first: lastRelease,
      });
      setPage(page - 1);
    }
  };
  return (
    <div>
      <Header active="PRESS" />
      {/* <BreadCrumb title={"Press Releases"} /> */}
      {!loading ? (
        <section className="current">
          <div className="container">
            <div className="current-project">
              <div className="row">
                <div className="col-md-8">
                  <h3 className="details">Press Releases</h3>
                  <div className="row">
                    {releases &&
                      releases.map((item) => {
                        return (
                          <div className="col-md-4">
                            <div className="inner-box">
                              <img
                                src={
                                  item.featured_image
                                    ? item.featured_image
                                    : "/assets/images/default.jpg"
                                }
                                className="profile"
                              />
                              <div className="box-content">
                                <div className="project-heading">
                                  <h3>{item.title}</h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
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
      <section className="ptb-50">
        <Pagination
          data={releases}
          page={page}
          prevBtnClicked={prevBtnClicked}
          nextButtonClicked={nextButtonClicked}
          loading={loading}
        />
      </section>
      <Footer />
    </div>
  );
}
const mapStateToProps = (state) => ({ release: state.release });

const mapDispatchToProps = {
  getReleases,

  getNextReleases,
  getPreviousReleases,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllPressReleases);
