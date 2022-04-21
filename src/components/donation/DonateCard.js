import React from "react";
import { useState } from "react";
import { connect } from "react-redux";

const DonateCard = (props) => {
  const [amount, setAmount] = useState(1000);
  const donateNow = () => {};
  return (
    <div className="sidebar">
      <h3>Donate</h3>
      <div className="feed">
        <button
          onClick={() => setAmount(1000)}
          className={
            amount == 1000 ? "donate-button active-button" : "donate-button "
          }
        >
          ₹1000
        </button>
        <button
          onClick={() => setAmount(2000)}
          className={
            amount == 2000 ? "donate-button active-button" : "donate-button "
          }
        >
          ₹2000
        </button>
        <button
          onClick={() => setAmount(5000)}
          className={
            amount == 5000 ? "donate-button active-button" : "donate-button "
          }
        >
          ₹5000
        </button>
        <button
          onClick={() => setAmount(10000)}
          className={
            amount == 10000 ? "donate-button active-button" : "donate-button "
          }
        >
          ₹10000
        </button>
      </div>

      <div className="">
        <label> Choose Custom Amount </label>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Custom Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </div>
      <div className="donate-bu">
        <button className="btn btn-givenow" onClick={() => donateNow()}>
          <i className="fa fa-gift" /> Donate Now
        </button>
      </div>
      <p> You are donating ₹{amount} </p>

      <div className="support-flex">
        <div className>
          <img src="/assets/images/tax.png" />
        </div>
        <div className>
          <h2>All donations are tax-exempt under 80G</h2>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DonateCard);
