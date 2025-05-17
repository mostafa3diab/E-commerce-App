import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Checkout() {
  let { cartId } = useParams();

  let headers = {
    token: localStorage.getItem("userToken"),
  };

  async function handleLogin(formsData) {
    console.log("formData", formsData);

    axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}`,
        { shippingAddress: formsData },

        {
          headers: headers,
          params: {
            url: "http://localhost:5173",
          },
        }
      )

      .then((response) => {
        console.log("checkout", response);
        location.href = response.data.session.url;
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  let formik = useFormik({
    initialValues: {
      details: "",
      phone: "",
      city: "",
    },

    onSubmit: handleLogin,
  });

  return (
    <>
      <section className="bg-light py-3 py-md-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
              <div className="card border border-light-subtle rounded-3 shadow-sm">
                <div className="card-body p-3 p-md-4 p-xl-5">
                  <div className="text-center mb-3"></div>
                  <h2 className="fs-15 fw-normal text-center text-success mb-4">
                    Pay Now
                  </h2>
                  <form onSubmit={formik.handleSubmit} action="#!">
                    <div className="row gy-2 overflow-hidden">
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text"
                            className={`form-control ${
                              formik.touched.details && formik.errors.details
                                ? "is-invalid"
                                : ""
                            }`}
                            name="details"
                            value={formik.values.details}
                            id="details"
                            placeholder="name@example.com"
                            required
                          />
                          <label htmlFor="details" className="form-label">
                            Details
                          </label>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="tel"
                            className={`form-control ${
                              formik.touched.phone && formik.errors.phone
                                ? "is-invalid"
                                : ""
                            }`}
                            name="phone"
                            value={formik.values.phone}
                            id="phone"
                            placeholder="phone"
                            required
                          />
                          <label htmlFor="phone" className="form-label">
                            Phone
                          </label>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text"
                            className={`form-control ${
                              formik.touched.city && formik.errors.city
                                ? "is-invalid"
                                : ""
                            }`}
                            name="city"
                            value={formik.values.city}
                            id="city"
                            placeholder="city"
                            required
                          />
                          <label htmlFor="city" className="form-label">
                            City
                          </label>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="d-grid my-3">
                          <button
                            className="btn btn-success btn-lg"
                            type="submit"
                          >
                            Pay Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
