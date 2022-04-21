import React from "react";

function WhatsappBtn({ url }) {
  return (
    <a
      href={`https://api.whatsapp.com/send?text=https://www.nationalngo.org/${url}`}
      target={"_blank"}
      className="btn btn-wa-details"
    >
      <i className="fa fa-whatsapp" />
    </a>
  );
}

export default WhatsappBtn;
