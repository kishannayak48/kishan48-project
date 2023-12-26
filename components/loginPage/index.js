import React from "react";
import HeadPage from "../layout/HeadPage";
import HEAD_TITLES from "@/utils/constants/titleConstants";

function LoginPage() {
  return (
    <>
      <HeadPage title={HEAD_TITLES.login}>
        <section>
          <div class="container my-3 pt-5">
            <div class="row d-flex justify-content-center mt-3">
              <div class="col-lg-5 col-md-7 col-12">
                <form action="">
                  <div class="contact-form-wrapper bg-primary bg-opacity-10 p-md-5 p-2 pt-4 rounded">
                    {/* <img
                      src="./circle-pattern.png"
                      alt=""
                      class="img-fluid contact-form-img d-none d-md-block"
                      height={100}
                      width={100}
                    /> */}
                    <div class="row my-2">
                      <div class="col-12">
                        <h2 class="contact-form-heading text-center">
                          Get In Touch
                        </h2>
                        <p class="contact-form-paragh text-center text-dark">
                          faucibus ultrices facilisis odio amet, luctus
                          vehicula, turpis elit. Sed placerat.
                        </p>
                      </div>
                      <div class="col-12 my-2">
                        <input
                          type="email"
                          class="form-control shadow-none"
                          placeholder="Email"
                          aria-label="Email"
                        />
                      </div>
                      <div class="col-12 my-2">
                        <input
                          type="password"
                          class="form-control shadow-none"
                          placeholder="Password"
                          aria-label="Full name"
                        />
                      </div>

                      <div class="col-12 mx-auto my-2 mt-4">
                        <button
                          class="btn w-100 bg-primary bg-opacity-50 py-3 text-white me-2 mb-4 mb-sm-0"
                          type="button"
                        >
                          <i class="fa fa-lock"></i> Login
                        </button>
                      </div>

                      <div class="col-12 mt-4 d-flex justify-content-between">
                        <a href="./index.html">
                          <i class="fa fa-arrow-left"></i> back
                        </a>
                        <a href="signup.html">
                          {" "}
                          Singup <i class="fa fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </HeadPage>
      <div>hello world</div>
    </>
  );
}

export default LoginPage;
