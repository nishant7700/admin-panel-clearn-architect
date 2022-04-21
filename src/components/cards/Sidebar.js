import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCauses } from "../../store/actions/causes_action";
import CauseCard from "./CauseCard";

function Sidebar({ getCauses, cause: { loading, causes } }) {
  useEffect(() => {
    if (!causes) {
      getCauses({});
    }
  }, []);
  return (
    <div className="sidebar-main">
      <div className="category-style-one">
        <ul className="list">
          <li>
            <Link to="/causes">View All Causes</Link>
          </li>
          <li>
            <Link to="/success-stories">Successful Stories</Link>
          </li>
          <li>
            <Link to="/champions">Champion's Information</Link>
          </li>
        </ul>
      </div>
      <div className="section-heading">
        <h3> Recent Causes </h3>
      </div>
      {!loading ? (
        <div>
          {causes &&
            causes.map((item, i) => {
              if (i < 4) {
                return <CauseCard item={item} hideContent={true} />;
              }
            })}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
const mapStateToProps = (state) => ({ cause: state.cause });

const mapDispatchToProps = {
  getCauses,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
