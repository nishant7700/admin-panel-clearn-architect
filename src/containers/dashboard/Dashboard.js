import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import BreadCrumb from "../../components/template/BreadCrumb";
import Header from "../../components/template/Header";

const Dashboard = () => {
  return (
    <div className="pace-done">
      <div>
        <Header />
        <BreadCrumb
          title="Dashboard"
          mainLinkTitle="Dashboard"
          mainLinkUrl="/dashboard"
          activeLink="Main"
        />

        <div className="container-fluid"></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
