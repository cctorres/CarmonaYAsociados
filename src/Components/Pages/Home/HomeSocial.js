import React from "react";
import Lottie from "lottie-react";
import FB from "../../../assets/Animations/FB-logo-animation.json";
import './HomeSocial.css';

const HomeSocial = () => {
  return (
      <div className="home-social-animations">
        <Lottie animationData={FB} style={{ height: 300 }, { margin: -200}} />
      </div>
  );
};

export default HomeSocial;
