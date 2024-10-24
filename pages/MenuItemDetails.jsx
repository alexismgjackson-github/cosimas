import "./MenuItemDetails.css";

import { useState } from "react";

export default function MenuItemDetails({ ...item }) {
  const [formData, setFormData] = useState({
    id: item.id,
    quantity: 1,
    name: item.name,
    price: item.price,
    description: item.description,
    size: "",
    temperature: "",
    caffeine: "",
    milk: "",
    syrup: "",
    muffinflavor: "",
    bagelflavor: "",
  });

  function incrementByOne() {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        quantity: prevFormData.quantity + 1,
      };
    });
  }

  function decrementByOne() {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        quantity: prevFormData.quantity - 1,
      };
    });
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });

    console.log(event.target.value);
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
                  value="Large (16oz) (+$0.75)"
                  id="Large (16oz) (+$0.75)"
                  onChange={handleChange}
                  checked={formData.size === "Large (16oz) (+$0.75)"}
                />
                <label htmlFor="Large (16oz) (+$0.75)">
                  Large (16oz) (+$0.75)
                </label>
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
                  value="Double Shot (+$1.25)"
                  id="Double Shot (+$1.25)"
                  onChange={handleChange}
                  checked={formData.caffeine === "Double Shot (+$1.25)"}
                />
                <label htmlFor="Double Shot (+$1.25)">
                  Double Shot (+$1.25)
                </label>
              </div>
              <div className="radio-container">
                <input
                  name="caffeine"
                  type="radio"
                  value="Triple Shot (+$1.75)"
                  id="Triple Shot (+$1.75)"
                  onChange={handleChange}
                  checked={formData.caffeine === "Triple Shot (+$1.75)"}
                />
                <label htmlFor="Triple Shot (+$1.75)">
                  Triple Shot (+$1.75)
                </label>
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
                  value="No Milk"
                  id="No Milk"
                  onChange={handleChange}
                  checked={formData.milk === "No Milk"}
                />
                <label htmlFor="No Milk">No Milk</label>
              </div>
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
                  value="Almond (+$0.75)"
                  id="Almond (+$0.75)"
                  onChange={handleChange}
                  checked={formData.milk === "Almond (+$0.75)"}
                />
                <label htmlFor="Almond (+$0.75)">Almond (+$0.75)</label>
              </div>
              <div className="radio-container">
                <input
                  name="milk"
                  type="radio"
                  value="Oat (+$0.75)"
                  id="Oat (+$0.75)"
                  onChange={handleChange}
                  checked={formData.milk === "Oat (+$0.75)"}
                />
                <label htmlFor="Oat (+$0.75)">Oat (+$0.75)</label>
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
                  value="Vanilla (+$0.75)"
                  id="Vanilla (+$0.75)"
                  onChange={handleChange}
                  checked={formData.syrup === "Vanilla (+$0.75)"}
                />
                <label htmlFor="Vanilla (+$0.75)">Vanilla (+$0.75)</label>
              </div>
              <div className="radio-container">
                <input
                  name="syrup"
                  type="radio"
                  value="Caramel (+$0.75)"
                  id="Caramel (+$0.75)"
                  onChange={handleChange}
                  checked={formData.syrup === "Caramel (+$0.75)"}
                />
                <label htmlFor="Caramel (+$0.75)">Caramel (+$0.75)</label>
              </div>
              <div className="radio-container">
                <input
                  name="syrup"
                  type="radio"
                  value="Hazelnut (+$0.75)"
                  id="Hazelnut (+$0.75)"
                  onChange={handleChange}
                  checked={formData.syrup === "Hazelnut (+$0.75)"}
                />
                <label htmlFor="Hazelnut (+$0.75)">Hazelnut (+$0.75)</label>
              </div>
              <div className="radio-container">
                <input
                  name="syrup"
                  type="radio"
                  value="Mocha (+$0.75)"
                  id="Mocha (+$0.75)"
                  onChange={handleChange}
                  checked={formData.syrup === "Mocha (+$0.75)"}
                />
                <label htmlFor="Mocha (+$0.75)">Mocha (+$0.75)</label>
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
                  value="Blueberry (+$0.75)"
                  id="Blueberry (+$0.75)"
                  onChange={handleChange}
                  checked={formData.muffinflavor === "Blueberry (+$0.75)"}
                />
                <label htmlFor="Blueberry (+$0.75)">Blueberry (+$0.75)</label>
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
                  value="Lemon Poppyseed (+$0.75)"
                  id="Lemon Poppyseed (+$0.75)"
                  onChange={handleChange}
                  checked={formData.muffinflavor === "Lemon Poppyseed (+$0.75)"}
                />
                <label htmlFor="Lemon Poppyseed (+$0.75)">
                  Lemon Poppyseed (+$0.75)
                </label>
              </div>
              <div className="radio-container">
                <input
                  name="muffinflavor"
                  type="radio"
                  value="Pumpkin (+$0.75)"
                  id="Pumpkin (+$0.75)"
                  onChange={handleChange}
                  checked={formData.muffinflavor === "Pumpkin (+$0.75)"}
                />
                <label htmlFor="Pumpkin (+$0.75)">Pumpkin (+$0.75)</label>
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
                  value="Blueberry (+$0.75)"
                  id="Blueberry (+$0.75)"
                  onChange={handleChange}
                  checked={formData.bagelflavor === "Blueberry (+$0.75)"}
                />
                <label htmlFor="Blueberry (+$0.75)">Blueberry (+$0.75)</label>
              </div>
              <div className="radio-container">
                <input
                  name="bagelflavor"
                  type="radio"
                  value="Cinnamon Crunch (+$0.75)"
                  id="Cinnamon Crunch (+$0.75)"
                  onChange={handleChange}
                  checked={formData.bagelflavor === "Cinnamon Crunch (+$0.75)"}
                />
                <label htmlFor="Cinnamon Crunch (+$0.75)">
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
                  value="Chocolate (+$0.75)"
                  id="Chocolate (+$0.75)"
                  onChange={handleChange}
                  checked={formData.croissantflavor === "Chocolate (+$0.75)"}
                />
                <label htmlFor="Chocolate (+$0.75)">Chocolate (+$0.75)</label>
              </div>
            </fieldset>
          )}
          <div className="modal-quantity-container">
            <button
              className="menu-item-modal-decrement-btn"
              type="button"
              aria-label="Decrease quantity"
              onClick={decrementByOne}
            >
              -
            </button>
            <span className="menu-item-modal-quantity">
              {formData.quantity}
            </span>
            <button
              className="menu-item-modal-increment-btn"
              type="button"
              aria-label="Increase quantity"
              onClick={incrementByOne}
            >
              +
            </button>
          </div>
          <div className="menu-item-modal-btn">
            <button className="add-to-cart-btn">
              Add To Cart - ${item.price}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
