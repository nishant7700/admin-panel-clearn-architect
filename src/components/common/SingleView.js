import React, { useState } from "react";
import renderHTML from "react-render-html";
import SingleItem from "../template/SingleItem";
import { Link } from "react-router-dom";
function SingleView({ data, inputFields, label, link, id }) {
  const [fields, setFields] = useState(Object.keys(inputFields));
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-header">
              <div>
                <h4 className="card-title">
                  {data[fields[0]]} <span>View</span>
                </h4>
                <p className="card-title-desc">
                  <Link to={`/${link}`} className="btn btn-soft-light">
                    <i className="fa fa-angle-left"></i> {label}
                  </Link>
                  <Link
                    to={`/${link}/${id}/edit`}
                    className="btn btn-soft-light"
                  >
                    <i className="fa fa-edit"></i>
                  </Link>
                </p>
              </div>
            </div>
            <div className="card-body">
              {inputFields &&
                Object.keys(inputFields) &&
                Object.keys(inputFields).map((item, index) => {
                  if (
                    inputFields[item] &&
                    inputFields[item].type === "string"
                  ) {
                    return (
                      <SingleItem
                        title={inputFields[item].title}
                        value={data[item]}
                      />
                    );
                  }
                })}
              {inputFields &&
                Object.keys(inputFields) &&
                Object.keys(inputFields).map((item, index) => {
                  if (inputFields[item] && inputFields[item].type === "text") {
                    return (
                      <SingleItem
                        title={inputFields[item].title}
                        value={data[item]}
                      />
                    );
                  }
                })}
              {inputFields &&
                Object.keys(inputFields) &&
                Object.keys(inputFields).map((item, index) => {
                  if (inputFields[item] && inputFields[item].type === "slug") {
                    return (
                      <SingleItem
                        title={inputFields[item].title}
                        value={data[item]}
                      />
                    );
                  }
                })}
              {inputFields &&
                Object.keys(inputFields) &&
                Object.keys(inputFields).map((item, index) => {
                  if (inputFields[item] && inputFields[item].type === "html") {
                    return (
                      <SingleItem
                        title={inputFields[item].title}
                        value={data[item] && renderHTML(data[item])}
                      />
                    );
                  }
                })}
              {inputFields &&
                Object.keys(inputFields) &&
                Object.keys(inputFields).map((item, index) => {
                  if (inputFields[item] && inputFields[item].type === "file") {
                    return (
                      <SingleItem title={inputFields[item].title}>
                        <img
                          src={`${data[item]}`}
                          style={{
                            width: "100%",
                            height: "200px",
                            objectFit: "contain",
                          }}
                        />
                      </SingleItem>
                    );
                  }
                })}
              {inputFields &&
                Object.keys(inputFields) &&
                Object.keys(inputFields).map((item, index) => {
                  if (
                    inputFields[item] &&
                    inputFields[item].type === "gallery"
                  ) {
                    return (
                      <SingleItem title={inputFields[item].title}>
                        {data[item].map((pic) => {
                          return (
                            <img
                              src={pic}
                              style={{
                                width: "100%",
                                height: "100px",
                                objectFit: "contain",
                              }}
                            />
                          );
                        })}
                      </SingleItem>
                    );
                  }
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleView;
