import React from "react";
import { Container } from "react-bootstrap";
import "../ceo/ceoStyles.css";
import "./reviews.css";

const Reviews = () => {
  return (
    <section className="reviews mb-5 mt-5">
      <Container>
        <div className="row justify-content-center">
          <div className="col-lg-4 text-center content mt-5">
            <div className="wrapper">
              <img src={"/funnel/assets/images/greg.png"} alt="greg"></img>

              <div className="texts mt-3">
                <h3 className=" f-small">
                  Greg B, CEO @
                  <a
                    className="text-green ml-1"
                    href="https://www.leadsie.com/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    SHUTTLEFARE
                  </a>
                  <span className="d-block mt-2">
                    Making conversion tracking simple
                  </span>
                </h3>

                <p className="my-3 p-review">
                  I like the ease of setting up conversion goals. The dashboard
                  and analytics look great
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mt-lg-2 mt-5 text-center content">
            <div className="wrapper">
              <img
                src={"/funnel/assets/images/square-ysl6hps.png"}
                alt="Philip"
              ></img>

              <div className="texts mt-3">
                <h3 className="f-normal">
                  Philip S, Founder
                  <span className="d-block mt-2">
                    Great way to collect everything
                  </span>
                </h3>

                <p className="my-3 p-review">
                  When you do run different marketing campaigns and you want to
                  create an overview of all your campaigns in one place, then
                  Funnelll is an awesome software
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 text-center content mt-5">
            <div className="wrapper">
              <img
                src={"/funnel/assets/images/carlos-ubaldo-profile-picture.png"}
                alt="carlos"
              ></img>

              <div className="texts mt-3">
                <h3 className="f-normal">
                  Carlos U, Founder @ Ablaze Digital
                  <span className="d-block mt-2">
                    Great Tracking Integration Platform
                  </span>
                </h3>

                <p className="my-3 p-review">
                  If you are into conversion tracking. This tool is going to
                  save you a lot of time
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Reviews;
