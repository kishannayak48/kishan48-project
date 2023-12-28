import React from "react";
import styles from "./styels.module.css";
import HeadPage from "../layout/HeadPage";
import HEAD_TITLES from "@/utils/constants/titleConstants";
import { Form } from "react-bootstrap";
import { FaClock, FaUserLock } from "react-icons/fa";
import { Formik } from "formik";
import * as Yup from "yup";

const defaultValues = {
  email: "",
  password: "",
};

function LoginPage() {
  return (
    <>
      <HeadPage title={HEAD_TITLES.login}>
        <section>
          <div className="container my-3 pt-5">
            <div className="row d-flex justify-content-center mt-3">
              <div className="col-lg-5 col-md-7 col-12">
                <Form action="">
                  <div
                    className={`${styles.contactFormWrapper} bg-primary bg-opacity-10 p-md-5 p-2 pt-4 rounded`}
                  >
                    <div className="row my-2">
                      <div className="col-12">
                        <h2
                          className={`${styles.contactFormHeading} text-center`}
                          // className="contact-form-heading text-center"
                        >
                          Get In Touch
                        </h2>
                        <p
                          //  className="contact-form-paragh text-center text-dark"
                          className={`${styles.contactFormParagh} text-center text-dark`}
                        >
                          faucibus ultrices facilisis odio amet, luctus
                          vehicula, turpis elit. Sed placerat.
                        </p>
                      </div>
                      <div className="col-12 my-2">
                        <input
                          type="email"
                          className={`form-control ${styles.inputFormControl} shadow-none`}
                          placeholder="Email"
                          aria-label="Email"
                        />
                      </div>
                      <div className="col-12 my-2">
                        <input
                          type="password"
                          className={`form-control ${styles.inputFormControl} shadow-none`}
                          placeholder="Password"
                          aria-label="Full name"
                        />
                      </div>

                      <div className="col-12 mx-auto my-2 mt-4">
                        <button
                          className="btn w-100 bg-primary bg-opacity-40 py-2 text-white me-2 mb-4 mb-sm-0"
                          type="button"
                        >
                          {/* <i className="fa fa-lock"></i> */}
                          <FaUserLock size={20} className="mb-1 me-2" />
                          Login
                        </button>
                      </div>

                      <div className="col-12 mt-4 d-flex justify-content-between">
                        <a href="./index.html">
                          <i className="fa fa-arrow-left"></i> back
                        </a>
                        <a href="signup.html">
                          {" "}
                          Singup <i className="fa fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </section>
      </HeadPage>
    </>
  );
}

export default LoginPage;
