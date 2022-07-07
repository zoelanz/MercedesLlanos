import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

import "./Contact.scss";

function Contact() {
    return (
        <div>

        
      <div className="contactContainer">

      <div className="networkContainer">
        <h5 className="inquires">For inquiries, questions, comments, etc. contact:</h5>
        <div className="network">
          <p>Galerie Balice Hertling</p>
          <p>gallery@balicehertling.com</p>
          <p>​+33 (0) 9 79 42 96 99</p>
        </div>

        <div className="network">
          <p>Mercedes Llanos</p>
          <p>merchallanos@gmail.com</p>
        </div>
      </div>


        <form className="form" action="">
          <div className="row">
            <div className="col-100">
              <input
                required
                id="formName"
                type="text"
                placeholder="Name*"
                className="w-100 input"
              />
            </div>
            <div className="col-75">
              <input
                required
                id="formSurname"
                type="text"
                placeholder="Last Name*"
                className="w-100 input"
              />
            </div>

            <div className="col-75">
              <input
                required
                id="formEmail"
                type="email"
                placeholder="Email*"
                className="w-100 input"
              />
            </div>

            <div className="col-75">
              <textarea
                required
                id="formEmail"
                type="email"
                placeholder="Message*"
                className="w-100 input"
                cols="30"
                rows="4"
              />
            </div>

            <div className="containerButton">
              <Button 
              //   onClick={(e) => {
              //     purchaseOrder(e)
              //   }}
                className="button"
              //   variant="secondary"
              >
                Submit
              </Button>
            </div>
          </div>
        </form>

        
      </div>
   
    </div>
  );
}

export default Contact;
