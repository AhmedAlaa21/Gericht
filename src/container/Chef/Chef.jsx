import React from "react";

import images from "../../constants/images";
import { SubHeading } from "../../components";
import "./Chef.css";
const Chef = () => {
  return (
    <div className="app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef-img" />
      </div>
      <div className="app__chef-word">
        <SubHeading title="Chef's word" />
        <h1 className="headtext__cormorant">What We Believe In</h1>
        <div className="app__chef-info">
          <div className="app__chef-info_quote">
            <img src={images.quote} alt="quote-sign" />
            <p className="p__opensans">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit
              .
            </p>
          </div>
          <p className="p__opensans">
            Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget
            Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam
            Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit
            Nunc.
          </p>
        </div>
        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="chef-sign" />
        </div>
      </div>
    </div>
  );
};

export default Chef;
