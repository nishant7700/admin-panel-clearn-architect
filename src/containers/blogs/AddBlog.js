import React, { useState } from "react";
import { connect } from "react-redux";
import BreadCrumb from "../../components/template/BreadCrumb";
import Header from "../../components/template/Header";
import { useHistory } from "react-router-dom";
import { addBlog } from "../../store/actions/blogs_action";
import AddForm from "../../components/common/AddForm";
import { upload } from "../../shared/upload";
import { initialValues, inputFields } from "../../shared/enums/blogs_enum";
const AddBlog = ({ addBlog }) => {
  let history = useHistory();
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
    await addBlog(values);
    history.push("/blogs");
  };

  return (
    <div className="pace-done">
      <div>
        <Header />
        <BreadCrumb
          title="Add Blog"
          mainLinkTitle="Blogs"
          mainLinkUrl="/blogs"
          activeLink="Add"
        />
      </div>
      <div className="container-fluid">
        <div className="col-lg-9">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Blog</h4>
              <p className="card-title-desc">Enter Details to add Blog</p>
            </div>
            <AddForm
              edit={false}
              featuredImage={featuredImage}
              gallery={gallery}
              setFeaturedImage={setFeaturedImage}
              setGallery={setGallery}
              submitForm={submitBlog}
              inputFields={inputFields}
              initialValues={initialValues}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ alert: state.alert });

const mapDispatchToProps = { addBlog };

export default connect(mapStateToProps, mapDispatchToProps)(AddBlog);
