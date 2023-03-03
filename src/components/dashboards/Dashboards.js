import React from "react";
import "./dashboards.css";
const Dashboards = () => {
  return (
    <section className="dashboards mt-5 mb-5">
      <div className="container text-center">
        <div className="head px-lg-5 col-lg-10 m-auto">
          <h4 className="text-green">INSIGHTS AND DASHBOARDS </h4>
          <h2 className="my-4">Get The Insights Your Business Needs </h2>
          <p className="px-lg-5 mt-4">
            Funnelll brings your data together, removes inconsistencies, and
            gives you the tools to maximize the ROI on your marketing budget
          </p>
        </div>

        <div className="main-content row align-items-center">
          <div className="col-lg-5 text-left mt-5">
            <h3 className="text-green understand mt-5">UNDERSTAND</h3>
            <h2>Ask questions in plain English, get answers and insights</h2>
            <p className="my-4">
              Ask questions about your marketing performance in plain English
              with supporting data just a click away
            </p>

            <span>Funnelll answers questions about:</span>
            <ul className="mt-4">
              <li className="mb-1">Customer Journeys</li>
              <li className="mb-1">Channel and Campaign performance</li>
              <li>Location performance by Country and City</li>
            </ul>
          </div>
          <div className="col-lg-7">
            <img
              className="mt-5 mt-lg-0 px-lg-5"
              src={"/funnel/assets/images/answers.png"}
              alt="Get Insights"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboards;
