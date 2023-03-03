import React from "react";
import "./founders.css";
function Founders() {
  return (
    <section className="founders text-center">
      <div className="container pb-5">
        <h3>
          Over 2,000 Founders and Marketers get Better Results with Funnelll{" "}
        </h3>
        <div className="brands row pt-lg-1 mt-3 align-items-center">
          <div className="col-lg-3">
            <img
              src={"/funnel/assets/images/500Startupslogo.png"}
              alt="500 startups logo"
              style={{ maxHeight: 55 }}
            ></img>
          </div>

          <div className="col-lg-3 mt-3">
            <img
              src={"/funnel/assets/images/saasmantra.png"}
              alt="saas mantra logo"
              style={{ maxHeight: 55 }}
            ></img>
          </div>

          <div className="col-lg-3 mt-3">
            <img
              src={"/funnel/assets/images/gameball.png"}
              alt="gameball logo"
              style={{ maxHeight: 55 }}
            ></img>
          </div>

          <div className="col-lg-3 mt-3">
            <img
              src={"/funnel/assets/images/vivelo.png"}
              alt="vivelo logo"
              style={{ maxHeight: 55 }}
            ></img>
          </div>
        </div>

        <div className="brands row mt-2 pt-lg-1 mt-3 align-items-center">
          <div className="col-lg-3">
            <img
              src={"/funnel/assets/images/funding.png"}
              alt="funding logo"
              style={{ maxHeight: 55 }}
            ></img>
          </div>

          <div className="col-lg-3 mt-3">
            <img
              src={"/funnel/assets/images/daveparker.png"}
              alt="dave parker logo"
              style={{ maxHeight: 55 }}
            ></img>
          </div>

          <div className="col-lg-3 mt-3">
            <img
              src={"/funnel/assets/images/frozenlemon.png"}
              alt="frozen lemon logo"
              style={{ maxHeight: 55 }}
            ></img>
          </div>

          <div className="col-lg-3 mt-3">
            <img
              src={"/funnel/assets/images/fundraisingforacause.png"}
              alt="fund raising foracause logo"
              style={{ maxHeight: 55 }}
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Founders;
