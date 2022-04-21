import React from "react";
import { connect } from "react-redux";
import Header from "../../components/template/Header";
import Footer from "../../components/template/Footer";
import BreadCrumb from "../../components/template/BreadCrumb";
import { Link } from "react-router-dom";
const BankDetails = (props) => {
  return (
    <div>
      <Header active="ABOUT" />
      <BreadCrumb title={"BANK DETAILS"} />

      <section className="about-2 ptb-50">
        <div className="container">
          <div className="row">
            <div className="col-md-12 about-content">
              <div
                style={{
                  background: "rgb(255, 255, 255)",
                  padding: 20,
                  marginTop: 10,

                  color: "rgb(51, 51, 51)",
                }}
              >
                <p>
                  Our Bank details to make donation from net-banking / Internet
                  Banking.
                </p>
                <h4 className="text-center" style={{ padding: 10 }}>
                  {" "}
                  State Bank of India{" "}
                </h4>
                <p>
                  <strong> Beneficiary/Name : </strong> National Organisation
                  for Social Empowerment
                </p>
                <p>
                  <strong> Type of Account : </strong> Current
                </p>
                <p>
                  <strong> Account Number : </strong> 32344893165
                </p>
                <p>
                  <strong> Branch : </strong> Sagar Tower, District Centre,
                  Janakpuri, New Delhi- 110058
                </p>
                <p>
                  <strong> Branch Code : </strong> 001706
                </p>
                <p>
                  <strong> IFSC Code : </strong> SBIN0001706
                </p>
                <p>
                  <strong> MICR Code : </strong> 110002054
                </p>
                <h4 className="text-center" style={{ padding: 10 }}>
                  ICICI Bank
                </h4>
                <p>
                  <strong> Beneficiary/Name : </strong> National Organisation
                  for Social Empowerment
                </p>
                <p>
                  <strong> Type of Account : </strong> Current
                </p>
                <p>
                  <strong> Account Number : </strong> 032205001782
                </p>
                <p>
                  <strong> Branch : </strong> SAFDARJUNG ENCLAVE, NEW DELHI
                  110029
                </p>
                <p>
                  <strong> Branch Code : </strong> 000322
                </p>
                <p>
                  <strong> IFSC Code : </strong> ICIC0000322
                </p>
                <p>
                  <strong> MICR Code : </strong> 110229044
                </p>
              </div>
              <div>
                <h4> Offline Donation Method </h4>
                <p>
                  {" "}
                  You can send in an email, call up or write to National
                  Organisation for Social Empowerment if you are interested in
                  donating to us. The help you give will help in bringing about
                  a permanent, effective and a positive change in the lives of
                  the needy and the poor children in India. With your help we
                  will be able to address the root cause behind violation of
                  child’s rights. Besides this, you can help us in making the
                  state accountable to the needs of the poor children and their
                  right to education, medication, relief, food etc.
                </p>
                <p>
                  All that you will need to share is your contact details and
                  your interest in being a volunteer with National Organisation
                  for Social Empowerment. If need be you can even attend the
                  regular meetings held by National Organisation for Social
                  Empowerment. Here you can get an idea on the activities
                  carried out and the kind of effective participation you can
                  provide. You can even educate or teach the needy children in
                  your spare time.
                </p>
                <p>
                  Starting with the financially backward children in your own
                  area will also do. By donating to National Organisation for
                  Social Empowerment you can reach out to the poor Indian
                  children and influence their lives positively. The money you
                  donate will be used in providing them food, clothing,
                  education, medication and relief in different areas. With your
                  help, a lot of difference will be made to get the entire
                  system, working. If you are looking towards touching the lives
                  of so many needy children in India then donate to us and help
                  us accomplish this endeavour as successfully as possible.
                </p>
                <h4 style={{ paddingTop: 10 }}>
                  {" "}
                  Offline Donation by Cheque/DD/Pay Order in Favor of “National
                  Organisation for Social Empowerment”, Payable at New Delhi.
                </h4>
                <p> National Organisation for Social Empowerment</p>
                <p>TA – 204, 1st Floor, Ravidas Marg, Tughlakabad Extension,</p>
                <p> New Delhi- 110019</p>
                <h4 style={{ paddingTop: 10 }}>
                  {" "}
                  All Donations are exempted Under Section 80 G(5)(vi) of Income
                  Tax Act 1961.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BankDetails);
