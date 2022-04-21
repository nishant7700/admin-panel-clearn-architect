import React from "react";
import { connect } from "react-redux";
import Header from "../../components/template/Header";
import Footer from "../../components/template/Footer";
const DonateCalam = (props) => {
  return (
    <div>
      <Header active="CONTACT_US" />
      <section className="main-cause pb-50">
        <div className="container">
          <div className="stic">
            <div className="row">
              <div className="col-md-7">
                <h3 className="details">Donation Details</h3>
                <div className="donation-form">
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Donor Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="number"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Contact Number"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Pan Number"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Volunteer Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="number"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Donation Amount"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="City"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Address"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="State"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Pin Code"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={3}
                            placeholder="Something You Want"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="donate-button">
                        <button className="btn btn-donate">Donate Now</button>
                      </div>
                    </div>
                  </form>
                  <hr />
                  <div className="bank-details">
                    <h3>
                      Our Bank details to make donation from net-banking /
                      Internet Banking.
                    </h3>
                    <div className="main-details">
                      <h3>State Bank of India Details</h3>
                      <hr />
                      <div className="account-flex">
                        <div className="name">Beneficiary Name</div>
                        <div className="value">
                          National Organisation for Social Empowerment
                        </div>
                      </div>
                      <hr />
                      <div className="account-flex">
                        <div className="name">Types Of Account</div>
                        <div className="value">Current</div>
                      </div>
                      <hr />
                      <div className="account-flex">
                        <div className="name">Account Number</div>
                        <div className="value">32344893165</div>
                      </div>
                      <hr />
                      <div className="account-flex">
                        <div className="name">Branch</div>
                        <div className="value">
                          Sagar Tower, District Centre, Janakpuri, New Delhi-
                          110058
                        </div>
                      </div>
                      <hr />
                      <div className="account-flex">
                        <div className="name">Branch Code</div>
                        <div className="value">001706</div>
                      </div>
                      <hr />
                      <div className="account-flex">
                        <div className="name">IFSC Code</div>
                        <div className="value">SBIN0001706</div>
                      </div>
                      <hr />
                      <div className="account-flex">
                        <div className="name">MICR Code</div>
                        <div className="value">110002054</div>
                      </div>
                    </div>
                    <hr />
                    <div className="main-details">
                      <h3>ICICI Bank Details</h3>
                      <hr />
                      <div className="account-flex">
                        <div className="name">Beneficiary Name</div>
                        <div className="value">
                          National Organisation for Social Empowerment
                        </div>
                      </div>
                      <hr />
                      <div className="account-flex">
                        <div className="name">Types Of Account</div>
                        <div className="value">Current</div>
                      </div>
                      <hr />
                      <div className="account-flex">
                        <div className="name">Account Number</div>
                        <div className="value">032205001782</div>
                      </div>
                      <hr />
                      <div className="account-flex">
                        <div className="name">Branch</div>
                        <div className="value">
                          SAFDARJUNG ENCLAVE, NEW DELHI 110029
                        </div>
                      </div>
                      <hr />
                      <div className="account-flex">
                        <div className="name">Branch Code</div>
                        <div className="value">001706</div>
                      </div>
                      <hr />
                      <div className="account-flex">
                        <div className="name">IFSC Code</div>
                        <div className="value">001706</div>
                      </div>
                      <hr />
                      <div className="account-flex">
                        <div className="name">MICR Code</div>
                        <div className="value">110002054</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="sidebar">
                  <h3>You Are Donation Towards</h3>
                  <div className="banner-ei">
                    <div className="main-image">
                      <img src="assets/images/22811264.jpg" />
                    </div>
                    <div id="home" className="main-content">
                      <div className="#home">
                        <h2>
                          Thank you for showing us that we are not alone in our
                          mission!
                        </h2>
                        <p>
                          We are grateful for your thoughtfulness while poor
                          migrant workers are going through this difficult time.
                          Because of your kind support, we have fed more than 4
                          lakhs poor people across Delhi/NCR.
                        </p>
                        <p>
                          Your generosity and support during this difficult time
                          is greatly appreciated!
                        </p>
                        <p>
                          So far we have fed more than <b>4, 00,000 people</b>{" "}
                          in Delhi/NCR by consistently providing hygienic cooked
                          meals without any failure every day. The best part of
                          the <b>Food Distribution Drive</b> of the
                          <b>National Organisation For Social Empowerment</b> is
                          that we are going door to door. We had given needy
                          people freshly cooked food packets every day and
                          during the distribution procedure our NGO followed the
                          social distancing and lockdown norms.
                        </p>
                        <p>
                          While immediate food relief is a concern, so is
                          safety. It is to lessen the impact of the crisis on
                          these sections of the society, and to ensure their
                          access to essentials, that
                          <b>
                            National Organisation For Social Empowerment
                          </b>{" "}
                          aka
                          <b>National NGO</b> are sending out appeals for funds.
                        </p>
                        <div className="share">
                          <button className="btn btn-share">
                            <i className="fa fa-facebook" /> Share On Facebook
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DonateCalam);
