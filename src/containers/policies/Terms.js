import React from "react";
import Header from "../../components/template/Header";
import Footer from "../../components/template/Footer";
import BreadCrumb from "../../components/template/BreadCrumb";
function Terms() {
  return (
    <div>
      <Header active="HOME" />
      <BreadCrumb title={"Terms & Conditions"} />
      <section className="ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div>
                <p>
                  Welcome to our website. If you continue to browse and use this
                  website you are agreeing to comply with and be bound by the
                  following terms and conditions of use, which together with our
                  privacy policy govern “National Organisation for Social
                  Empowerment” relationship with you in relation to this
                  website.
                </p>
                <p>
                  The term “National Organisation for Social Empowerment” refers
                  to the owner of the website whose registered office is TA-204,
                  1st Floor, Ravidas Marg, Tughlakabad Extension, New Delhi-
                  110019
                </p>
                <p>
                  Our registration number is 1895 year 2012. The term ‘you’
                  refers to the user or viewer of our website.
                </p>
                <p>
                  The use of this website is subject to the following terms of
                  use:
                </p>
                <p>
                  •The content of the pages of this website is for your general
                  information and use only. It is subject to change without
                  notice.
                </p>
                <p>
                  •Neither we nor any third parties provide any warranty or
                  guarantee as to the accuracy, timeliness, performance,
                  completeness or suitability of the information and materials
                  found or offered on this website for any particular purpose.
                  You acknowledge that such information and materials may
                  contain inaccuracies or errors and we expressly exclude
                  liability for any such inaccuracies or errors to the fullest
                  extent permitted by law.
                </p>
                <p>
                  •Your use of any information or materials on this website is
                  entirely at your own risk, for which we shall not be liable.
                  It shall be your own responsibility to ensure that any
                  products, services or information available through this
                  Website meets your specific requirements.
                </p>
                <p>
                  •This website contains material which is owned by or licensed
                  to us. This material includes, but is not limited to, the
                  design, layout, look, appearance and graphics. Reproduction is
                  prohibited other than in accordance with the copyright notice,
                  which forms part of these terms and conditions.
                </p>
                <p>
                  •All trade marks reproduced in this website which are not the
                  property of, or licensed to, the operator are acknowledged on
                  the website.
                </p>
                <p>
                  • Unauthorized use of this website may give rise to a claim
                  for damages and/or be a criminal offence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Terms;
