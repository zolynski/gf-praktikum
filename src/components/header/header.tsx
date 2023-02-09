import React from "react";
import './header.css';
import logo from "../../assets/brand-symbol.svg";

/**
 * Header component showing the brand logo.
 */
export const Header: React.FunctionComponent = () => {
  return (
    <div className="Header">
      <img src={logo} className="Header-logo" alt="" />
    </div>
  );
};
