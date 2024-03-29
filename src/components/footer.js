import React, { Fragment } from "react";
import "../assets/css/footer.css";

function Footer() {
  return (
    <Fragment>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            Company<span>logo</span>
          </h3>

          <p className="footer-links">
            <li>
              <a href="#" className="link-1">
                Home
              </a>

              <a href="#">Admision</a>

              <a href="#">TeacherTraining</a>

              <a href="#">About</a>

              {/* <a href="#">Faq</a> */}

              <a href="#">Contact Us</a>
            </li>
          </p>

          <p className="footer-company-name">Acharya Abacus Classes © 2015</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>444 S. Cedros Ave</span> Solana Beach, California
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+91 7709774300</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">Ceoprefix@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            An market leading online and offline Abacus classes for students and
            teachers.
          </p>

          <div className="footer-icons">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div className="Ender">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.485171340868!2d74.6562494!3d19.3914323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc9389f2473067%3A0xa351171b5c514733!2sAcharya%20Research%20Institute!5e0!3m2!1sen!2sin!4v1711731729214!5m2!1sen!2sin"
            style={{
              width: "250",
              height: "200",
              style: "border: 0",
              allowfullscreen: "",
              loading: "lazy",
              referrerpolicy: "no-referrer-when-downgrade",
            }}
          ></iframe>
        </div>
      </footer>
    </Fragment>
  );
}
export default Footer;
