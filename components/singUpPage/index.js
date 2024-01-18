import Link from "next/link";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Container, Row, Col, Button } from "react-bootstrap";

function SignUpPage() {
  const handleSubmit = (values) => {
    // Handle form submission logic here
    console.log("Form submitted:", values);
  };

  return (
    <section className="p-0">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col lg={5} md={7} xs={12} className="mt-4">
            <Formik
              initialValues={{
                fullName: "",
                email: "",
                contact: "",
                password: "",
                confirmPassword: "",
              }}
              validate={(values) => {
                // Add your custom validation logic here
                const errors = {};
                // Example: Check if password and confirmPassword match
                if (values.password !== values.confirmPassword) {
                  errors.confirmPassword = "Passwords do not match";
                }
                return errors;
              }}
              onSubmit={handleSubmit}
            >
              <Form>
                <div className="contact-form-wrapper bg-primary bg-opacity-10 p-md-5 p-2 pt-1 rounded">
                  <img
                    src="./circle-pattern-light.png"
                    alt=""
                    className="img-fluid contact-form-img d-none d-md-block"
                  />
                  <div className="row my-2">
                    <div className="col-12">
                      <h2 className="contact-form-heading text-center">
                        Get In Touch
                      </h2>
                      <p className="contact-form-paragh text-center">
                        faucibus ultrices facilisis odio amet, luctus vehicula,
                        turpis elit. Sed placerat.
                      </p>
                    </div>
                    <div className="col-12 my-2">
                      <Field
                        type="text"
                        name="fullName"
                        className="form-control shadow-none"
                        placeholder="Full name"
                        aria-label="Full name"
                      />
                    </div>
                    <div className="col-12 my-2">
                      <Field
                        type="email"
                        name="email"
                        className="form-control shadow-none"
                        placeholder="Email"
                        aria-label="Email"
                      />
                    </div>
                    <div className="col-12 my-2">
                      <Field
                        type="text"
                        name="contact"
                        className="form-control shadow-none"
                        placeholder="Contact with Country Code"
                        aria-label="Contact"
                      />
                    </div>
                    <div className="col-12 my-2">
                      <Field
                        type="password"
                        name="password"
                        className="form-control shadow-none"
                        placeholder="Password"
                        aria-label="password"
                      />
                    </div>
                    <div className="col-12 my-2">
                      <Field
                        type="password"
                        name="confirmPassword"
                        className="form-control shadow-none"
                        placeholder="Confirm Password"
                        aria-label="c-password"
                      />
                      <ErrorMessage
                        name="confirmPassword"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <div className="col-12 mx-auto my-2 mt-4">
                      <Button
                        className="btn w-100 py-3 bg-primary text-white bg-opacity-50"
                        type="submit"
                      >
                        <i className="fa fa-lock"></i> Signup
                      </Button>
                    </div>
                    <div className="col-12 mt-4 d-flex justify-content-between">
                      {/* <Link href="./index.html">
                        <a className="text-primary">
                          <i className="fa fa-arrow-left"></i> Back
                        </a>
                      </Link> */}

                      <Link href="./home" className="text-primary">
                        Back<i className="fa fa-arrow-right"></i>
                      </Link>

                      <Link href="/login" className="text-primary">
                        Login<i className="fa fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </Form>
            </Formik>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SignUpPage;
