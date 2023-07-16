import React, { useState } from "react";
import "./ContactPage.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ContactPage = () => {
  const formSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contactContainer">
      <div className="contactTittle">
        <h2>Contact</h2>
        <p className="contactText">
          If you want to know more about our beverages you can write us, it will
          be a pleasure to get in contact with you!
        </p>
        <PhoneInTalkIcon className="contactIcon" />
        <p>Phone: + 57 3886607939</p>
        <MailOutlineIcon className="contactIcon" />
        <p>Email: contact@auroradrinks.com</p>
        <LocationOnIcon className="contactIcon" />
        <p>Address: Bogotá DC, Colombia</p>
      </div>

      <div className="contactForm">
        <h3>Send us your comments...</h3>
        <form
          className="form"
          action="send"
          method="post"
          onSubmit={formSubmit}
        >
          <label htmlFor="name">
            <input className="inputForm" type="text" placeholder="Name" />
          </label>
          <label htmlFor="email">
            <input className="inputForm" type="email" placeholder="Email" />
          </label>
          <label>
            <textarea
              className="inputForm"
              placeholder="Write your comment..."
              rows={4}
              cols={40}
            />
          </label>
          <button className="button" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
