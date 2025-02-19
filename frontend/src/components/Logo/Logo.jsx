import React from "react";
import "./Logo.scss"; // Import custom CSS
import { Bed } from "lucide-react"; // Icon from Lucide

const Logo = () => {
  return (
    <div className="logo-container">
      <Bed className="logo-icon" />
      <span className="logo-text">StayEase</span>
    </div>
  );
};

export default Logo;
