import React from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./modalStyles.css";
const SiteModal = (props) => {
  return (
    <section>
      <Modal show={props.show} onHide={props.close} animation={false}>
        <Modal.Header>
          <Modal.Title className="text-secondary">Login</Modal.Title>
          <Button
            className="btn-close"
            aria-label="Close"
            onClick={props.close}
          >
            x
          </Button>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="col-md-12 social push-30">
              <button className="social-button google-connect" id="google-btn">
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

            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  id="email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  id="password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  className="text-muted f-small"
                  type="checkbox"
                  label="Check me out"
                />
              </Form.Group>
              <Button variant="primary" type="submit" id="submit">
                Submit
              </Button>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default SiteModal;
