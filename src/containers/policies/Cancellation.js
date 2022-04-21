import React from "react";
import Header from "../../components/template/Header";
import Footer from "../../components/template/Footer";
import BreadCrumb from "../../components/template/BreadCrumb";
function Cancellation() {
  return (
    <div>
      <Header active="HOME" />
      <BreadCrumb title={"Cancellation & Refund Policy"} />
      <section className="ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>
                {" "}
                “National Organisation for Social Empowerment” believes in
                helping its DONOR’S as far as possible, and has therefore a
                liberal cancellation policy. Under this policy:
              </p>
              <p>
                • Cancellations will be considered only if the request is made
                within 72 hours of DONATION. However, the cancellation request
                will not be entertained after 72 hrs of donation.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Cancellation;
