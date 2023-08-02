import { Link } from "react-router-dom";
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
      <p className="footerText">ALEXANDRA GONZALEZ ©2023</p>
    </div>
  );
};

export default Footer;
