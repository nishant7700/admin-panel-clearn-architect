import React from "react";
import { connect } from "react-redux";
import Header from "../../components/template/Header";
import Footer from "../../components/template/Footer";
import BreadCrumb from "../../components/template/BreadCrumb";
const OurTeam = (props) => {
  return (
    <div>
      <Header active="ABOUT" />
      <BreadCrumb title={"OUR TEAM"} />
      <section className="about-2 sec-padd3">
        <div className="container">
          <div className="row">
            <div className="col-md-4 about-content">
              <img
                src="/images/team/ManishaHr.jpeg"
                style={{
                  maxWidth: "100%",
                  border: "2px solid rgb(241, 241, 248)",
                }}
              />
            </div>
            <div className="col-md-8 about-content">
              <h3 style={{ padding: "10px 0px" }}>Manisha Pradhan</h3>
              <p style={{ color: "rgb(102, 102, 102)" }}>
                - Head Human Resource{" "}
              </p>
              <p>
                She holds an experience of 7+years in Human Resources with a
                demonstrated history of working in the non-profit organization
                and human resources Industry. She completed her Graduation and
                MBA - HR. She is proficient in HR consulting, executive search,
                recruiting, and HR policies. Over the past 5+ years, she is
                associated with National Organisation For Social Empowerment as
                Head of Human Resources and looks after the implementation to
                sustain and institutionalize the best HR practices in our
                organization. She sees herself as an enabler and coordinator to
                bring in a culture of cognition and performance. She endeavors
                to foster an environment of innovation, collaboration, and
                empowerment which honors the individuals as well as teams'
                achievements.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="about-2 sec-padd3"
        style={{ padding: "15px 0px 0px", background: "rgb(248, 249, 246)" }}
      >
        <div style={{ padding: "20px 0px", background: "rgb(255, 255, 255)" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-4 about-content">
                <img
                  src="/images/team/Sachinkohli.jpg"
                  style={{
                    maxWidth: "100%",
                    border: "2px solid rgb(241, 241, 248)",
                  }}
                />
              </div>
              <div className="col-md-8 about-content">
                <h3 style={{ padding: "10px 0px" }}>Sachin Kohli</h3>
                <p style={{ color: "rgb(102, 102, 102)" }}>
                  - Head Operations{" "}
                </p>
                <p>
                  17+ years of experience in sales and Operations has helped him
                  to ensure an effective and efficient controlled environment in
                  operations within the organization across multiple projects,
                  achieving conformance/compliance targets on an on-going basis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="about-2 sec-padd3"
        style={{ padding: "15px 0px 0px", background: "rgb(248, 249, 246)" }}
      >
        <div style={{ padding: "20px 0px", background: "rgb(255, 255, 255)" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-4 about-content">
                <img
                  src="/images/team/Mansi.jpeg"
                  style={{
                    maxWidth: "100%",
                    border: "2px solid rgb(241, 241, 248)",
                  }}
                />
              </div>
              <div className="col-md-8 about-content">
                <h3 style={{ padding: "10px 0px" }}>Mansi Jain</h3>
                <p style={{ color: "rgb(102, 102, 102)" }}>
                  - Head Resource Mobilization
                </p>
                <p>
                  She is an experienced person for Resource Mobilization with a
                  demonstrated history of working in the non-profit organization
                  management industry. She is a self-starter with a passion
                  towards the developmental work and core competency in
                  cross-functional management with over 19 years of experience.
                  She is skilled at orienting, training and disciplining
                  managers; by carrying immense expertise in developing
                  strategies, objectives, and assigning accountability She has
                  been associated with National Organisation For Social
                  Empowerment from 4+ years but never fails to show her skills
                  in negotiation, business planning, operations management,
                  business development, and forecasting, proposal writing, grant
                  management and handling resources for the program verticals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="about-2 sec-padd3"
        style={{ padding: "15px 0px 0px", background: "rgb(248, 249, 246)" }}
      >
        <div style={{ padding: "20px 0px", background: "rgb(255, 255, 255)" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-4 about-content">
                <img
                  src="/images/team/Monika.jpeg"
                  style={{
                    maxWidth: "100%",
                    border: "2px solid rgb(241, 241, 248)",
                  }}
                />
              </div>
              <div className="col-md-8 about-content">
                <h3 style={{ padding: "10px 0px" }}>Monika Nautiyal</h3>
                <p style={{ color: "rgb(102, 102, 102)" }}>
                  - Senior Manager Backend operations
                </p>
                <p>
                  She is an experienced Senior Manager for backend operations
                  with a demonstrated history of working in the non-profit
                  organization management industry. Her willingness to work for
                  underprivileged kids with basic school going necessities
                  inspired her to work with National OrganisationFor Social
                  Empowerment from last 8 years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="about-2 sec-padd3"
        style={{ padding: "15px 0px 0px", background: "rgb(248, 249, 246)" }}
      >
        <div style={{ padding: "20px 0px", background: "rgb(255, 255, 255)" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-4 about-content">
                <img
                  src="/images/team/KrishanGopal.jpeg"
                  style={{
                    maxWidth: "100%",
                    border: "2px solid rgb(241, 241, 248)",
                  }}
                />
              </div>
              <div className="col-md-8 about-content">
                <h3 style={{ padding: "10px 0px" }}>Krishan Gopal</h3>
                <p style={{ color: "rgb(102, 102, 102)" }}>
                  - Manager Programms
                </p>
                <p>
                  An arts graduate from retail management background having 10+
                  years of work experience in various firms. His love for
                  society made him utilize his skills in social sector for noble
                  cause. His core strength areas are program management and
                  handling resources for the program vertical. He has previously
                  worked in knowledge management role positions with other
                  children-based organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="about-2 sec-padd3"
        style={{ padding: "15px 0px 0px", background: "rgb(248, 249, 246)" }}
      >
        <div style={{ padding: "20px 0px", background: "rgb(255, 255, 255)" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-4 about-content">
                <img
                  src="/images/team/JudesHarry.jpeg"
                  style={{
                    maxWidth: "100%",
                    border: "2px solid rgb(241, 241, 248)",
                  }}
                />
              </div>
              <div className="col-md-8 about-content">
                <h3 style={{ padding: "10px 0px" }}>Judes Agenlo Harry</h3>
                <p style={{ color: "rgb(102, 102, 102)" }}>
                  - Manager Programms
                </p>
                <p>
                  As he couldn’t cure his father who was suffering from cancer
                  made him work for the people or children suffering from
                  cancer. Coming from the field of choreography, disc jockey,
                  events, counseling and marketing has helped him a lot in his
                  16+ years of experience to understand the pain and emotions of
                  the people and work for their betterment. He has good
                  experience of working with children-based organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="about-2 sec-padd3"
        style={{ padding: "15px 0px 0px", background: "rgb(248, 249, 246)" }}
      >
        <div style={{ padding: "20px 0px", background: "rgb(255, 255, 255)" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-4 about-content">
                <img
                  src="/images/team/Ruchika.jpg"
                  style={{
                    maxWidth: "100%",
                    border: "2px solid rgb(241, 241, 248)",
                  }}
                />
              </div>
              <div className="col-md-8 about-content">
                <h3 style={{ padding: "10px 0px" }}>Ruchika Bali</h3>
                <p style={{ color: "rgb(102, 102, 102)" }}>- Manager Project</p>
                <p>
                  Arts Graduate with 10 + years of experience. Started her
                  career with International non-profit organizations but
                  willingness to work from grass root level made her join
                  National OrganisationFor Social Empowerment. In these past 6+
                  years with our organization she has demonstrated her strength
                  in project management and handling resources for the project
                  vertical.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="about-2 sec-padd3"
        style={{ padding: "15px 0px 0px", background: "rgb(248, 249, 246)" }}
      >
        <div style={{ padding: "20px 0px", background: "rgb(255, 255, 255)" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-4 about-content">
                <img
                  src="/images/team/Sanjeev.jpeg"
                  style={{
                    maxWidth: "100%",
                    border: "2px solid rgb(241, 241, 248)",
                  }}
                />
              </div>
              <div className="col-md-8 about-content">
                <h3 style={{ padding: "10px 0px" }}>Sanjeev Kumar Nainavat</h3>
                <p style={{ color: "rgb(102, 102, 102)" }}>- Manager Project</p>
                <p>
                  His motto was to help the needy, that is the only reason he
                  persuaded his education also in the same field. He is Masters
                  in Social Work ( MSW ) with 9+ years of experience out of
                  which 6+ years with National Organisation For Social
                  Empowerment. He always thinks about team’s well being and
                  selflessly loves to work for underprivileged children. He
                  posses the strength for project management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="about-2 sec-padd3"
        style={{ padding: "15px 0px 0px", background: "rgb(248, 249, 246)" }}
      >
        <div style={{ padding: "20px 0px", background: "rgb(255, 255, 255)" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-4 about-content">
                <img
                  src="/images/team/Arya.jpeg"
                  style={{
                    maxWidth: "100%",
                    border: "2px solid rgb(241, 241, 248)",
                  }}
                />
              </div>
              <div className="col-md-8 about-content">
                <h3 style={{ padding: "10px 0px" }}>Arya</h3>
                <p style={{ color: "rgb(102, 102, 102)" }}>
                  - Manager Digital Marketing &amp; IT
                </p>
                <p>
                  He is a multi talented self-starter with passion towards the
                  development work in digital marketing and IT. In his 10+ years
                  of experience his strengths are developing, implementing and
                  managing marketing campaigns that promote our organization and
                  its services. He plays a major role in enhancing brand
                  awareness within the digital space as well as driving website
                  traffic and acquiring donors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="about-2 sec-padd3"
        style={{ padding: "15px 0px 0px", background: "rgb(248, 249, 246)" }}
      >
        <div style={{ padding: "20px 0px", background: "rgb(255, 255, 255)" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-4 about-content">
                <img
                  src="/images/team/Manish.jpg"
                  style={{
                    maxWidth: "100%",
                    border: "2px solid rgb(241, 241, 248)",
                  }}
                />
              </div>
              <div className="col-md-8 about-content">
                <h3 style={{ padding: "10px 0px" }}>Manish Gera</h3>
                <p style={{ color: "rgb(102, 102, 102)" }}>- Manager Admin</p>
                <p>
                  An graduate with 10+ years of experience helps him in planning
                  and coordinating administrative procedures and systems and
                  devising ways to streamline processes. Under his supervision
                  administrative team members ensure that daily office
                  operations are performed in a seamless and efficient manner.
                  Assessing staff performance and provide coaching and guidance
                  to ensure maximum efficiency, hiring, training, and evaluating
                  employees, taking corrective action when necessary also comes
                  under his jurisdiction. His understanding for allocating
                  responsibilities, office space, office equipments is
                  commendable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="about-2 sec-padd3"
        style={{ padding: "15px 0px 0px", background: "rgb(248, 249, 246)" }}
      >
        <div style={{ padding: "20px 0px", background: "rgb(255, 255, 255)" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-4 about-content">
                <img
                  src="/images/team/PraveshKumar.jpeg"
                  style={{
                    maxWidth: "100%",
                    border: "2px solid rgb(241, 241, 248)",
                  }}
                />
              </div>
              <div className="col-md-8 about-content">
                <h3 style={{ padding: "10px 0px" }}>Pravesh Kumar</h3>
                <p style={{ color: "rgb(102, 102, 102)" }}>
                  - Manager Finance &amp; Accounts
                </p>
                <p>
                  An M.Com pass out with 10+ years of experience reviews
                  financial reports, monitors accounts, and prepares activity
                  reports and financial forecasts. He also investigates ways to
                  improve the working of the projects to get better results, and
                  analyze markets for business opportunities, such as expansion,
                  mergers or acquisitions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="call-out">
        <div className="container">
          <div className="float_left">
            <h4>
              Start with helping one poor person and pave way for the bigger
              changes!
            </h4>
          </div>
          <div className="float_right">
            <a className="thm-btn style-3" href="/become-a-volunteer">
              Become a Volunteer
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OurTeam);
