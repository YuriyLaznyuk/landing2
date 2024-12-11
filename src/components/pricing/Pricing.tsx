import React from "react";
import "./Pricing.scss";
import Footer from "../footer/Footer";

export default function Pricing(): React.JSX.Element {
  return (
    <section className="pricing-plans">
      <div className="wrap wrap-padding">
        <div className="pricing-plans__description">
          <h3 className="pricing-plans__title">Pricing Plans</h3>
          <p className="pricing-plans__text-block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            nisi aliquet volutpat pellentesque volutpat est.
          </p>
        </div>
        <div className="pricing-plans__rates">
          <div className="rates-item">
            <h4 className="rates-item__title">Starter</h4>
            <p className="rates-item__text-block">up to 3 users</p>
            <p className="rates-item__price">
              <span className="rates-item__currency">$</span>
              <span>29</span>
            </p>
            <p className="rates-item__subtitle">per month</p>
            <button className="rates-item__order-btn">Order</button>
          </div>
          <div className="rates-item rates-item--pink">
            <h4 className="rates-item__title">Standard</h4>
            <p className="rates-item__text-block">up to 20 users</p>
            <p className="rates-item__price">
              <span className="rates-item__currency">$</span>
              <span>99</span>
            </p>
            <p className="rates-item__subtitle">per month</p>
            <button className="rates-item__order-btn">Order</button>
          </div>
          <div className="rates-item">
            <h4 className="rates-item__title">Premium</h4>
            <p className="rates-item__text-block">up to 200 users</p>
            <p className="rates-item__price">
              <span className="rates-item__currency">$</span>
              <span>299</span>
            </p>
            <p className="rates-item__subtitle">per month</p>
            <button className="rates-item__order-btn">Order</button>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
}
