import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ width: "100%", height: "auto" }}>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-around",
          alignItems: 'center'
        }}
      >
        <div style={{
        display: "flex",
        width: "50%",
      }}>
        <h1>Logo</h1>
        </div>
        <div style={{
          display: "flex",
          width: "50%",
          justifyContent: "space-around",
        }}>
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/contact">Contact</Link>
        </div>
      </div>
      <Outlet/>
    </div>
  );
};

export default Navbar;
