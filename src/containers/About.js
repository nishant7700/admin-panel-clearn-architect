import React from "react";
import Header from "../components/template/Header";
import Footer from "../components/template/Footer";
import BreadCrumb from "../components/template/BreadCrumb";
import WhoWeAre from "../components/template/WhoWeAre";
import Statics from "../components/template/Statics";
import Counter from "../components/template/Counter";
function About() {
  return (
    <div>
      <Header active="ABOUT" />
      <BreadCrumb title={"About US"} />
      <WhoWeAre />
      <Statics />
      <Counter />
      <Footer />
    </div>
  );
}

export default About;
