import React from "react";
import { connect } from "react-redux";
import Header from "../../components/template/Header";
import Footer from "../../components/template/Footer";
import { Link } from "react-router-dom";
import Sidebar from "../../components/cards/Sidebar";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextInput, TextArea } from "../../components/Form/Form";
import { addDonation } from "../../store/actions/donations_action";
const OnlineDonation = ({ addDonation }) => {
  return (
    <div>
      <Header active="CONTACT_US" />
      <section className="main-cause ptb-50">
        <div className="container">
          <div className="stic">
            <div className="row">
              <div className="col-md-7">
                <h3 className="details">Donation Details</h3>
                <div className="donation-form">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="d-flex">
                        <div>
                          <Link to={"/donate-now"} className="btn btn-health">
                            Online Donation
                          </Link>
                        </div>
                        <div>
                          <Link to={"/ecs"} className="btn btn-health">
                            ECS
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Formik
                    initialValues={{
                      donor_name: "",
                      amount: "",
                      email: "",
                      phone: "",
                      pan: "",
                      volunteer: "",
                      city: "",
                      state: "",
                      pincode: "",
                      message: "",
                    }}
                    validationSchema={Yup.object({
                      donor_name: Yup.string().required("Required"),
                      amount: Yup.string().required("Required"),
                      email: Yup.string().required("Required"),
                      phone: Yup.string().required("Required"),
                    })}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                      setSubmitting(true);
                      values.referrer = document.referrer;
                      addDonation(values);
                      resetForm();
                      setSubmitting(false);
                    }}
                  >
                    {(formik) => {
                      console.log(formik);
                      return (
                        <Form>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <TextInput
                                  label="Amount"
                                  name="amount"
                                  type="number"
                                  placeholder="Enter Amount"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <TextInput
                                  label="Donor Name"
                                  name="donor_name"
                                  type="text"
                                  placeholder="Enter Donor Name"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <TextInput
                                  label="Email"
                                  name="email"
                                  type="text"
                                  placeholder="Enter Email"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <TextInput
                                  label="Phone"
                                  name="phone"
                                  type="text"
                                  placeholder="Enter Phone"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <TextInput
                                  label="Pan Number"
                                  name="pan"
                                  type="text"
                                  placeholder="Enter Pan Number"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <TextInput
                                  label="Volunteer"
                                  name="volunteer"
                                  type="text"
                                  placeholder="Enter Volunteer"
                                />
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="form-group">
                                <TextInput
                                  label="City"
                                  name="city"
                                  type="text"
                                  placeholder="Enter City"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <TextInput
                                  label="State"
                                  name="state"
                                  type="text"
                                  placeholder="Enter State"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <TextInput
                                  label="Pincode"
                                  name="pincode"
                                  type="text"
                                  placeholder="Enter Pincode"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <TextArea
                                  label="Message"
                                  name="message"
                                  type="text"
                                  placeholder="Enter Message"
                                />
                              </div>
                            </div>
                            <div className="donate-button">
                              <button className="btn btn-donate">
                                Donate Now
                              </button>
                            </div>
                          </div>
                        </Form>
                      );
                    }}
                  </Formik>

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
                <Sidebar />
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

const mapDispatchToProps = { addDonation };

export default connect(mapStateToProps, mapDispatchToProps)(OnlineDonation);
