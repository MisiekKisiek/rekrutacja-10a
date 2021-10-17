import React from 'react';
import { NavLink } from "react-router-dom";

//Images
import Logo from "../images/logo-white.svg";


const Footer = () => {

  return ( <footer>
    <div className="footer__wrap">
    <section className="footer__map">
      <h2 className="footer__map-title">MAPA STRONY</h2>
      <NavLink to="/main-page">STRONA GŁÓWNA</NavLink>
      <NavLink to="/offer">OFERTA</NavLink>
      <NavLink to="/blog">BLOG</NavLink>
      <NavLink to="/contact">KONTAKT</NavLink>
    </section>
    <section className="footer__products">
    <h2 className="footer__products-title">PRODUKTY</h2>
      <NavLink to="/filter-mouse/mouse-a">MYSZKI A</NavLink>
      <NavLink to="/filter-mouse/mouse-b">MYSZKI B</NavLink>
      <NavLink to="/filter-mouse/mouse-c">MYSZKI C</NavLink>
    </section>
    <address className="footer__address">
      <div className="footer__address-logo">
        <img src={Logo} alt="Logo 10a" />
      </div>
      <a 
        className="footer__address-tel"
        href="tel:555-555-555"
      >
        555-555-555
      </a>
      <a 
        className="footer__address-mail"
        href="mailto:MAIL@MAIL.COM"
      >
        MAIL@MAIL.COM
      </a>
      <span className="footer__address-address">
        SOSNOWIEC, PO ZMROKU 69
      </span>
      <span className="footer__address-copyright">
        Copyright@10a.io
      </span>
    </address>
    </div>
  </footer> );
}
 
export default Footer;