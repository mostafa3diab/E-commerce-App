import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-black">
        {/* Widgets Link & Add */}
        <div className="py-3 py-md-5 py-xl-8 py-xxl-10">
          <div className="container">
            <div className="row gy-4 gy-md-0">
              <div className="col-12 col-md-6">
                <div className="link-wrapper">
                  <ul className="m-0 list-unstyled">
                    <li>
                      <Link
                        to="#!"
                        className="link-opacity-75-hover text-decoration-none link-light fs-1 lh-sm"
                      >
                        Shop
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#!"
                        className="link-opacity-75-hover text-decoration-none link-light fs-1 lh-sm"
                      >
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#!"
                        className="link-opacity-75-hover text-decoration-none link-light fs-1 lh-sm"
                      >
                        Offers
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#!"
                        className="link-opacity-75-hover text-decoration-none link-light fs-1 lh-sm"
                      >
                        Clearance
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#!"
                        className="link-opacity-75-hover text-decoration-none link-light fs-1 lh-sm"
                      >
                        Releases
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#!"
                        className="link-opacity-75-hover text-decoration-none link-light fs-1 lh-sm"
                      >
                        Deals
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#!"
                        className="link-opacity-75-hover text-decoration-none link-light fs-1 lh-sm"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <section className="mb-4 mb-lg-5 mb-xl-7">
                  <div className="row">
                    <div className="col-6">
                      <div className="address-wrapper">
                        <h4 className="mb-3 h5 text-white">Head Office</h4>
                        <address className="mb-3 fs-7 text-light opacity-75">
                          69323 Swaniawski Forest <br />
                          North Aronfort, Alabama, 26323
                        </address>
                        <p className="m-0">
                          <Link
                            className="fs-7 link-light link-opacity-75 link-opacity-100-hover text-decoration-none"
                            href="tel:+1-479-589-0693"
                          >
                            1-479-589-0693
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="address-wrapper">
                        <h4 className="mb-3 h5 text-white">Branch Office</h4>
                        <address className="mb-3 fs-7 text-light opacity-75">
                          166 McGlynn Overpass Suite <br />
                          Elisabethside, Minnesota, 55755
                        </address>
                        <p className="m-0">
                          <Link
                            className="fs-7 link-light link-opacity-75 link-opacity-100-hover text-decoration-none"
                            href="tel:+540-284-4036"
                          >
                            540-284-4036
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="row">
                    <div className="col-6">
                      <div className="address-wrapper">
                        <h4 className="mb-3 h5 text-white">Warehouse</h4>
                        <address className="m-0 fs-7 text-light opacity-75">
                          88329 Dach Grove Apt. <br />
                          West Bretton, Carolina, 81706
                        </address>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="social-media-wrapper">
                        <h4 className="mb-3 h5 text-white">Connect</h4>
                        <ul className="m-0 list-unstyled d-flex justify-content-start gap-3">
                          <li>
                            <Link
                              href="#!"
                              className="link-opacity-75 link-opacity-100-hover link-light"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="bi bi-facebook"
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                              </svg>
                            </Link>
                          </li>
                          <li>
                            <a
                              href="#!"
                              className="link-opacity-75 link-opacity-100-hover link-light"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="bi bi-twitter"
                                viewBox="0 0 16 16"
                              >
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              className="link-opacity-75 link-opacity-100-hover link-light"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="bi bi-linkedin"
                                viewBox="0 0 16 16"
                              >
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              className="link-opacity-75 link-opacity-100-hover link-light"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="bi bi-instagram"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Links */}
        <div>
          <div className="container border-top border-dark py-3 py-md-5 py-xl-8 py-xxl-10">
            <div className="row gy-3 align-items-lg-center">
              <div className="col-12 col-lg-6 order-1 order-lg-0">
                <div className="copyright-wrapper d-block mb-1 fs-7 text-light opacity-75 text-center text-lg-start">
                  © 2024. All Rights Reserved.
                </div>
                <div className="credit-wrapper d-block fs-9 text-light opacity-75 text-center text-lg-start">
                  Built by{" "}
                  <Link
                    href="https://bootstrapbrain.com/"
                    className="link-light text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mostafa Diab
                  </Link>{" "}
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="link-wrapper">
                  <ul className="m-0 list-unstyled d-flex justify-content-center justify-content-lg-end gap-2 gap-md-3">
                    <li>
                      <Link
                        to="#!"
                        className="link-opacity-75 link-underline-opacity-0 link-opacity-100-hover link-underline-opacity-100-hover link-offset-1 link-light fs-8 d-flex align-items-center pe-2 pe-md-3 bsb-sep bsb-sep-border"
                      >
                        Shipping
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#!"
                        className="link-opacity-75 link-underline-opacity-0 link-opacity-100-hover link-underline-opacity-100-hover link-offset-1 link-light fs-8 d-flex align-items-center pe-2 pe-md-3 bsb-sep bsb-sep-border"
                      >
                        Refund
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#!"
                        className="link-opacity-75 link-underline-opacity-0 link-opacity-100-hover link-underline-opacity-100-hover link-offset-1 link-light fs-8 d-flex align-items-center pe-2 pe-md-3 bsb-sep bsb-sep-border"
                      >
                        Warranty
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#!"
                        className="link-opacity-75 link-underline-opacity-0 link-opacity-100-hover link-underline-opacity-100-hover link-offset-1 link-light fs-8 d-flex align-items-center pe-2 pe-md-3 bsb-sep bsb-sep-border"
                      >
                        Privacy
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#!"
                        className="link-opacity-75 link-underline-opacity-0 link-opacity-100-hover link-underline-opacity-100-hover link-offset-1 link-light fs-8 d-flex align-items-center"
                      >
                        Security
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
