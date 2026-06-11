import React from "react";

// ============================================================
// LOGO COMPONENT
// Your logo PNG is loaded from: /public/images/logo.png
// Make sure your logo.png file is in the /public/images/ folder.
// The image will display at the right size automatically.
// ============================================================

const Logo = ({ size = "md", className = "" }) => {
  const logoSrc = "/images/logo.png";

  const heights = {
    sm: "h-12", // 36px  – mobile menu header
    md: "h-20", // 44px  – main navbar
    lg: "h-14", // 56px  – footer
  };

  return (
    <img
      src={logoSrc}
      alt="Eat With Ire"
      className={`${heights[size]} w-auto object-contain ${className}`}
    />
  );
};

export default Logo;
