import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Header from "../../components/template/Header";
import Footer from "../../components/template/Footer";
import BreadCrumb from "../../components/template/BreadCrumb";
import { Link } from "react-router-dom";
import renderHTML from "react-render-html";
import {
  getCalamities,
  getNextCalamities,
  getPreviousCalamities,
} from "../../store/actions/calamities_action";
import { LIMIT } from "../../domain/constant";
import Pagination from "../../components/common/Pagination";
import Spinner from "../../components/layout/Spinner";
import FacebookBtn from "../../components/donation/FacebookBtn";
import WhatsappBtn from "../../components/donation/WhatsappBtn";
function AllCalamities({
  getCalamities,
  getNextCalamities,
  getPreviousCalamities,
  calamitie: { loading, calamities },
}) {
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function allQuery() {
      getCalamities({});
    }
    allQuery();
  }, []);
  const nextButtonClicked = () => {
    if (calamities && calamities.length === LIMIT) {
      const lastCalamitie = calamities[calamities.length - 1];
      getNextCalamities({ last: lastCalamitie });
      setPage(page + 1);
    }
  };
  const prevBtnClicked = () => {
    if (page > 1) {
      const lastCalamitie = calamities[0];
      getPreviousCalamities({
        first: lastCalamitie,
      });
      setPage(page - 1);
    }
  };
  return (
    <div>
      <Header active="PROJECTS" />
      <BreadCrumb title={"National Calamities"} />
      {!loading ? (
        <section className="current ptb-50">
          <div className="container">
            <div className="current-project">
              <div className="row">
                {calamities &&
                  calamities.map((item) => {
                    return (
                      <div className="col-md-4">
                        <div className="inner-box">
                          <Link to={`/national-calamities/${item.slug}`}>
                            <img
                              src={
                                item.featured_image
                                  ? item.featured_image
                                  : "/assets/images/default.jpg"
                              }
                              className="profile"
                            />
                          </Link>
                          <div className="box-content">
                            <div className="project-heading">
                              <Link to={`/national-calamities/${item.slug}`}>
                                {" "}
                                <h3>{item.name}</h3>{" "}
                              </Link>
                            </div>

                            <hr />
                            <div className="story">
                              {item.content && renderHTML(item.content)}
                            </div>

                            <hr />
                          </div>
                          <div className="btn-flex">
                            <div className>
                              <Link
                                to={`/national-calamities/${item.slug}`}
                                className="btn btn-donate-project"
                              >
                                <i className="fa fa-heart" /> DONATE NOW
                              </Link>
                            </div>
                            <div className>
                              <FacebookBtn
                                url={`/national-calamities/${item.slug}`}
                              />
                              <WhatsappBtn
                                url={`/national-calamities/${item.slug}`}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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
          data={calamities}
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
const mapStateToProps = (state) => ({ calamitie: state.calamitie });

const mapDispatchToProps = {
  getCalamities,
  getNextCalamities,
  getPreviousCalamities,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllCalamities);
