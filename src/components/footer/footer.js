/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <h6>About</h6>
          <p className="text-justify">
            Gophie.cam is a platform where you get your <b>movies/series</b>{" "}
            free, no costs, redirects, ads, e.t.c, you dont have to go through 3
            to 4 pages of clicking before arriving at a download link.
            everything happens on a page we have multiple movie <b>sources</b>.
          </p>
        </div>

        <div className="col-xs-6 col-md-3">
          <h6>Discover Movies</h6>
          <ul className="footer-links">
            <li>
              <Link to="/Alpha">Alpha</Link>
            </li>
            <li>
              <Link to="/Delta">Delta</Link>
            </li>
            <li>
              <Link to="/Iota">Iota</Link>
            </li>
            <li>
              <Link to="/Zeta">Zeta</Link>
            </li>
          </ul>
        </div>

        <div className="col-xs-6 col-md-3">
          <h6>Project</h6>
          <ul className="footer-links">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Contribute</a>
            </li>
            <li>
              <Link to="/terms">Terms and Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-6 col-xs-12">
          <p className="copyright-text">
            Copyright &copy; 2020 All Rights Reserved by
            <a href="/"> Gophie</a>.
          </p>
        </div>

        <div className="col-md-4 col-sm-6 col-xs-12">
          <ul className="social-icons">
            <li>
              <a className="facebook" href="#">
                F
              </a>
            </li>
            <li>
              <a className="twitter" href="https://twitter.com/GophieTeam">
                T
              </a>
            </li>
            <li>
              <a className="linkedin" href="#">
                I
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
