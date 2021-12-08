import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import BreadCrumb from "../../components/template/BreadCrumb";
import Header from "../../components/template/Header";
import { getBlog, editBlog } from "../../store/actions/blogs_action";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Spinner from "../../components/layout/Spinner";
import AddForm from "../../components/common/AddForm";
import { upload } from "../../shared/upload";
import { initialValues, inputFields } from "../../shared/enums/blogs_enum";

const EditBlog = ({ editBlog, getBlog, match, blog: { loading, blog } }) => {
  let history = useHistory();
  useEffect(() => {
    getBlog(match.params.id);
  }, [match]);
  const [featuredImage, setFeaturedImage] = useState(null);
  const [gallery, setGallery] = useState(null);
  const submitBlog = async (values) => {
    if (featuredImage || gallery) {
      const images = await upload(featuredImage, gallery);
      if (images) {
        if (images.featured_image) {
          values.featured_image = images.featured_image;
        }
        if (images.gallery_images) {
          values.gallery = images.gallery_images;
        }
      }
    }
    await editBlog(blog.id, values);
    history.push(`/blogs/${blog.id}/view`);
  };

  return (
    <div className="pace-done">
      <div>
        <Header />
        <BreadCrumb
          title="Edit Blog"
          mainLinkTitle="Blogs"
          mainLinkUrl="/blogs"
          activeLink="Edit"
        />
      </div>
      <div className="container-fluid">
        <div className="col-lg-12">
          <div className="card">
            {!loading ? (
              blog && (
                <div>
                  <div className="card-header">
                    <div>
                      <h4 className="card-title">
                        {blog.title} - <span>Edit</span>{" "}
                      </h4>
                      <p className="card-title-desc">
                        <Link to="/blogs" className="btn btn-soft-light">
                          <i className="fa fa-angle-left"></i> Blogs
                        </Link>
                        <Link
                          to={`/blogs/${blog.id}/view`}
                          className="btn btn-soft-light"
                        >
                          <i className="fa fa-eye"></i>
                        </Link>
                      </p>
                    </div>
                  </div>
                  <AddForm
                    data={blog}
                    edit={true}
                    featuredImage={featuredImage}
                    gallery={gallery}
                    setFeaturedImage={setFeaturedImage}
                    setGallery={setGallery}
                    submitForm={submitBlog}
                    inputFields={inputFields}
                    initialValues={initialValues}
                  />
                </div>
              )
            ) : (
              <div className="text-center">
                <Spinner />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  alert: state.alert,
  blog: state.blog,
});

const mapDispatchToProps = { editBlog, getBlog };

export default connect(mapStateToProps, mapDispatchToProps)(EditBlog);
