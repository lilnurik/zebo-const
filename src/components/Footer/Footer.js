import React, { useState } from "react";
import axios from "axios";

import "./Footer.scss";
import { BsWhatsapp, BsInstagram, BsFacebook } from "react-icons/bs";

const Footer = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!checkboxChecked) {
      alert("Please agree to the processing of the phone number.");
      return;
    }

    const message = `
      Новая заявка:
      Имя: ${fullName}
      Номер телефона: ${phoneNumber}
    `;

    const botToken = "6623205366:AAFtdfVvnNlXSnp_EkPqvsP79QnF8wzd1FY";
    const chatId = "-1001932124271";

    try {
      await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: message,
      });

      setShowAlert(true);
      setFullName("");
      setPhoneNumber("");
      setCheckboxChecked(false);

      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    } catch (error) {
      console.error("Error sending data to Telegram:", error);
      alert("An error occurred while sending data to Telegram.");
    }
  };

  return (
    <div className="div-footer" id="footer">
      <div className="container">
        <div className="div-card">
          <div className="forma">
            <h1>SUBMIT YOUR APPLICATION</h1>
            <div>
              <div class="col-md-8 g-mb-30">
                <div>
                  {showAlert && (
                    <div className="success-alert">
                      Data sent successfully to Telegram!
                    </div>
                  )}
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="inpname"
                        placeholder="Full Name"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        type="text"
                        className="inpname"
                        placeholder="Phone Number"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                    <div className="checkbox">
                      <input
                        type="checkbox"
                        className="check"
                        required
                        checked={checkboxChecked}
                        onChange={() => setCheckboxChecked(!checkboxChecked)}
                      />
                      <p className="parag">
                        I agree with the processing of phone number
                      </p>
                    </div>
                    <button className="butsend" type="submit">
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="div-div">
            <div className="div1">
              <p>+998 99 900 99 90</p>
              <a href="">info@zeboconst.com</a>
            </div>
            <div>
              <p>
              39 Eleanor street<br/> Sheffield S9 5AX
              </p>
              <a href="">Show in the map</a>
            </div>
            <div className="soc-icons">
              <div className="soc-icons">
                <BsWhatsapp color="white" size={"2em"} />
              </div>
              <div className="soc-icons">
                <BsInstagram color="white" size={"2em"} />
              </div>
              <div className="soc-icons">
                <BsFacebook color="white" size={"2em"} />
              </div>
              

             
            </div>
          </div>
          
         
        </div>
        
      </div>
      
    </div>
  );
};

export default Footer;
