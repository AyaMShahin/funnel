import React from "react";
import { Container } from "react-bootstrap";

const Integrations = () => {
  return (
    <section className=" integrations mt-5 mb-5">
      <Container className="text-center">
        <div className="main-content row align-items-center">
          <div className="col-lg-7">
            <img
              className="mt-2"
              src={"/funnel/assets/images/integrations.png"}
              alt="Channel Performance"
            ></img>
          </div>

          <div className="col-lg-5 text-left pl-lg-5">
            <h3 className="text-green understand mt-5">DISTRIBUTE DATA </h3>
            <h2>
              3 Clicks to Distribute Your Customers' Data And Events Across Your
              Marketing Stack{" "}
            </h2>
            <p className="my-4">
              Set up once then copy your tracking across your marketing stack
              with 3 clicks. Send Events to:
            </p>

            <ul className="mt-4">
              <li className="mb-1">Facebook Pixel / Ads </li>
              <li className="mb-1">Google Ads</li>
              <li>Slack, Quora, Captera, and more ...</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Integrations;
