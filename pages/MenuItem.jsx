import "./MenuItem.css";

import { useState, useEffect } from "react";
import MenuItemDetails from "./MenuItemDetails";

export default function MenuItem(item) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const handleClick = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <>
      <div className="menu-item" key={item.id} onClick={handleClick} {...item}>
        <div className="menu-item-header">
          <p className="menu-item-name">{item.name}</p>
          <span className="menu-item-price">${item.price}</span>
        </div>
        <div className="menu-item-body">
          <p className="menu-item-description">{item.description}</p>
        </div>
      </div>
      <div className={`menu-item-modal-container ${isOpen ? "show" : "hide"}`}>
        <button className="close-menu-item-modal-btn" onClick={handleClick}>
          <img
            src="assets/icons/close-modal.svg"
            alt="Close menu item modal icon"
            aria-label="Close menu item modal"
          />
        </button>
        <MenuItemDetails onClick={handleClick} {...item} />
      </div>
    </>
  );
}
