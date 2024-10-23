import "./Menu.css";
import data from "../src/menu.js";

import MenuItem from "./MenuItem";

export default function Menu() {
  const menuElements = data.map((item) => {
    return <MenuItem key={item.id} {...item} />;
  });

  return (
    <>
      <div className="menu-container">
        <h1 className="menu-heading">Our Menu</h1>
        <div className="menu-items">{menuElements}</div>
        <div className="disclaimer-container">
          <p className="menu-disclaimer">
            ***Please be aware that our food may contain or come into contact
            with common allergens, such as peanuts, tree nuts, soy, dairy, eggs,
            sesame and wheat.
          </p>
        </div>
      </div>
    </>
  );
}
