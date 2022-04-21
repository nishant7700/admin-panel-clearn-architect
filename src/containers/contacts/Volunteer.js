import React from "react";
import { connect } from "react-redux";
import Header from "../../components/template/Header";
import Footer from "../../components/template/Footer";
import Sidebar from "../../components/cards/Sidebar";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addVolunteer } from "../../store/actions/volunteers_action";
import { Link } from "react-router-dom";
const ContactUs = ({ addVolunteer }) => {
  return (
    <div>
      <Header active="CONTACT_US" />
      <section className="ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="contact-heading">
                <div style={{ background: "#fff", padding: 50 }}>
                  <h3 className="text-center"> Register as Volunteer </h3>
                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      phone: "",
                      address: "",
                      remarks: "",
                      preferred_are: "",
                      city: "",
                      occupation: "",
                    }}
                    validationSchema={Yup.object({
                      name: Yup.string().required("Required"),
                      email: Yup.string().required("Required").email(),
                      phone: Yup.string().required("Required"),
                      address: Yup.string().required("Required"),
                    })}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                      console.log(values);
                      setSubmitting(false);
                      addVolunteer(values);
                      resetForm({});
                    }}
                  >
                    {(formik) => {
                      return (
                        <Form>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <label> Name </label>
                                <Field
                                  type="text"
                                  name="name"
                                  className="form-control"
                                />

                                <p className="text-danger">
                                  {formik.errors.name &&
                                    formik.touched.name &&
                                    formik.errors.name}
                                </p>
                              </div>
                              <div className="form-group">
                                <label> Email </label>
                                <Field
                                  type="text"
                                  name="email"
                                  className="form-control"
                                />

                                <p className="text-danger">
                                  {formik.errors.email &&
                                    formik.touched.email &&
                                    formik.errors.email}
                                </p>
                              </div>
                              <div className="form-group">
                                <label> Phone </label>
                                <Field
                                  type="text"
                                  name="phone"
                                  className="form-control"
                                />

                                <p className="text-danger">
                                  {formik.errors.phone &&
                                    formik.touched.phone &&
                                    formik.errors.phone}
                                </p>
                              </div>

                              <div className="form-group">
                                <label> Address </label>
                                <Field
                                  type="text-area"
                                  name="address"
                                  className="form-control"
                                />

                                <p className="text-danger">
                                  {formik.errors.address &&
                                    formik.touched.address &&
                                    formik.errors.address}
                                </p>
                              </div>
                              <div className="form-group">
                                <label> Remarks </label>
                                <textarea
                                  name="remarks"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.remarks}
                                  className="form-control"
                                ></textarea>
                                <p>
                                  {formik.errors.remarks &&
                                    formik.touched.remarks &&
                                    formik.errors.remarks}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row m-3">
                            <div className="col-md-12 text-center">
                              <button type="submit" className="btn btn-success">
                                Submit
                              </button>
                            </div>
                          </div>
                        </Form>
                      );
                    }}
                  </Formik>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <Sidebar />
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
