import React from "react";
import { Container } from "react-bootstrap";
import "./features.css";
const Features = () => {
  return (
    <section className="features">
      <Container>
        <div className="row justify-content-center text-center">
          <div className="col-lg-10 col-md-12 col-sm-12">
            <div className="texts text-center">
              <h1 className="head-text">
                Say Goodbye to wasted marketing budgets
              </h1>
              <div className=" row justify-content-center feature m-auto">
                <div className="col-lg-3 my-4">
                  <img
                    className="circle-icon"
                    src={"/funnel/assets/images/checked--acid.svg"}
                    alt="circle icon"
                  ></img>
                  <span> Measure what matters</span>
                </div>

                <div className="col-lg-3 my-4">
                  <img
                    className="circle-icon"
                    src={"/funnel/assets/images/checked--acid.svg"}
                    alt="circle icon"
                  ></img>
                  <span> Visualize customer journeys</span>
                </div>

                <div className="col-lg-3 my-4">
                  <img
                    className="circle-icon"
                    src={"/funnel/assets/images/checked--acid.svg"}
                    alt="circle icon"
                  ></img>
                  <span> Answer your questions</span>
                </div>
              </div>
            </div>
            <div className="btns mt-4 text-center">
              <a
                href="./signup-start-tracking-conversions.html"
                className="btn btn-main"
              >
                Get Started Free
              </a>

              <a
                href="https://calendly.com/funnelll/demo"
                className="btn demo ml-3"
                target={"_blank"}
                rel="noreferrer"
              >
                Get Demo
              </a>
            </div>
            <div className="trial mt-3">
              <p>14 day free trial. No credit card needed </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;
