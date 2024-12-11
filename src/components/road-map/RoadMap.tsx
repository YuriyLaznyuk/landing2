import React from "react";
import "./RoadMap.scss";
import scr1 from '../../assets/images/img/screen-01.png';
import scr2 from '../../assets/images/img/screen-02.png';
import scr3 from '../../assets/images/img/screen-03.png';
export default function RoadMap(): React.JSX.Element {
  return (
    <section className="roadmap wrap wrap-padding">
      <div className="roadmap__item">
        <div className="roadmap__description">
          <h3 className="roadmap__title">Automated Reports & Widget Alerts</h3>
          <p className="roadmap__text-block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam
            vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor
            pulvinar risus pulvinar sit amet.
          </p>
        </div>
        <div className="roadmap__picture"><img src={scr1} alt="icon" /></div>
      </div>
      <div className="roadmap__item roadmap__item--right">
        <div className="roadmap__description">
          <h3 className="roadmap__title">
            Fully customizable to address your needs{" "}
          </h3>
          <p className="roadmap__text-block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam
            vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor
            pulvinar risus pulvinar sit amet.
          </p>
        </div>
        <div className="roadmap__picture"><img src={scr2} alt="icon" /></div>
      </div>
      <div className="roadmap__item">
        <div className="roadmap__description">
          <h3 className="roadmap__title">Pre-built Dashboard Templates</h3>
          <p className="roadmap__text-block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam
            vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor
            pulvinar risus pulvinar sit amet.
          </p>
        </div>
        <div className="roadmap__picture"><img src={scr3} alt="icon" /></div>
      </div>
    </section>
  );
}
