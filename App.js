import React from "react";
import ReactDOM from "react-dom/client";

/*
 * Header
 *  - Logo
 *  - NavItems
 * Body
 *  - Search
 *  - RestaurantContainer
 *   - RestaurantCard
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 * */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="data:image/jpeg;base64,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"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search" />
        <button className="search-btn">Search</button>
      </div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
