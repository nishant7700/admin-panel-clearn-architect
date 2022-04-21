import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <section className="pt-50 footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="footer-links">
                <h3 className="s">ABOUT US</h3>
              </div>
              <div className="footer-logo">
                <p>
                  Nearly 1.73 million children die in India every year due to
                  lack of treatment. We work with communities to ensure that
                  everyone receives adequate nutrition and healthcare services.
                </p>
                <Link to="/">
                  <img src="/assets/images/logo.png" />
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="footer-links">
                <h3>Main Links</h3>
                <ul>
                  <li>
                    <Link to="/our-approach">
                      <i className="fa fa-angle-double-right" /> Our Approach
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-team">
                      <i className="fa fa-angle-double-right" />
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link to="/volunteer">
                      <i className="fa fa-angle-double-right" />
                      Join us
                    </Link>
                  </li>
                  <li>
                    <Link to="/champions">
                      <i className="fa fa-angle-double-right" />
                      Champions
                    </Link>
                  </li>
                  <li>
                    <Link to="/national-calamities">
                      <i className="fa fa-angle-double-right" />
                      National Calamities
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="footer-links">
                <h3>National NGO</h3>
                <ul>
                  <li>
                    <Link to="/events">
                      <i className="fa fa-angle-double-right" />
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link to="/press-release">
                      <i className="fa fa-angle-double-right" />
                      Press Releases
                    </Link>
                  </li>
                  <li>
                    <Link to="/testimonials">
                      <i className="fa fa-angle-double-right" />
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link to="/causes">
                      <i className="fa fa-angle-double-right" />
                      Current Beneficiaries
                    </Link>
                  </li>
                  <li>
                    <Link to="/success-stories">
                      <i className="fa fa-angle-double-right" />
                      Successful Stories
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="footer-links">
                <h3>Office Address</h3>
                <div className="pt-30">
                  <p>
                    TA – 204, 1st Floor, Ravidas Marg, Tughlakabad Extension,
                    New Delhi-110019
                  </p>
                </div>
                <span>1800 103 4683</span>
              </div>
              <div className="footer-links">
                <h3>SUPPORTED BY</h3>
                <img src="/assets/images/bank.png" />
              </div>
            </div>
            <div className="col">
              <div className="footer-links">
                <div className="footer-button">
                  <Link className="btn btn-donate-lg" to="/donate-now">
                    DONATE NOW
                  </Link>
                </div>
                <div className="copyright-links">
                  <ul>
                    <li>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/terms-and-conditions">
                        Terms &amp; Conditions
                      </Link>
                    </li>
                    <li>
                      <Link to="/cancellation-and-refund-policy">
                        Refund & Cancellation Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="social-med">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/NationalNGOIndia"
                      target="_blank"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/nationalngodelhi/"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/national-ngo/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UC8n8zgj6kFz9DZfuyRxS1LQ"
                      target="_blank"
                    >
                      <i className="fa fa-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright-text">
                <p>
                  © {new Date().getFullYear()} National NGO - All Rights
                  Reserved.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
