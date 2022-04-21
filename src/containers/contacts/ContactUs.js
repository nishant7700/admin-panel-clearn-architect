import React from "react";
import { connect } from "react-redux";
import Header from "../../components/template/Header";
import Footer from "../../components/template/Footer";
const ContactUs = (props) => {
  return (
    <div>
      <Header active="CONTACT_US" />
      <section className="ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="contact-heading">
                <h3>We'd love to hear from you</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi
                  nibh blandit risus tellus mollis venenatis. Massa volutpat
                </p>
                <div className="contact-form">
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Phone"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows={3}
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="donate-btn">
                      <button
                        className="btn btn-donate my-2 my-sm-0"
                        style={{ padding: "12px 50px" }}
                        type="submit"
                      >
                        Submit Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-solid">
                <div className="text-left quote">
                  <i className="fa fa-quote-left" />
                </div>
                <div className="text-center quote-c">
                  <h3>
                    A man's true wealth is the good he does in this world.
                  </h3>
                </div>
                <div className="text-right quote">
                  <i className="fa fa-quote-right" />
                </div>
                <div className="start">
                  <h3>START YOUR GIVING MONEY</h3>
                </div>
                <div className="donate-btn text-center mt-5">
                  <button
                    className="btn btn-donate my-2 my-sm-0"
                    style={{ padding: "12px 50px" }}
                    type="submit"
                  >
                    Donate Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* contact details */}
          <div className="contact-main-details pt-50">
            <div className="row">
              <div className="col-md-4">
                <div className="contain">
                  <div className="contain-box-c">
                    <i className="fa fa-phone-square" />
                    <h3>CALL US</h3>
                    <p>18001034683</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contain">
                  <div className="contain-box-c">
                    <i className="fa fa-envelope" />
                    <h3>EMAIL US</h3>
                    <p>support@nationalngo.org</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contain">
                  <div className="contain-box-c">
                    <i className="fa fa-map-marker" />
                    <h3>ADDRESS</h3>
                    <p>
                      TA – 204, 1st Floor, Ravidas Marg, Tughlakabad Extension,
                      New Delhi-110019
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="map pt-50">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28043.15926825334!2d77.24006053955078!3d28.527847500000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce16eddc9eef7%3A0xb3f2e5c6aac36a4a!2sNational%20Organisation%20for%20Social%20Empowerment!5e0!3m2!1sen!2sin!4v1643349723179!5m2!1sen!2sin"
          width="100%"
          height={500}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </section>

      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
