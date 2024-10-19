import "./Menu.css";

export default function Menu() {
  return (
    <>
      <div className="menu-container">
        <div className="quick-drinks-container">
          <h1>Quick Drinks</h1>
          <div className="quick-drinks">
            <div className="menu-item">
              <div className="menu-item-header">
                <p className="menu-item-name">Iced Coffee</p>
                <span className="menu-item-price">$3.25</span>
              </div>
              <div className="menu-item-body">
                <p className="menu-item-description">
                  Drip brewed coffee over ice. Refreshing and smooth-tasting.
                </p>
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-item-header">
                <p className="menu-item-name">Drip Coffee</p>
                <span className="menu-item-price">$3.25</span>
              </div>
              <div className="menu-item-body">
                <p className="menu-item-description">
                  Drip brewed coffee. Less robust and smooth-tasting.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="specialty-drinks-container">
          <h1>Specialty Drinks</h1>
          <div className="specialty-drinks">
            <div className="menu-item">
              <div className="menu-item-header">
                <p className="menu-item-name">Latte</p>
                <span className="menu-item-price">$4.00</span>
              </div>
              <div className="menu-item-body">
                <p className="menu-item-description">
                  Espresso and steamed milk, topped with a thin layer of milk
                  foam. Mild flavour and a creamy texture.
                </p>
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-item-header">
                <p className="menu-item-name">Americano</p>
                <span className="menu-item-price">$3.75</span>
              </div>
              <div className="menu-item-body">
                <p className="menu-item-description">
                  Espresso in hot water. Rich, full flavour.
                </p>
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-item-header">
                <p className="menu-item-name">Cappuccino</p>
                <span className="menu-item-price">$4.00</span>
              </div>
              <div className="menu-item-body">
                <p className="menu-item-description">
                  Equal parts espresso, steamed milk, and foam. Rich, creamy
                  texture, and robust and bold flavour.
                </p>
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-item-header">
                <p className="menu-item-name">Cortado</p>
                <span className="menu-item-price">$4.00</span>
              </div>
              <div className="menu-item-body">
                <p className="menu-item-description">
                  Small amount of boiled milk, thin layer of milk foam and a
                  shot of espresso. Balanced, smooth flavour and creamy, velvety
                  texture.
                </p>
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-item-header">
                <p className="menu-item-name">Cold Brew</p>
                <span className="menu-item-price">$4.25</span>
              </div>
              <div className="menu-item-body">
                <p className="menu-item-description">
                  Ground coffee beans steeped in cold water for 24 hours.
                  Refreshing, smooth-tasting, low acidity and rich, full-bodied
                  flavour.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pastries-container">
          <h1>Pastries</h1>
          <div className="pastries">
            <div className="menu-item">
              <div className="menu-item-header">
                <p className="menu-item-name">Bagel</p>
                <span className="menu-item-price">$2.50</span>
              </div>
              <div className="menu-item-body">
                <p className="menu-item-description">6 Assorted flavours.</p>
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-item-header">
                <p className="menu-item-name">Muffin</p>
                <span className="menu-item-price">$2.75</span>
              </div>
              <div className="menu-item-body">
                <p className="menu-item-description">5 Assorted flavours.</p>
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-item-header">
                <p className="menu-item-name">Croissant</p>
                <span className="menu-item-price">$3.00</span>
              </div>
              <div className="menu-item-body">
                <p className="menu-item-description">2 Assorted flavours.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
