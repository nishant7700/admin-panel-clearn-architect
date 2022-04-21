import React from "react";
import { Link } from "react-router-dom";

function StoryCard({ item }) {
  return (
    <div>
      <div className="inner-box">
        <Link to={`/success-stories/${item.slug}`}>
          <img
            src={item.image ? item.image : "/assets/images/default.jpg"}
            className="profile"
          />
        </Link>
        <div className="box-content">
          <div className="project-heading">
            <Link to={`/success-stories/${item.slug}`}>
              {" "}
              <h3>{item.name}</h3>{" "}
            </Link>
          </div>
          <Link to={`/success-stories/${item.slug}`}>
            <p className="medical-documents">Medical Documents </p>
          </Link>

          <Link to={`/success-stories/${item.slug}`}>
            <p className="disease">
              <strong>
                <i className="fa fa-ambulance"> </i> {item.disease}
              </strong>
            </p>
          </Link>

          {item.money_spent && (
            <div className="box-content-flex">
              <div className>
                <h5>Money Spent</h5>
              </div>
              <div className>
                <h5>₹{item.money_spent}</h5>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default StoryCard;
