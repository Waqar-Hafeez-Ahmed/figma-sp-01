import React from "react";
import logo from "../public/svg/logo image.svg";
import "./Footer.css";

const Footer = () => (
  <footer
    className="page-footer font-small blue pt-4"
    style={{ background: "white" }}
  >
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-3 mt-md-0 mt-3">
          <h5 className="text-uppercase">Footer Content</h5>
          <div
            className=""
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignSelf: "center",
            }}
          >
            <img className="site-logo" src={logo} alt="logo" />
          </div>
          <div class="social-media">
            <ul class="list-inline">
              <li>
                <a href="http://www.nextbootstrap.com/" title="">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="http://www.nextbootstrap.com/" title="">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="http://www.nextbootstrap.com/" title="">
                  <i class="fa fa-google-plus"></i>
                </a>
              </li>
              <li>
                <a href="http://www.nextbootstrap.com/" title="">
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
          <p>
            Here you can use rows and columns to organize your footer content.
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
            <li>
              <a href="#!">Link 3</a>
            </li>
            <li>
              <a href="#!">Link 4</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
            <li>
              <a href="#!">Link 3</a>
            </li>
            <li>
              <a href="#!">Link 4</a>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
            <li>
              <a href="#!">Link 3</a>
            </li>
            <li>
              <a href="#!">Link 4</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      © 2020 Copyright:
      <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
    </div>
  </footer>
);

export default Footer;
