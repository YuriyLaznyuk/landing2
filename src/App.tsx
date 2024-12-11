import React from "react";
import Header from "./components/header/Header";
import Features from "./components/features/Features";
import RoadMap from "./components/road-map/RoadMap";
import "./styles/App.scss";
import Pricing from "./components/pricing/Pricing";
// import Footer from "./components/footer/Footer";
export default function App(): React.JSX.Element {
  return (
    <div className="container">
      <Header />
      <Features/>
      <RoadMap/>
      <Pricing/>
      {/* <Footer/> */}
    </div>
  );
}
