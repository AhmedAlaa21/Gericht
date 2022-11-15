import React from "react";

import { images, data } from "../../constants";

import { SubHeading, MenuItem } from "../../components";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you Palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_orange">
        <p className="app__specialMenu_menu_heading">Orange & Juice</p>
        <div className="app__specialMenu_menu_items">
          {data.juices.map((item, index) => (
            <MenuItem
              key={index}
              title={item.title}
              price={item.price}
              tags={item.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu1} alt="menu-img" />
      </div>
      <div className="app__specialMenu-menu_cocktail">
        <p className="app__specialMenu_menu_heading">Cocktails</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((item, index) => (
            <MenuItem
              key={index}
              title={item.title}
              price={item.price}
              tags={item.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: "15px" }}>
      <button type="button" className="custom__button">
        view more
      </button>
    </div>
  </div>
);

export default SpecialMenu;
