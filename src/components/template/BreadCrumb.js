import React from "react";
import { connect } from "react-redux";

const BreadCrumb = ({ title }) => {
  return (
    <>
      {/* <section className="page-header ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="page-header-main">
              <h1> {title} </h1>
            </div>
          </div>
        </div>
      </div>
    </section> */}
      <section style={{ padding: "20px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="">
                <h3 class="details ">{title}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BreadCrumb);
