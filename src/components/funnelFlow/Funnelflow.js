import React from "react";
import "./flow.css";
import "../dashboards/dashboards.css";
const Funnelflow = () => {
  return (
    <section className="mt-5 mb-5">
      <div className="container text-center">
        <div className="main-content row align-items-center">
          <div className="col-lg-7">
            <img
              className="mt-2"
              src={"/assets/images/funnel.png"}
              alt="Channel Performance"
            ></img>
          </div>

          <div className="col-lg-5 text-left pl-lg-5">
            <h3 className="text-green understand mt-5">BRING DATA TOGETHER</h3>
            <h2>Visualize Your Customers' Journeys on Your Website</h2>
            <p className="my-4">
              Analyze users across a series of actions. See how many people
              start or finish a sequence — and where they drop off. Get access
              to data about:
            </p>

            <ul className="mt-4">
              <li className="mb-1">Device Performance across stages </li>
              <li className="mb-1">Page performance by stage</li>
              <li>Marketing Performance by stage</li>
            </ul>
            <span className="f-small">And More...</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Funnelflow;
