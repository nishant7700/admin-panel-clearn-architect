import React from "react";
import { Link } from "react-router-dom";

function GalleryCard({ item }) {
  return (
    <div className="inner-box">
      <Link to={`/events/${item.slug}`}>
        <img
          src={
            item.gallery && item.gallery.length > 0
              ? item.gallery[0]
              : "/assets/images/default.jpg"
          }
          className="profile"
        />
      </Link>

      <div className="box-content">
        <div className="project-heading">
          <Link to={`/events/${item.slug}`}>
            {" "}
            <h3>{item.title}</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GalleryCard;
