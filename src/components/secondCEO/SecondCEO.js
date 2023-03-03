import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

const SecondCEO = () => {
  return (
    <section className="ceo mt-5 mb-5 pb-5">
      <Container>
        <div className="main-content row align-items-center text-center">
          <div className="col-lg-10 ceo-desc m-auto">
            <img
              src={"/funnel/assets/images/jordan.png"}
              alt="funnel ceo"
            ></img>

            <div className="texts mt-3">
              <h3 className=" f-small">
                Jordan B, CEO @
                <a
                  className="text-green ml-1"
                  href="https://www.leadsie.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Burstware
                </a>
              </h3>

              <h2 className="my-3 px-4">
                Funnelll makes it dead simple to setup and track your marketing
                funnel, I have not seen anything like it. I didn't have to dig
                through klunky interfaces and keep track of multiple tags on my
                website
              </h2>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SecondCEO;
