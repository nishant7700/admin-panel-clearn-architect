import React from "react";
import Header from "../../components/template/Header";
import Footer from "../../components/template/Footer";
import BreadCrumb from "../../components/template/BreadCrumb";
function Privacy() {
  return (
    <div>
      <Header active="HOME" />
      <BreadCrumb title={"Privacy Policy"} />
      <section className="ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div>
                <p>
                  This privacy policy sets out how “National Organisation for
                  Social Empowerment” uses and protects any information that you
                  give “National Organisation for Social Empowerment” when you
                  use this website.
                </p>
                <p>
                  “National Organisation for Social Empowerment” is committed to
                  ensuring that your privacy is protected. Should we ask you to
                  provide certain information by which you can be identified
                  when using this website, and then you can be assured that it
                  will only be used in accordance with this privacy statement.
                </p>
                <p>
                  “National Organisation for Social Empowerment” may change this
                  policy from time to time by updating this page. You should
                  check this page from time to time to ensure that you are happy
                  with any changes. This policy is effective from 10th Dec
                  2013..
                </p>
                <h3 style={{ padding: "10px 0px" }}>What we collect</h3>
                <p>We may collect the following information:</p>
                <p>• Name and job title</p>
                <p>• Contact information including email address</p>
                <p>
                  • Demographic information such as postcode, preferences and
                  interests
                </p>
                <p>
                  • Other information relevant to customer surveys and/or offers
                </p>
                <p>What we do with the information we gather</p>
                <p>
                  We require this information to send updates you about our
                  organization projects and programme time to time and in
                  particular for the following reasons:
                </p>
                <p>• Internal record keeping</p>
                <p>• We may use the information to improve our work</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Privacy;
