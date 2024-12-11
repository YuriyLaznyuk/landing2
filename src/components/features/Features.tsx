import React from "react";
import "./Features.scss";
import icon1 from "../../assets/images/icons/icon1.svg";
import icon2 from "../../assets/images/icons/icon2.svg";
import icon3 from "../../assets/images/icons/icon3.svg";

export default function Features(): React.JSX.Element {
  return (
    <section className="main-features wrap wrap-padding">
      <h2 className="main-features__title">Main Features</h2>
      <p className="main-features__text-block">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi
        aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh
        nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus
        pulvinar sit amet. Id vel in nam malesuada.
      </p>
      <div className="main-features__advantages">
        <div className="main-features__advantage-item">
        <img src={icon1} alt="icon" className="main-features__advantage-icon" /> 
          <h3 className="main-features__advantage-title">Monitoring 24/7</h3>
          <p className="main-features__advantage-desc">
            Lorem ipsum dolor sit amet, consectetur adipis cing elit. Elementum
            nisi aliquet volutpat.
          </p>
        </div>
        <div className="main-features__advantage-item">
          <img src={icon2} alt="icon" className="main-features__advantage-icon" />
          <h3 className="main-features__advantage-title">Widget System</h3>
          <p className="main-features__advantage-desc"> nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus
          pulvinar.Sapien in etiam vitae</p>
         
        </div>
        <div className="main-features__advantage-item">
          <img src={icon3} alt="icon" className="main-features__advantage-icon" />
          <h3 className="main-features__advantage-title">Best Performance</h3>
          <p className="main-features__advantage-desc">
            Lorem ipsum dolor sit amet, consectetur adipis cing elit. Elementum
            nisi aliquet volutpat.
          </p>
        </div>
      </div>
    </section>
  );
}
