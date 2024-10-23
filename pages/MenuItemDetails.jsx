import "./MenuItemDetails.css";

import { useState } from "react";

export default function MenuItemDetails({ open, handleClick, ...item }) {
  const [formData, setFormData] = useState({
    id: item.id,
    name: item.name,
    price: item.price,
    description: item.idescription,
    size: "",
    temperature: "",
    caffeine: "",
    milk: "",
    syrup: "",
    muffinflavor: "",
    bagelflavor: "",
    croissantflavor: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <div className="menu-item-modal">
      <div className="menu-item-modal-header">
        <h1 className="menu-item-modal-heading">{item.name}</h1>
        <span className="menu-item-modal-price">${item.price}</span>
        <p className="menu-item-modal-description">{item.description}</p>
      </div>
      <span className="decorative-break"></span>
      <div className="menu-item-modal-content">
        <form className="menu-item-modal-form">
          {item.size && (
            <fieldset>
              <legend>Size (required)</legend>
              <br />
              <div className="radio-container">
                <input
                  name="size"
                  type="radio"
                  value="Regular"
                  id="Regular"
                  onChange={handleChange}
                  checked={formData.size === "Regular"}
                />
                <label htmlFor="Regular">Regular (12oz)</label>
              </div>
              <div className="radio-container">
                <input
                  name="size"
                  type="radio"
                  value="Large"
                  id="Large"
                  onChange={handleChange}
                  checked={formData.size === "Large"}
                />
                <label htmlFor="Large">Large (16oz) (+$0.75)</label>
              </div>
            </fieldset>
          )}

          {item.temperature && (
            <fieldset>
              <legend>Temperature (required)</legend>
              <br />
              <div className="radio-container">
                <input
                  name="temperature"
                  type="radio"
                  value="Hot"
                  id="Hot"
                  onChange={handleChange}
                  checked={formData.temperature === "Hot"}
                />
                <label htmlFor="Hot">Hot</label>
              </div>
              <div className="radio-container">
                <input
                  name="temperature"
                  type="radio"
                  value="Iced"
                  id="Iced"
                  onChange={handleChange}
                  checked={formData.temperature === "Iced"}
                />
                <label htmlFor="Iced">Iced</label>
              </div>
            </fieldset>
          )}

          {item.caffeine && (
            <fieldset>
              <legend>Caffeine (required)</legend>
              <br />
              <div className="radio-container">
                <input
                  name="caffeine"
                  type="radio"
                  value="Single Shot"
                  id="Single Shot"
                  onChange={handleChange}
                  checked={formData.caffeine === "Single Shot"}
                />
                <label htmlFor="Single Shot">Single Shot</label>
              </div>
              <div className="radio-container">
                <input
                  name="caffeine"
                  type="radio"
                  value="Double Shot"
                  id="Double Shot"
                  onChange={handleChange}
                  checked={formData.caffeine === "Double Shot"}
                />
                <label htmlFor="Double Shot">Double Shot (+$1.50)</label>
              </div>
              <div className="radio-container">
                <input
                  name="caffeine"
                  type="radio"
                  value="Triple Shot"
                  id="Triple Shot"
                  onChange={handleChange}
                  checked={formData.caffeine === "Triple Shot"}
                />
                <label htmlFor="Triple Shot">Triple Shot (+$1.75)</label>
              </div>
            </fieldset>
          )}

          {item.milk && (
            <fieldset>
              <legend>Milk (required)</legend>
              <br />
              <div className="radio-container">
                <input
                  name="milk"
                  type="radio"
                  value="Whole"
                  id="Whole"
                  onChange={handleChange}
                  checked={formData.milk === "Whole"}
                />
                <label htmlFor="Whole">Whole</label>
              </div>
              <div className="radio-container">
                <input
                  name="milk"
                  type="radio"
                  value="Almond"
                  id="Almond"
                  onChange={handleChange}
                  checked={formData.milk === "Almond"}
                />
                <label htmlFor="Almond">Almond (+$0.75)</label>
              </div>
              <div className="radio-container">
                <input
                  name="milk"
                  type="radio"
                  value="Oat"
                  id="Oat"
                  onChange={handleChange}
                  checked={formData.milk === "Oat"}
                />
                <label htmlFor="Oat">Oat (+$0.75)</label>
              </div>
            </fieldset>
          )}

          {item.syrup && (
            <fieldset>
              <legend>Syrup (required)</legend>
              <br />
              <div className="radio-container">
                <input
                  name="syrup"
                  type="radio"
                  value="No Syrup"
                  id="No Syrup"
                  onChange={handleChange}
                  checked={formData.syrup === "No Syrup"}
                />
                <label htmlFor="No Syrup">No Syrup</label>
              </div>
              <div className="radio-container">
                <input
                  name="syrup"
                  type="radio"
                  value="Simple Syrup"
                  id="Simple Syrup"
                  onChange={handleChange}
                  checked={formData.syrup === "Simple Syrup"}
                />
                <label htmlFor="Simple Syrup">Simple Syrup</label>
              </div>
              <div className="radio-container">
                <input
                  name="syrup"
                  type="radio"
                  value="Vanilla"
                  id="Vanilla"
                  onChange={handleChange}
                  checked={formData.syrup === "Vanilla"}
                />
                <label htmlFor="Vanilla">Vanilla (+$0.75)</label>
              </div>
              <div className="radio-container">
                <input
                  name="syrup"
                  type="radio"
                  value="Caramel"
                  id="Caramel"
                  onChange={handleChange}
                  checked={formData.syrup === "Caramel"}
                />
                <label htmlFor="Caramel">Caramel (+$0.75)</label>
              </div>
              <div className="radio-container">
                <input
                  name="syrup"
                  type="radio"
                  value="Hazelnut"
                  id="Hazelnut"
                  onChange={handleChange}
                  checked={formData.syrup === "Hazelnut"}
                />
                <label htmlFor="Hazelnut">Hazelnut (+$0.75)</label>
              </div>
              <div className="radio-container">
                <input
                  name="syrup"
                  type="radio"
                  value="Mocha"
                  id="Mocha"
                  onChange={handleChange}
                  checked={formData.syrup === "Mocha"}
                />
                <label htmlFor="Mocha">Mocha (+$0.75)</label>
              </div>
            </fieldset>
          )}

          {item.muffinflavor && (
            <fieldset>
              <legend>Flavor (required)</legend>
              <br />
              <div className="radio-container">
                <input
                  name="muffinflavor"
                  type="radio"
                  value="Chocolate Chip"
                  id="Chocolate Chip"
                  onChange={handleChange}
                  checked={formData.muffinflavor === "Chocolate Chip"}
                />
                <label htmlFor="Chocolate Chip">Chocolate Chip</label>
              </div>
              <div className="radio-container">
                <input
                  name="muffinflavor"
                  type="radio"
                  value="Blueberry"
                  id="Blueberry"
                  onChange={handleChange}
                  checked={formData.muffinflavor === "Blueberry"}
                />
                <label htmlFor="Blueberry">Blueberry (+$0.75)</label>
              </div>
              <div className="radio-container">
                <input
                  name="muffinflavor"
                  type="radio"
                  value="Banana Nut"
                  id="Banana Nut"
                  onChange={handleChange}
                  checked={formData.muffinflavor === "Banana Nut"}
                />
                <label htmlFor="Banana Nut">Banana Nut</label>
              </div>
              <div className="radio-container">
                <input
                  name="muffinflavor"
                  type="radio"
                  value="Lemon Poppyseed"
                  id="Lemon Poppyseed"
                  onChange={handleChange}
                  checked={formData.muffinflavor === "Lemon Poppyseed"}
                />
                <label htmlFor="Lemon Poppyseed">
                  Lemon Poppyseed (+$0.75)
                </label>
              </div>
              <div className="radio-container">
                <input
                  name="muffinflavor"
                  type="radio"
                  value="Pumpkin"
                  id="Pumpkin"
                  onChange={handleChange}
                  checked={formData.muffinflavor === "Pumpkin"}
                />
                <label htmlFor="Pumpkin">Pumpkin (+$0.75)</label>
              </div>
            </fieldset>
          )}

          {item.bagelflavor && (
            <fieldset>
              <legend>Flavor (required)</legend>
              <br />
              <div className="radio-container">
                <br />
                <input
                  name="bagelflavor"
                  type="radio"
                  value="Plain"
                  id="Plain"
                  onChange={handleChange}
                  checked={formData.bagelflavor === "Plain"}
                />
                <label htmlFor="Plain">Plain</label>
              </div>
              <div className="radio-container">
                <input
                  name="bagelflavor"
                  type="radio"
                  value="Everything"
                  id="Everything"
                  onChange={handleChange}
                  checked={formData.bagelflavor === "Everything"}
                />
                <label htmlFor="Everything">Everything</label>
              </div>
              <div className="radio-container">
                <input
                  name="bagelflavor"
                  type="radio"
                  value="Sesame"
                  id="Sesame"
                  onChange={handleChange}
                  checked={formData.bagelflavor === "Sesame"}
                />
                <label htmlFor="Sesame">Sesame</label>
              </div>
              <div className="radio-container">
                <input
                  name="bagelflavor"
                  type="radio"
                  value="Poppyseed"
                  id="Poppyseed"
                  onChange={handleChange}
                  checked={formData.bagelflavor === "Poppyseed"}
                />
                <label htmlFor="Poppyseed">Poppyseed</label>
              </div>
              <div className="radio-container">
                <input
                  name="bagelflavor"
                  type="radio"
                  value="Blueberry"
                  id="Blueberry"
                  onChange={handleChange}
                  checked={formData.bagelflavor === "Blueberry"}
                />
                <label htmlFor="Blueberry">Blueberry (+$0.75)</label>
              </div>
              <div className="radio-container">
                <input
                  name="bagelflavor"
                  type="radio"
                  value="Cinnamon Crunch"
                  id="Cinnamon Crunch"
                  onChange={handleChange}
                  checked={formData.bagelflavor === "Cinnamon Crunch"}
                />
                <label htmlFor="Cinnamon Crunch">
                  Cinnamon Crunch (+$0.75)
                </label>
              </div>
            </fieldset>
          )}

          {item.croissantflavor && (
            <fieldset>
              <legend>Flavor (required)</legend>
              <br />
              <div className="radio-container">
                <input
                  name="croissantflavor"
                  type="radio"
                  value="Butter"
                  id="Butter"
                  onChange={handleChange}
                  checked={formData.croissantflavor === "Butter"}
                />
                <label htmlFor="Butter">Butter</label>
              </div>
              <div className="radio-container">
                <input
                  name="croissantflavor"
                  type="radio"
                  value="Chocolate"
                  id="Chocolate"
                  onChange={handleChange}
                  checked={formData.croissantflavor === "Chocolate"}
                />
                <label htmlFor="Chocolate">Chocolate (+$0.75)</label>
              </div>
            </fieldset>
          )}
          <div className="menu-item-modal-btn">
            <button className="add-to-cart-btn">Add To Cart</button>
          </div>
        </form>
      </div>
    </div>
  );
}
