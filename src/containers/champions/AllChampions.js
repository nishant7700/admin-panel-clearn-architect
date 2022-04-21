import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Header from "../../components/template/Header";
import Footer from "../../components/template/Footer";
import BreadCrumb from "../../components/template/BreadCrumb";
import { Link } from "react-router-dom";
import renderHTML from "react-render-html";
import {
  getChampions,
  getNextChampions,
  getPreviousChampions,
} from "../../store/actions/champions_action";
import { LIMIT } from "../../domain/constant";
import Pagination from "../../components/common/Pagination";
import Spinner from "../../components/layout/Spinner";
function AllChampions({
  getChampions,
  getNextChampions,
  getPreviousChampions,
  champion: { loading, champions },
}) {
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function allQuery() {
      getChampions({});
    }
    allQuery();
  }, []);
  const nextButtonClicked = () => {
    if (champions && champions.length === LIMIT) {
      const lastChampion = champions[champions.length - 1];
      getNextChampions({ last: lastChampion });
      setPage(page + 1);
    }
  };
  const prevBtnClicked = () => {
    if (page > 1) {
      const lastChampion = champions[0];
      getPreviousChampions({
        first: lastChampion,
      });
      setPage(page - 1);
    }
  };
  return (
    <div>
      <Header active="HOME" />
      <BreadCrumb title={"Champions"} />
      {!loading ? (
        <section className="current ptb-50">
          <div className="container">
            <div className="current-project">
              <div className="row">
                {champions &&
                  champions.map((item) => {
                    return (
                      <div className="col-md-4">
                        <div className="inner-box">
                          <Link to={`/champions/${item.slug}`}>
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
                              <Link to={`/champions/${item.slug}`}>
                                {" "}
                                <h3>{item.name}</h3>{" "}
                              </Link>
                            </div>
                            <hr />
                          </div>
                          <div className="btn-flex">
                            <div className>
                              <Link
                                to={`/champions/${item.slug}`}
                                className="btn btn-donate-project"
                              >
                                <i className="fa fa-heart" /> DONATE NOW
                              </Link>
                            </div>
                            <div className>
                              <a href="#" className="btn btn-view-details">
                                <i className="fa fa-facebook" />
                              </a>
                              <a href="#" className="btn btn-wa-details">
                                <i className="fa fa-whatsapp" />
                              </a>
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
          data={champions}
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
const mapStateToProps = (state) => ({ champion: state.champion });

const mapDispatchToProps = {
  getChampions,
  getNextChampions,
  getPreviousChampions,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllChampions);
