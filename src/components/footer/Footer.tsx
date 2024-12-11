import React from "react";
import "./Footer.scss";
import logo from "../../assets/images/icons/subtract-f.svg";
import fb from "../../assets/images/icons/Facebook.svg";
import tw from "../../assets/images/icons/Twitter.svg";
import inst from "../../assets/images/icons/Instagram.svg";

export default function Footer(): React.JSX.Element {
  return (
    
      <footer className="footer-menu">
        <div className="footer-menu__wrapper wrap wrap-padding">
          <div className="footer-menu__logo">
            <img src={logo} alt="logo" />
            <p>Anaylitics</p>
          </div>
          <ul className="footer-menu__list">
            <li className="footer-menu__item">
              <a href="" className="footer-menu__link">
                Product
              </a>
            </li>
            <li className="footer-menu__item">
              <a href="" className="footer-menu__link">
                Pricing Plans
              </a>
            </li>
            <li className="footer-menu__item">
              <a href="" className="footer-menu__link">
                FAQ
              </a>
            </li>
            <li className="footer-menu__item">
              <a href="" className="footer-menu__link">
                Blog
              </a>
            </li>
          </ul>
          <div className="footer-menu__links">
            <a href="/">
              <img className="footer-menu__link-icon" src={fb} alt="fb" />
            </a>
            <a href="/">
              <img className="footer-menu__link-icon" src={tw} alt="tw" />
            </a>
            <a href="/">
              <img className="footer-menu__link-icon" src={inst} alt="inst" />
            </a>
          </div>
        </div>
      </footer>
    
  );
}
