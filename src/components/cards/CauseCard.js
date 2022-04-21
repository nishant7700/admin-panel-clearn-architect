import React from "react";
import { Link } from "react-router-dom";
import renderHTML from "react-render-html";
import WhatsappBtn from "../donation/WhatsappBtn";
import FacebookBtn from "../donation/FacebookBtn";
function CauseCard({ item, hideContent }) {
  return (
    <div>
      <div className="inner-box">
        <Link to={`/causes/${item.slug}`}>
          <img
            src={
              item.featured_image
                ? item.featured_image
                : "/assets/images/default.jpg"
            }
            className="profile"
          />
        </Link>
        <div className="box-content">
          <div className="project-heading">
            <Link to={`/causes/${item.slug}`}>
              {" "}
              <h3>{item.name}</h3>
            </Link>
          </div>
          <Link to={`/causes/${item.slug}`}>
            <p className="medical-documents"> Medical Documents </p>
          </Link>

          <p className="disease">
            <strong>
              <i className="fa fa-ambulance"> </i> {item.disease}
            </strong>
          </p>
          {!hideContent && (
            <>
              <div className="story">
                {item.content && renderHTML(item.content)}
              </div>
            </>
          )}
        </div>
        {!hideContent && (
          <div className="btn-flex">
            <div className>
              <Link
                to={`/causes/${item.slug}`}
                className="btn btn-donate-project"
              >
                <i className="fa fa-heart" /> DONATE NOW
              </Link>
            </div>
            <div className>
              <FacebookBtn url={`/causes/${item.slug}`} />
              <WhatsappBtn url={`/causes/${item.slug}`} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CauseCard;
