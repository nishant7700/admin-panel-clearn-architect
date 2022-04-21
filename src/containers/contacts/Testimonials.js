import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Header from "../../components/template/Header";
import Footer from "../../components/template/Footer";
import BreadCrumb from "../../components/template/BreadCrumb";
import { Link } from "react-router-dom";
import renderHTML from "react-render-html";
import {
  getTestimonials,
  getNextTestimonials,
  getPreviousTestimonials,
  addTestimonial,
} from "../../store/actions/testimonials_action";
import { LIMIT } from "../../domain/constant";
import Pagination from "../../components/common/Pagination";
import Spinner from "../../components/layout/Spinner";
import Sidebar from "../../components/cards/Sidebar";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextArea, TextInput } from "../../components/Form/Form";
import { upload } from "../../shared/upload";
function Testimonials({
  getTestimonials,
  addTestimonial,
  getNextTestimonials,
  getPreviousTestimonials,
  testimonial: { loading, testimonials },
}) {
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function allQuery() {
      getTestimonials({});
    }
    allQuery();
  }, []);
  const nextButtonClicked = () => {
    if (testimonials && testimonials.length === LIMIT) {
      const lastTestimonial = testimonials[testimonials.length - 1];
      getNextTestimonials({ last: lastTestimonial });
      setPage(page + 1);
    }
  };
  const prevBtnClicked = () => {
    if (page > 1) {
      const lastTestimonial = testimonials[0];
      getPreviousTestimonials({
        first: lastTestimonial,
      });
      setPage(page - 1);
    }
  };
  const [featured_image, setFeatured_image] = useState(null);
  return (
    <div>
      <Header active="HOME" />
      <BreadCrumb title={"Testimonials"} />
      {!loading ? (
        <section className="current ptb-50">
          <div className="container">
            <div className="current-project">
              <div className="row">
                <div className="col-md-8">
                  <div className="row">
                    {testimonials &&
                      testimonials.map((item) => {
                        if (item.approved == 1) {
                          return (
                            <div className="col-md-12">
                              <div>
                                <div className="main-testi-flex ">
                                  <div className>
                                    <img
                                      src={
                                        item.featured_image
                                          ? item.featured_image
                                          : "/assets/images/default.jpg"
                                      }
                                      className="testimonial-pic"
                                    />
                                  </div>
                                  <div className="testimonial-content">
                                    <h3>{item.name}</h3>
                                    <p>{item.testimonial}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        }
                      })}
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div>
                        <h3> Testimonial Form</h3>
                        <div>
                          <Formik
                            initialValues={{
                              name: "",
                              testimonial: "",
                            }}
                            validationSchema={Yup.object({
                              name: Yup.string().required("Required"),
                              testimonial: Yup.string().required("Required"),
                            })}
                            onSubmit={async (
                              values,
                              { setSubmitting, resetForm }
                            ) => {
                              setSubmitting(true);
                              if (featured_image) {
                                const images = await upload(
                                  featured_image,
                                  null
                                );
                                if (images) {
                                  if (images.featured_image) {
                                    values.featured_image =
                                      images.featured_image;
                                  }
                                }
                              }
                              values.approved = 0;
                              await addTestimonial(values);
                              resetForm();
                              setSubmitting(false);
                            }}
                          >
                            {(formik) => {
                              console.log(formik);
                              return (
                                <Form>
                                  <div className="col-md-6">
                                    <TextInput
                                      label="Name"
                                      name="name"
                                      type="text"
                                      placeholder="Enter Name"
                                    />
                                  </div>
                                  <div className="col-md-6">
                                    <TextInput
                                      label="Testimonial"
                                      name="testimonial"
                                      type="text"
                                      placeholder="Enter Testimonial"
                                    />
                                  </div>
                                  <div className="col-md-6">
                                    <label> Profile pic </label>
                                    <input
                                      type="file"
                                      onChange={(e) =>
                                        setFeatured_image(e.target.files[0])
                                      }
                                    />
                                  </div>
                                  <div className="m-2">
                                    <button
                                      type="submit"
                                      className="btn btn-success"
                                    >
                                      {" "}
                                      {formik.isSubmitting
                                        ? "Processing..."
                                        : "Submit"}{" "}
                                    </button>
                                  </div>
                                </Form>
                              );
                            }}
                          </Formik>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <Sidebar />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div>
          <Spinner />
        </div>
      )}
      <section className="ptb-50">
        <Pagination
          data={testimonials}
          page={page}
          prevBtnClicked={prevBtnClicked}
          nextButtonClicked={nextButtonClicked}
          loading={loading}
        />
      </section>
      <Footer />
    </div>
  );
}
const mapStateToProps = (state) => ({ testimonial: state.testimonial });

const mapDispatchToProps = {
  getTestimonials,
  getNextTestimonials,
  getPreviousTestimonials,
  addTestimonial,
};

export default connect(mapStateToProps, mapDispatchToProps)(Testimonials);
