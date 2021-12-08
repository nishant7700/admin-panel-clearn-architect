import React, { useState, useEffect } from "react";
import { Form, Formik } from "formik";
import EditorWYSIWYG from "../EditorWYSIWYG";
import * as Yup from "yup";
import { TextArea, TextInput } from "../Form/Form";
import slugify from "react-slugify";
import { useHistory } from "react-router-dom";
function AddForm({
  data,
  edit,
  submitForm,
  setFeaturedImage,
  setGallery,
  inputFields,
  initialValues,
}) {
  let history = useHistory();

  const [requiredCheck, setRequiredCheck] = useState({});

  useEffect(() => {
    if (inputFields) {
      if (Object.keys(inputFields)) {
        const newRequiredCheck = {};
        Object.keys(inputFields).map((item, index) => {
          if (inputFields[item].required) {
            console.log(item);
            newRequiredCheck[item] = Yup.string().required("Required");
          }
        });

        setRequiredCheck(newRequiredCheck);
      }
    }
  }, []);
  console.log(requiredCheck);
  return (
    <div className="card-body">
      <div className="row">
        <Formik
          initialValues={data ? data : initialValues}
          validationSchema={Yup.object(requiredCheck)}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            await submitForm(values);
            setSubmitting(false);
            resetForm(true);
          }}
        >
          {(formik) => {
            console.log(formik);
            return (
              <Form autoComplete={"off"}>
                <div className="row">
                  {inputFields &&
                    Object.keys(inputFields) &&
                    Object.keys(inputFields).map((item, index) => {
                      if (
                        inputFields[item] &&
                        inputFields[item].type === "string"
                      ) {
                        return (
                          <div className="col-md-6" key={`input-${index}`}>
                            <TextInput
                              label={inputFields[item].title}
                              name={item}
                              type="text"
                              onChange={(e) => {
                                formik.setFieldValue(item, e.target.value);
                                if (inputFields[item].slug) {
                                  formik.setFieldValue(
                                    "slug",
                                    slugify(e.target.value)
                                  );
                                }
                              }}
                            />
                          </div>
                        );
                      }
                      if (
                        inputFields[item] &&
                        inputFields[item].type === "text"
                      ) {
                        return (
                          <div className="col-md-6">
                            <TextArea
                              label={inputFields[item].title}
                              name={item}
                            />
                          </div>
                        );
                      }
                      if (
                        inputFields[item] &&
                        inputFields[item].type === "html"
                      ) {
                        return (
                          <div className="col-md-12">
                            <label> {inputFields[item].title} </label>
                            <EditorWYSIWYG
                              value={formik.values.content}
                              name={item}
                              changeValue={(value) => {
                                formik.setFieldValue(`content`, value);
                              }}
                            />
                            {formik.errors && formik.errors[item] && (
                              <p className="text-danger"> Required </p>
                            )}
                          </div>
                        );
                      }
                      if (
                        inputFields[item] &&
                        inputFields[item].type === "file"
                      ) {
                        return (
                          <div className="col-md-6">
                            <label> {inputFields[item].title} </label>
                            <br />
                            <input
                              type="file"
                              className="form-control-file"
                              onChange={(e) =>
                                setFeaturedImage(e.target.files[0])
                              }
                            />
                          </div>
                        );
                      }
                      if (
                        inputFields[item] &&
                        inputFields[item].type === "gallery"
                      ) {
                        return (
                          <div className="col-md-6">
                            <label> {inputFields[item].title} </label>
                            <br />
                            <input
                              type="file"
                              multiple
                              className="form-control-file"
                              onChange={(e) => setGallery(e.target.files)}
                            />
                          </div>
                        );
                      }
                      if (
                        inputFields[item] &&
                        inputFields[item].type === "slug"
                      ) {
                        return (
                          <div className="col-md-6">
                            <TextInput
                              label={inputFields[item].title}
                              name={item}
                              type="text"
                              onChange={(e) => {
                                formik.setFieldValue(
                                  item,
                                  slugify(e.target.value)
                                );
                              }}
                            />
                          </div>
                        );
                      }
                    })}
                </div>

                <div className="row">
                  <div className="col-md-12 text-center m-3">
                    <button type="submit" className="btn btn-success">
                      {formik.isSubmitting
                        ? "Processing..."
                        : edit
                        ? "Edit"
                        : "Save"}
                    </button>
                    <a
                      className="btn btn-secondary m-3"
                      onClick={history.goBack}
                      href="#goback"
                    >
                      <i className="fa fa-angle-left"></i> Go Back
                    </a>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default AddForm;
