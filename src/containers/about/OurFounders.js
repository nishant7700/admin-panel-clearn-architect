import React from "react";
import { connect } from "react-redux";
import Header from "../../components/template/Header";
import Footer from "../../components/template/Footer";
import BreadCrumb from "../../components/template/BreadCrumb";
const OurFounders = (props) => {
  return (
    <div>
      <Header active="ABOUT" />
      <BreadCrumb title={"FOUNDERS"} />
      <section className="about-2 sec-padd3">
        <div className="container">
          <div className="row">
            <div className="col-md-4 about-content">
              <img
                src="/images/team/AmanSir.jpeg"
                style={{
                  width: "100%",
                  border: "2px solid rgb(241, 241, 248)",
                }}
              />
              <h3 className="text-center" style={{ padding: "10px 0px" }}>
                AMANDEEP SINGH
              </h3>
            </div>
            <div className="col-md-8 about-content">
              <p>
                Founding Trustee, a computer science graduate and an MBA from
                Griffith College Ireland. He has over 15 years of work
                experience in various firms in corporate sector abroad and in
                India. He is known for his unlimited energy and untiring efforts
                to see the culmination of any task undertaken, he is popularly
                known as a Go-Getter.
              </p>
              <p>
                After a successful career, he decided to spend the rest of his
                life for the betterment of the society and the country due to
                some personal situations. He founded National Organisation For
                Social Empowerment.
              </p>
              <p>
                He is a leader, team player, committed and passionate about the
                cause of the Children in Need and Persons with Special
                Abilities.
              </p>
              <p>
                At an early age, he was eye witness to the hardships faced by
                the poor and weaker sections of the community. He understands
                the need for extra efforts by the society for the upliftment of
                the downtrodden.
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
              <div className="col-md-4 about-content">
                <img
                  src="/images/team/SparshMaheshwari.jpeg"
                  style={{
                    width: "100%",
                    border: "2px solid rgb(241, 241, 248)",
                  }}
                />
                <h3 className="text-center" style={{ padding: "10px 0px" }}>
                  SPARSH MAHESHWARI
                </h3>
              </div>
              <div className="col-md-8 about-content">
                <p>
                  With over 14 years of corporate experience; he provides the
                  team of National OrganisationFor Social Empowerment with
                  strategies, ideas and works closely with Management Team in
                  implementing the Program.
                </p>
                <p>
                  He is a graduate with MSC in Marketing from Dublin. An avid
                  admirer of ethics &amp; competent with “Donor Management
                  Mantras”; believes that change can happen speedily with active
                  involvement of the affluent. He works towards bridging the gap
                  between the “uptown” &amp; the “needy” by creating community
                  engagement programs which will help in creating a “social
                  ecosystem” ideal for the growth of any nation.
                </p>
                <p>
                  His dream project is to expand National OrganisationFor Social
                  Empowerment by getting maximum number of people and
                  organizations involved, driving a people’s movement for the
                  rights of India’s underprivileged.
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

export default connect(mapStateToProps, mapDispatchToProps)(OurFounders);
