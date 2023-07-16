import React from "react";
import "./Footer.css";
// Iconos
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <img
          className="logoFooter"
          src={require("../../Img/logo.png")}
          alt="Logo"
        />

        <div className="footerIcons">
          <WhatsAppIcon />
          <InstagramIcon />
        </div>
      </div>
      <p className="footerText">
        Privacy Policy Terms of Service Copyright Policy
      </p>
    </div>
  );
};

export default Footer;
