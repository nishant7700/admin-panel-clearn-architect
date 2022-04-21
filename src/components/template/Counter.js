import React from "react";

function Counter() {
  return (
    <section className="counter ptb-50">
      <div className="counter-banner">
        <div className="counter-banner-over" />
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="content text-center">
                <div className="counter-img">
                  <img src="assets/images/success.png" />
                </div>
                <div className="counter-title">
                  <h3>SUCCESS PROJECTS</h3>
                </div>
                <div className="counters">
                  <h3>40</h3>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="content text-center">
                <div className="counter-img">
                  <img src="assets/images/member.png" />
                </div>
                <div className="counter-title">
                  <h3>MEMBERS WE HAVE</h3>
                </div>
                <div className="counters">
                  <h3>40</h3>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="content text-center">
                <div className="counter-img">
                  <img src="assets/images/implanted.png" />
                </div>
                <div className="counter-title">
                  <h3>PROJECTS IMPLATED</h3>
                </div>
                <div className="counters">
                  <h3>40</h3>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="content text-center">
                <div className="counter-img">
                  <img src="assets/images/total.png" />
                </div>
                <div className="counter-title">
                  <h3>TOTAL VOLUNTEERS</h3>
                </div>
                <div className="counters">
                  <h3>40</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counter;
