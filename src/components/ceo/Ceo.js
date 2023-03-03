import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./ceoStyles.css";
const Ceo = () => {
  return (
    <section className="ceo mt-5 mb-5 pb-5">
      <Container>
        <div className="main-content row align-items-center text-center">
          <div className="col-lg-10 ceo-desc m-auto">
            <img src={"/assets/images/Johannes.png"} alt="funnel ceo"></img>

            <div className="texts mt-3">
              <h3 className=" f-small">
                Johannes Radig, CEO @
                <a
                  className="text-green ml-1"
                  href="https://www.leadsie.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Leadsie
                </a>
              </h3>

              <h2 className="my-3 px-4">
                It is amazing how easy Funnelll makes it to answer questions
                about my campaigns' performance and how they drive customer
                actions on my website
              </h2>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Ceo;
