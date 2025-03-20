import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <img
        src={`${import.meta.env.BASE_URL}footer.png`}
        alt="Kasa Logo"
        className="footer-logo"
      />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
