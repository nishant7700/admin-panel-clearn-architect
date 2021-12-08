import React, { useEffect } from "react";
import { connect } from "react-redux";
import BreadCrumb from "../../components/template/BreadCrumb";
import Header from "../../components/template/Header";
import renderHTML from "react-render-html";
import { getBlog } from "../../store/actions/blogs_action";
import Spinner from "../../components/layout/Spinner";
import SingleItem from "../../components/template/SingleItem";
import { Link } from "react-router-dom";
const ViewBlog = ({ getBlog, match, blog: { loading, blog } }) => {
  useEffect(() => {
    getBlog(match.params.id);
  }, [match]);
  return (
    <div className="pace-done">
      <div>
        <Header />
        <BreadCrumb
          title="Blogs"
          mainLinkTitle="Blogs"
          mainLinkUrl="/blogs"
          activeLink="View"
        />
        {!loading ? (
          blog && (
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card">
                    <div className="card-header">
                      <div>
                        <h4 className="card-title">
                          {blog.name} <span>View</span>
                        </h4>
                        <p className="card-title-desc">
                          <Link to="/blogs" className="btn btn-soft-light">
                            <i className="fa fa-angle-left"></i> Blogs
                          </Link>
                          <Link
                            to={`/blogs/${blog.id}/edit`}
                            className="btn btn-soft-light"
                          >
                            <i className="fa fa-edit"></i>
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="card-body">
                      <SingleItem title="title" value={blog.title} />
                      <SingleItem title="meta title" value={blog.meta_title} />
                      <SingleItem
                        title="meta description"
                        value={blog.meta_description}
                      />
                      {blog.featured_image && (
                        <SingleItem title="Featured Image">
                          <img
                            src={`${blog.featured_image}`}
                            style={{
                              width: "100%",
                              height: "200px",
                              objectFit: "contain",
                            }}
                          />
                        </SingleItem>
                      )}
                      {blog.gallery && (
                        <SingleItem title="Gallery">
                          {blog.gallery.map((pic) => {
                            return (
                              <img
                                src={`${pic}`}
                                style={{
                                  width: "100%",
                                  height: "100px",
                                  objectFit: "contain",
                                }}
                              />
                            );
                          })}
                        </SingleItem>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-header"> Content </div>
                    <div className="card-body">
                      <div className="card-content">
                        {blog.content && renderHTML(blog.content)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        ) : (
          <div>
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ blog: state.blog });

const mapDispatchToProps = { getBlog };

export default connect(mapStateToProps, mapDispatchToProps)(ViewBlog);
