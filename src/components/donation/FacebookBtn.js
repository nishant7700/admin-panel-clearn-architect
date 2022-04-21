import React from "react";

function FacebookBtn({ url }) {
  const openFacebookURL = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        `https://www.nationalngo.org/${url}`
      )}`,
      "facebook-share-dialog",
      "width=626,height=436"
    );
  };
  return (
    <button className="btn btn-view-details" onClick={() => openFacebookURL()}>
      <i className="fa fa-facebook" />
    </button>
  );
}

export default FacebookBtn;
