import "./Menu.css";
import data from "../src/menu.js";

import { useState } from "react";

export default function Menu() {
  const [menu, setMenu] = useState([]);

  const quickDrinksElements = data.quickDrinks.map((item) => (
    <div key={item.id} className="menu-item">
      <div className="menu-item-header">
        <p className="menu-item-name">{item.name}</p>
        <span className="menu-item-price">${item.price}</span>
      </div>
      <div className="menu-item-body">
        <p className="menu-item-description">{item.description}</p>
      </div>
    </div>
  ));

  const specialtyDrinksElements = data.specialtyDrinks.map((item) => (
    <div key={item.id} className="menu-item">
      <div className="menu-item-header">
        <p className="menu-item-name">{item.name}</p>
        <span className="menu-item-price">${item.price}</span>
      </div>
      <div className="menu-item-body">
        <p className="menu-item-description">{item.description}</p>
      </div>
    </div>
  ));

  const pastriesElements = data.pastries.map((item) => (
    <div key={item.id} className="menu-item">
      <div className="menu-item-header">
        <p className="menu-item-name">{item.name}</p>
        <span className="menu-item-price">${item.price}</span>
      </div>
      <div className="menu-item-body">
        <p className="menu-item-description">{item.description}</p>
      </div>
    </div>
  ));

  return (
    <>
      <div className="menu-container">
        <div className="quick-drinks-container">
          <h1>Quick Drinks</h1>
          <div className="quick-drinks">{quickDrinksElements}</div>
        </div>
        <div className="specialty-drinks-container">
          <h1>Specialty Drinks</h1>
          <div className="specialty-drinks">{specialtyDrinksElements}</div>
        </div>
        <div className="pastries-container">
          <h1>Pastries</h1>
          <div className="pastries">{pastriesElements}</div>
        </div>
      </div>
    </>
  );
}
