import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
const CustomerData = () => {
  return (
    <section className="cust-data mt-5 mb-5 pt-3">
      <Container className="text-center mt-5">
        <div className="head px-lg-5 col-lg-10 m-auto">
          <h4 className="text-green" style={{ fontSize: "1.2rem" }}>
            UNLOCK CUSTOMERS' DATA{" "}
          </h4>
          <h2 className="my-4">Conversion Tracking Made Simple </h2>
          <p className="px-lg-5 mt-4">
            Track meaningful actions customers take on your website as they
            progress through their buying journey. Distribute high-quality data
            throughout your marketing stack
          </p>
        </div>

        <div className="main-content row align-items-center mt-5">
          <div className="col-lg-5 text-left">
            <h3 className="text-green understand mt-5">NO-CODE TRACKING </h3>
            <h2>
              Automatically Track Page Views, Clicks, and Scrolls or Set Up Your
              Custom Tracking Visually
            </h2>
            <p className="my-4">
              Add the Funnelll code to your website to automatically track page
              views, clicks, and scrolls
            </p>
            <ul className="mt-4">
              <li className="mb-1">Works Cross-domains </li>
              <li className="mb-1">Single Page Application ready</li>
              <li>Automatically syncs data with Google Analytics</li>
            </ul>
          </div>
          <div className="col-lg-7">
            <img
              className="mt-5 mt-lg-0"
              src={"/funnel/assets/images/track-actions.png"}
              alt="Get Insights"
            ></img>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CustomerData;
