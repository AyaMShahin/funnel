import React from "react";
import { Container } from "react-bootstrap";
import "./footer.css";
const SiteFooter = () => {
  return (
    <footer className="pt-5 pb-5">
      <Container>
        <div className="row">
          <div className="col-lg-3 pe-4">
            <img src={"/assets/images/logo-icon.png"} alt="logo icon"></img>
            <img src={"/assets/images/logo-text.png"} alt="logo text"></img>

            <div className="texts mt-3">
              <p>
                We are on a mission to make digital marketing accessible for
                anyone bold enough to start
              </p>

              <p className="f-small">
                Funnelll is a proud <b>500 Global</b>, <b>Flat6Labs</b>, and
                <b>Pioneer</b> company
              </p>

              <p className="f-small"> &#169; Copyright Funnelll</p>
              <p className="f-small">Funnelll Inc. </p>
              <p className="f-small">
                251 Little Falls Drive, Wilmington, New Castle County, Delaware
                19808, US
              </p>
            </div>
          </div>
          <div className="col-lg-2">
            <h4 className="f-small">Apps & Integrations</h4>
            <ul className="mt-3 list">
              <li className="mb-3">
                <a
                  className="f-small text-green"
                  href="./integrations/google-analytics/"
                >
                  Google Analytics
                </a>
              </li>
              <li className="mb-3">
                <a
                  className="f-small text-green"
                  href="./integrations/facebook-pixel/"
                >
                  Facebook Pixel & Ads
                </a>
              </li>
              <li className="mb-3">
                <a
                  className="f-small text-green"
                  href="./integrations/google-ads/"
                >
                  Google Ads
                </a>
              </li>
              <li className="mb-3">
                <a
                  className="f-small text-green"
                  href="./integrations/organic-search/"
                >
                  Google Search Console
                </a>
              </li>
              <li className="mb-3">
                <a className="f-small text-green" href="./integrations/slack/">
                  Slack
                </a>
              </li>
              <li className="mb-3">
                <a className="f-small text-green" href="./integrations/quora/">
                  Quora Ads
                </a>
              </li>
              <li className="mb-3">
                <a
                  className="f-small text-green"
                  href="./integrations/capterra/"
                >
                  Capterra PPC
                </a>
              </li>
              <li>
                <a className="f-small text-green" href="./integrations/">
                  View All
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2">
            <h4 className="f-small">Platforms</h4>
            <ul className="mt-3 list">
              <li className="mb-3">
                <a className="f-small text-green" href="./platforms/shopify/">
                  Shopify
                </a>
              </li>
              <li className="mb-3">
                <a className="f-small text-green" href="./platforms/wordpress/">
                  WordPress
                </a>
              </li>
              <li className="mb-3">
                <a
                  className="f-small text-green"
                  href="./platforms/clickfunnels/"
                >
                  ClickFunnels
                </a>
              </li>
              <li className="mb-3">
                <a
                  className="f-small text-green"
                  href="./platforms/squarespace/"
                >
                  Squarespace
                </a>
              </li>
              <li className="mb-3">
                <a className="f-small text-green" href="./platforms/weblium/">
                  Weblium
                </a>
              </li>
              <li className="mb-3">
                <a className="f-small text-green" href="./platforms/weebly/">
                  Weebly
                </a>
              </li>
              <li className="mb-3">
                <a className="f-small text-green" href="./platforms/wix/">
                  Wix
                </a>
              </li>
              <li>
                <a
                  className="f-small text-green"
                  href="./platforms/woocommerce/"
                >
                  WooCommerce
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2">
            <h4 className="f-small">Company</h4>
            <ul className="mt-3 list">
              <li className="mb-3">
                <a className="f-small text-green" href="about-us.html">
                  About Us
                </a>
              </li>
              <li className="mb-3">
                <a
                  className="f-small text-green"
                  href="https://angel.co/company/funnelll/jobs"
                >
                  Jobs @ Funnelll
                </a>
              </li>
              <li className="mb-3">
                <a
                  className="f-small text-green"
                  href="https://blog.funnelll.com"
                >
                  Blog
                </a>
              </li>
              <li className="mb-3">
                <a
                  className="f-small text-green"
                  href="https://help.funnelll.com/en/"
                >
                  Help Portal
                </a>
              </li>
              <li className="mb-3">
                <a
                  className="f-small text-green"
                  href="https://trello.com/b/10rb37G3/funnelll-product-roadmap"
                >
                  Road-map
                </a>
              </li>
            </ul>
            <h4 className="f-small mb-3">Policies</h4>
            <ul className="list">
              <li className="mb-3">
                <a
                  className="f-small text-green"
                  href="https://private.funnelll.com/privacy.html"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="mb-3">
                <a
                  className="f-small text-green"
                  href="https://private.funnelll.com/termsandconditions.html"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 pe-4 text-center last">
            <img src={"/assets/images/featured.svg"} alt="featured"></img>

            <div className="texts text-center mt-5">
              <h3 className="f-small">For partnership enquiries contact</h3>

              <p className="f-small">
                <a
                  className="text-green"
                  href="mailto:partnerships@funnelll.com"
                >
                  partnerships@funnelll.com
                </a>
              </p>

              <div className="mt-4 ps-5 ms-4">
                <a href="https://sur.ly/i/funnelll.com/">
                  <img
                    src={"/assets/images/funnelfooter.PNG"}
                    alt="funnel"
                    height={160}
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default SiteFooter;
