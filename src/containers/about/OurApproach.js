import React from "react";
import { connect } from "react-redux";
import Header from "../../components/template/Header";
import Footer from "../../components/template/Footer";
import BreadCrumb from "../../components/template/BreadCrumb";
import { Link } from "react-router-dom";
const OurApproach = (props) => {
  return (
    <div>
      <Header active="ABOUT" />
      <BreadCrumb title={"OUR APPROACH"} />
      <section className="about-2 sec-padd3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 about-content">
              <p style={{ marginTop: 20 }}>
                National Organisation For Social Empowerment has made a
                considerable shift in its programming approach over the years.
                From providing basic services and social protection, focusing on
                health (including nutrition), education to empowering the poor
                and vulnerable groups.
              </p>
              <p>
                National Organisation For Social Empowerment has evolved into a
                rights-based organization in order to address underlying causes
                of poverty. Our focus is explicitly on the well-being, social
                position and rights of underprivileged children &amp; people,
                persons with special ability and women &amp; girls from
                marginalized communities.
              </p>
              <p>
                National Organisation For Social Empowerment focuses on
                developing the potential of underprivileged children &amp;
                people, persons with special ability and women &amp; girls to
                drive long lasting equitable changes. We strategically emphasize
                on promoting quality healthcare, hunger free world, inclusive
                education, gender equitable and sustainable livelihood
                opportunities and disaster relief.
              </p>
              <p>
                Our efforts are focused to fight against underlying causes of
                poverty, building secure and resilient communities and ensuring
                a life of dignity for all underprivileged children &amp; people,
                persons with special ability and women &amp; girls from
                marginalized and vulnerable communities.
              </p>
              <p>
                Moving forward our robust approach will continue to
                systematically examine social problems, issues or trends, with
                the aim of prompting changes that are being analyzed, gender
                transformative value chain approaches, leadership and life
                skills strengthening, building capacities and leadership roles
                at multiple levels, advocacy on national (at present) and
                international (later) platforms and facilitating links and
                dialogues between public, private and civil society.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="about-2 sec-padd3 "
        style={{ padding: "15px 0px 0px", background: "rgb(248, 249, 246)" }}
      >
        <div style={{ padding: "20px 0px", background: "rgb(255, 255, 255)" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12 about-content">
                <h3 className="text-center ">Our Goals</h3>
                <p style={{ marginTop: 20 }}>
                  1. To facilitate access to basic healthcare to every section
                  of the society
                </p>
                <p>2. To ensure food security for the needy</p>
                <p>
                  3. To enable the rehabilitation of persons with disabilities
                  (PWDs) through supplemental education, extensive training and
                  providing assistive aids designed for daily living, education
                  and for the work place
                </p>
                <p>
                  4. To empower the disabled and differently abled by ways of
                  helping them become capable of employment which will help them
                  become economically independent
                </p>
                <p>
                  5. To build the next generation of people with disabilities
                  who are confident, assertive, smart and independent
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OurApproach);
