import React from "react";
import "./Header.scss";
import subtract from "../../assets/images/icons/Subtract.svg";
import dashboardSmall from "../../assets/images/img/dashboardSmall.png";
export default function Header(): React.JSX.Element {
  return (
    <section className="intro-analitics">
      <div className="wrap wrap-padding">
        <header className="header">
          <a href="#" className="header__logo">
            <img src={subtract} alt="logo"></img>
            <p>Analytics</p>
          </a>
          <nav className="header__menu header__menu--adaptive">
            <ul className="header__menu-list">
              <li className="header__menu-item">
                <a href="#">Products</a>
              </li>
              <li className="header__menu-item">
                <a href="#">Pricing</a>
              </li>
              <li className="header__menu-item">
                <a href="#">FAQ</a>
              </li>
              <li className="header__menu-item">
                <a href="#">Blog</a>
              </li>
              <li className="header__menu-item">
                <a href="#">Analytics</a>
              </li>
            </ul>
          </nav>
          <div className="header__btns">
            <button className="header__btns--transparent">Sign in</button>
            <button className="header__btns--circled header__menu--adaptive">Sign Up</button>
          </div>


<div className="header-menu-btn">
  <input type="checkbox" />
  <nav className="header__menu header__menu--side">
    <ul className="header__menu-list">
      <li className="header__menu-item"><a href="/" className="header__menu-link">Products</a></li>
      <li className="header__menu-item"><a href="/" className="header__menu-link">Pricing</a></li>
      <li className="header__menu-item"><a href="/" className="header__menu-link">FAQ</a></li>
      <li className="header__menu-item"><a href="/" className="header__menu-link">Blog</a></li>
      <li className="header__menu-item"><a href="/" className="header__menu-link">Analytics</a></li>
    </ul>
  </nav>
</div>

        </header>
        {/* dashboard */}/
        <div className="dashboard">
          <div className="dashboard__info">
            <h1 className="dashboard__info-title">
              Monitor your business on real-time dashboard
            </h1>
            <p className="dashboard__info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam
              vitae nibh nunc mattis imperdiet sed nullam.
            </p>
            <button className="dashboard__info-btn">Try for free</button>
          </div>

          <div className="dashboard__pictures">
            <img src={dashboardSmall} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
