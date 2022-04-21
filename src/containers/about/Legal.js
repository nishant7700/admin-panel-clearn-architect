import React from "react";
import { connect } from "react-redux";
import Header from "../../components/template/Header";
import Footer from "../../components/template/Footer";
const Legal = (props) => {
  return (
    <div>
      <Header active="ABOUT" />
      <section
        className="about-2 sec-padd3 "
        style={{ padding: "15px 0px 0px", background: "rgb(248, 249, 246)" }}
      >
        <div style={{ padding: "20px 0px", background: "rgb(255, 255, 255)" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12 about-content">
                <h3 className="text-center ">Legal</h3>
                <p style={{ marginTop: 20 }}>
                  Founded in 2012 by Amandeep Singh and Sparsh Maheshwari,
                  National Organisation for Social Empowerment is registered
                  under the Indian Trust Act of 1882, Section 60 (Registration
                  no. 1895).
                </p>
                <p>
                  At National NGO, we believe in complete transparency with our
                  shareholders and thus all our important legal documents are
                  available for public scrutiny as a proof of our legitimacy.
                </p>
                <p>
                  <strong> Legal Documents </strong>
                </p>
                <div className="legal-docs">
                  <a href="/assets/images/pancard.pdf" target="_blank">
                    PAN CARD
                  </a>
                </div>
                <div className="legal-docs">
                  <a href="/assets/images/12A.pdf" target="_blank">
                    12 A CERTIFICATE FROM INCOME TAX
                  </a>
                </div>
                <div className="legal-docs">
                  <a
                    href="/assets/images/NATIONAL-NGO-KITCHEN-FSSAI.pdf"
                    target="_blank"
                  >
                    FSSAI Certificate
                  </a>
                </div>
                <div className="legal-docs">
                  <a
                    href="/assets/images/HEALTH-TRADE-LICENSE.pdf"
                    target="_blank"
                  >
                    HEALTH TRADE LICENSE
                  </a>
                </div>
                <div className="legal-docs">
                  <a href="/assets/images/80G.pdf" target="_blank">
                    80 G TAX REBATE CERTIFICATE FROM INCOME TAX
                  </a>
                </div>
                <div className="legal-docs">
                  <a
                    href="/assets/images/Registration-Copy.pdf"
                    target="_blank"
                  >
                    REGISTRATION COPY
                  </a>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Legal);
