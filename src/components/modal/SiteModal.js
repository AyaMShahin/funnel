import React from "react";
import "./modalStyles.css";
import Button from "react-bootstrap/Button";
const SiteModal = () => {
  return (
    <div
      className="modal"
      id="exampleModalCenter"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header justify-content-center">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <h5 className="modal-title text-muted">Login</h5>
          </div>
          <div className="modal-body p-4 py-5 p-md-5 text-muted">
            <div>
              <div className="col-md-12 social push-30">
                <button className="social-button google-connect" id="google">
                  <span>Log in Using Google</span>
                </button>
              </div>
            </div>

            <h5
              className="mt-5"
              style={{
                width: "100%",
                textAlign: "center",
                borderBottom: "1px solid #999999",
                lineHeight: "0.1em",
                margin: "10px 0 20px",
              }}
            >
              <span
                className="text-muted"
                style={{ backgroundColor: "#fff", padding: "0 10px" }}
              >
                &nbsp;&nbsp;&nbsp;Or&nbsp;&nbsp;&nbsp;
              </span>
            </h5>

            <div className="col-md-12">
              <p className=" text-center text-secondary" id="email-btn">
                <span>Login Using Email</span>
              </p>
            </div>
            <form action="#" className="signup-form">
              <div className="form-group mb-2">
                <label htmlFor="email f-small">Email address</label>
                <input
                  id="email"
                  type="text"
                  className="form-control"
                  placeholder="Your Email Address"
                  required
                />
                <p className="text-muted mt-2 f-small">
                  We'll never share your email with anyone else.
                </p>
              </div>
              <div className="form-group mb-2">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="form-group text-center mt-3 mb-2">
                <Button
                  className="col-lg-4"
                  variant="primary"
                  type="submit"
                  id="submit"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteModal;
