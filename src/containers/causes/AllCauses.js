import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Header from "../../components/template/Header";
import Footer from "../../components/template/Footer";
import BreadCrumb from "../../components/template/BreadCrumb";
import { Link } from "react-router-dom";
import renderHTML from "react-render-html";
import {
  getCauses,
  getNextCauses,
  getPreviousCauses,
} from "../../store/actions/causes_action";
import { LIMIT } from "../../domain/constant";
import Pagination from "../../components/common/Pagination";
import Spinner from "../../components/layout/Spinner";
import CauseCard from "../../components/cards/CauseCard";
function AllCauses({
  getCauses,
  getNextCauses,
  getPreviousCauses,
  cause: { loading, causes },
}) {
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function allQuery() {
      getCauses({});
    }
    allQuery();
  }, []);
  const nextButtonClicked = () => {
    if (causes && causes.length === LIMIT) {
      const lastCause = causes[causes.length - 1];
      getNextCauses({ last: lastCause });
      setPage(page + 1);
    }
  };
  const prevBtnClicked = () => {
    if (page > 1) {
      const lastCause = causes[0];
      getPreviousCauses({
        first: lastCause,
      });
      setPage(page - 1);
    }
  };
  return (
    <div>
      <Header active="CAUSES" />
      <BreadCrumb title={"Current Beneficiaries"} />
      {!loading ? (
        <section className="current ptb-50">
          <div className="container">
            <div className="current-project">
              <div className="row">
                {causes &&
                  causes.map((item) => {
                    return (
                      <div className="col-md-4">
                        <CauseCard item={item} />
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
          data={causes}
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
const mapStateToProps = (state) => ({ cause: state.cause });

const mapDispatchToProps = {
  getCauses,
  getNextCauses,
  getPreviousCauses,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllCauses);
