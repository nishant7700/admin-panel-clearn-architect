import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Header from "../../components/template/Header";
import Footer from "../../components/template/Footer";
import BreadCrumb from "../../components/template/BreadCrumb";
import { Link } from "react-router-dom";
import {
  getStories,
  getNextStories,
  getPreviousStories,
} from "../../store/actions/stories_action";
import { LIMIT } from "../../domain/constant";
import Pagination from "../../components/common/Pagination";
import Spinner from "../../components/layout/Spinner";
import StoryCard from "../../components/cards/StoryCard";
function SuccessStories({
  getStories,
  getNextStories,
  getPreviousStories,
  storie: { loading, stories },
}) {
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function allQuery() {
      getStories({});
    }
    allQuery();
  }, []);
  const nextButtonClicked = () => {
    if (stories && stories.length === LIMIT) {
      const lastStorie = stories[stories.length - 1];
      getNextStories({ last: lastStorie });
      setPage(page + 1);
    }
  };
  const prevBtnClicked = () => {
    if (page > 1) {
      const lastStorie = stories[0];
      getPreviousStories({
        first: lastStorie,
      });
      setPage(page - 1);
    }
  };
  return (
    <div>
      <Header active="SUCCESS_STORIES" />
      <BreadCrumb title={"Success Stories"} />
      <>
        {!loading ? (
          <section className="current ptb-50">
            <div className="container">
              <div className="current-project">
                <div className="row">
                  {stories &&
                    stories.map((item) => {
                      return (
                        <div className="col-md-4">
                          <StoryCard item={item} />
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
      </>

      <section className="ptb-50">
        <Pagination
          data={stories}
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
const mapStateToProps = (state) => ({ storie: state.storie });

const mapDispatchToProps = {
  getStories,
  getNextStories,
  getPreviousStories,
};

export default connect(mapStateToProps, mapDispatchToProps)(SuccessStories);
