import React, { useState, useRef } from "react";
import "./Contact.css";
import * as emailjs from "emailjs-com";
import Alert from "./General/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";
import Recaptcha from "react-recaptcha";
import useWindowDimensions from "./CustomHooks/useWindowDimensions";

const Contact = () => {
  const captcha = useRef({});
  const { width } = useWindowDimensions();
  const dimensions = useWindowDimensions();
  const [loadingEmail, setLoadingEmail] = useState(false);
  const [verified, setVerified] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [dangerAlert, setDangerAlert] = useState(false);
  const [safeAlert, setSafeAlert] = useState(false);
  const handleChange = (e) => {
    const eName = e.target.name;
    setFormData({ ...formData, [eName]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoadingEmail(true);
      await emailjs.sendForm(
        "yahoo",
        "template_gl6yq68",
        "sendmeanemail",
        "user_vkV3ckigggvh4bH9yQ1Nh"
      );
      setLoadingEmail(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setSafeAlert(true);
      setTimeout(() => {
        setSafeAlert(false);
      }, 1500);
      setVerified(false);
      if (captcha.current) captcha.current.reset();
    } catch (err) {
      setLoadingEmail(false);
      setDangerAlert(true);
      setTimeout(() => {
        setDangerAlert(false);
      }, 1500);
      setVerified(false);
      if (captcha.current) captcha.current.reset();
    }
  };
  return (
    <>
      <div
        className="Contact"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundImage: `url("${require("./images/contact.jpg")}")`,
          backgroundSize: `100% ${width < 500 ? "30%" : width < 700 ? "40%" : "50%"}`,
        }}
      >
        {/* <img style={{ position: "absolute", top: "0px" }} src={require("./images/contact.jpg")} /> */}
        <h1>
          <i class="far fa-envelope"></i>Contact me through email
        </h1>

        {/* <p>
        <i class="fas fa-at"></i>
        <span style={{ color: "rgb(29,29,29)" }}>mohammeddsaadd@yahoo.com</span>
      </p> */}
        <form id="sendmeanemail" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            onChange={handleChange}
            value={formData.name}
            placeholder="Optional, but preferable."
          ></input>
          <label htmlFor="email">
            Email Address{" "}
            {!validateEmail(formData.email) && (
              <span style={{ color: "#404040", fontWeight: 100, fontFamily: "Georgia" }}>
                required
              </span>
            )}
          </label>
          <input
            name="email"
            type="email"
            onChange={handleChange}
            value={formData.email}
            placeholder="Required, so I can contact you back."
          ></input>
          <label htmlFor="subject">Email Subject</label>
          <input
            name="subject"
            type="text"
            onChange={handleChange}
            value={formData.subject}
            placeholder="Optional, but preferable."
          ></input>
          <label htmlFor="message">
            Email Body{" "}
            {formData.message === "" && (
              <span style={{ color: "#404040", fontWeight: 100, fontFamily: "Georgia" }}>
                required
              </span>
            )}
          </label>
          <textarea
            name="message"
            type="textarea"
            onChange={handleChange}
            value={formData.message}
          ></textarea>
          <div style={{ margin: "auto auto" }}>
            <Recaptcha
              // verified={verified}
              ref={captcha}
              sitekey="6LclIsoZAAAAAFyAR0s_bfmAgDQhbAUYG_wJVIVZ"
              render="explicit"
              onloadCallback={() => {
                console.log("reCAPTCHA loaded");
              }}
              expiredCallback={(res) => {
                if (!res) {
                  setVerified(false);
                }
              }}
              size={dimensions.width > 700 ? "normal" : "compact"}
              theme="dark"
              verifyCallback={(res) => {
                if (res) {
                  setVerified(true);
                }
              }}
            />
          </div>
          {!loadingEmail ? (
            <input
              type="submit"
              value="Send"
              id={
                !validateEmail(formData.email) || formData.message === "" || !verified
                  ? "disabled"
                  : "email-submit"
              }
              disabled={!validateEmail(formData.email) || formData.message === "" || !verified}
            ></input>
          ) : (
            <div style={{ margin: "auto auto" }}>
              <CircularProgress />
            </div>
          )}
        </form>

        <Alert
          visible={safeAlert}
          message={
            <div>
              <i style={{ color: "#1bd167" }} className="far fa-check-square"></i>
              <span>Email Sent</span>
            </div>
          }
        />
        <Alert
          visible={dangerAlert}
          message={
            <div>
              <i style={{ color: "#ab0000" }} className="far fa-times-circle"></i>
              <span>Try again!</span>
            </div>
          }
        />
      </div>

      <div className="contact-footer">
        <div className="footer-left">
          <p>
            <i className="fas fa-at"></i> mohammeddsaadd@yahoo.com
          </p>
          <p>
            <i className="fas fa-phone"></i> +20 115 794 3817
          </p>
        </div>
        <div className="footer-right">
          <div className="social-contact">
            <i
              class="fab fa-facebook"
              onClick={() => {
                window.open("https://www.facebook.com/mohammeddsaadd");
              }}
            ></i>
            <i
              class="fab fa-linkedin"
              onClick={() => {
                window.open("https://www.linkedin.com/in/mohammed-saad-6704711a9/");
              }}
            ></i>
            <i
              class="fab fa-github"
              onClick={() => {
                window.open("https://github.com/mohammedgrey");
              }}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

//helper function
function validateEmail(email) {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) return true;
  return false;
}
