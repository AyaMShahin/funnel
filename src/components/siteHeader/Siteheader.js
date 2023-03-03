import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./Siteheader.css";
import "../navbar/Sitenavbar.css";
function Siteheader() {
  return (
    <header className="mt-5 pt5">
      <Container>
        <div className="row justify-content-center text-center">
          <div className="col-lg-10 col-md-12 col-sm-12">
            <div className="texts text-center">
              <h1 className="head-text">
                Powerful Analytics,
                <br />
                <span>Made Easy</span>
              </h1>
              <p className="f-small mt-3">
                Get the most out of your marketing budget. No coding or complex
                dashboards needed!
              </p>
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

        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            <div className="wrapper position-relative">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/dEdbZ43R_p8?rel=0"
                title="Funnelll Intro"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen=""
                className="position-absolute"
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Siteheader;
