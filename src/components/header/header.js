import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assest/crown.svg";

export default function Header() {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <di className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link className="option">CONTACT</Link>
      </di>
    </div>
  );
}
