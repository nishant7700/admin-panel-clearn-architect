import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Header from "../../components/template/Header";
import Footer from "../../components/template/Footer";
import BreadCrumb from "../../components/template/BreadCrumb";
import { Link } from "react-router-dom";
import renderHTML from "react-render-html";
import {
  getEvents,
  getNextEvents,
  getPreviousEvents,
} from "../../store/actions/events_action";
import { LIMIT } from "../../domain/constant";
import Pagination from "../../components/common/Pagination";
import Spinner from "../../components/layout/Spinner";
import GalleryCard from "../../components/cards/GalleryCard";
function AllPressReleases({
  getEvents,
  getNextEvents,
  getPreviousEvents,
  event: { loading, events },
}) {
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function allQuery() {
      getEvents({});
    }
    allQuery();
  }, []);
  const nextButtonClicked = () => {
    if (events && events.length === LIMIT) {
      const lastEvent = events[events.length - 1];
      getNextEvents({ last: lastEvent });
      setPage(page + 1);
    }
  };
  const prevBtnClicked = () => {
    if (page > 1) {
      const lastEvent = events[0];
      getPreviousEvents({
        first: lastEvent,
      });
      setPage(page - 1);
    }
  };
  return (
    <div>
      <Header active="GALLERY" />
      <BreadCrumb title={"GALLERY"} />
      {!loading ? (
        <section className="current ptb-50">
          <div className="container">
            <div className="current-project">
              <div className="row">
                {events &&
                  events.map((item) => {
                    return (
                      <div className="col-md-4">
                        <GalleryCard item={item} />
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
          data={events}
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
const mapStateToProps = (state) => ({ event: state.event });

const mapDispatchToProps = {
  getEvents,

  getNextEvents,
  getPreviousEvents,
};
export default connect(mapStateToProps, mapDispatchToProps)(AllPressReleases);
