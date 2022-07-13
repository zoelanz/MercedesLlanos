import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Contact.scss";

function Contact() {
  function clearForm() {
    let input = document.querySelectorAll(".input");
    input.forEach((item) => {
      item.value = "";
    });
  }

  useEffect(() => {
    const btn = document.getElementById("button");

    document
      .getElementById("form")
      .addEventListener("submit", function (event) {
        event.preventDefault();

        btn.value = "Sending...";

        const serviceID = "service_je78k6f";
        const templateID = "template_my076za";

        emailjs.sendForm(serviceID, templateID, this).then(
          () => {
            toast("Email sent succesfully", {
              close: true,
              duration: 2000,
              gravity: "top",
              className: "toastify",
            });

            btn.value = "Submit";
            console.log("Mail status: success");
            clearForm();
          },
          (err) => {
            btn.value = "Submit";
            alert(JSON.stringify(err));
          }
        );
      });
  }, []);

  return (
    <div>
      <div className="contactContainer">
        <div className="networkContainer">
          <h5 className="inquires">
            For inquiries, questions, comments, etc. contact:
          </h5>
          <div className="network">
            <p className="mb-0">Galerie Balice Hertling</p>
            <a
              className="linkMail"
              href="mailto:gallery@balicehertling.com"
              target="_blank"
            >
              gallery@balicehertling.com
            </a>
            <p>​+33 (0) 9 79 42 96 99</p>
          </div>
          <div className="network">
            <p className="mb-0">Mercedes Llanos</p>
            <a
              className="linkMail"
              href="mailto:merchallanos@gmail.com"
              target="_blank"
            >
              merchallanos@gmail.com
            </a>
          </div>
        </div>
        <form id="form" className="form" action="">
          <div className="row">
            <div className="col-100">
              <input
                required
                name="name"
                id="name"
                type="text"
                placeholder="Name*"
                className="w-100 input"
              />
            </div>
            <div className="col-75">
              <input
                required
                name="lastName"
                id="lastName"
                type="text"
                placeholder="Last Name*"
                className="w-100 input"
              />
            </div>
            <div className="col-75">
              <input
                required
                name="email"
                id="email"
                type="email"
                placeholder="Email*"
                className="w-100 input"
              />
            </div>
            <div className="col-75">
              <textarea
                required
                name="message"
                id="message"
                type="email"
                placeholder="Message*"
                className="w-100 input"
                cols="30"
                rows="4"
              />
            </div>
            <div className="containerButton">
              <input
                className="button"
                type="submit"
                id="button"
                value="Submit"
              />
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
