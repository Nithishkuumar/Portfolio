import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="project">
      <div className="expscreen">
        <h6 className="know">Get in Touch</h6>
        <h1>
          <strong>Contact Me</strong>
        </h1>
      </div>
      <div className="conc">
        <div className="contact">
            <div><MdEmail/></div>
            <div>
              <p>nithishkumar1446@gmail.com</p>
            </div>
            {/* <div><FaPhoneAlt/></div>
            <div>
              <p>9751179967</p>
            </div> */}

        </div>
        <div className="contact">
            <div><FaPhoneAlt/></div>
            <div>
              <p>9751179967</p>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
