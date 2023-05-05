import React from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";

export default function TopLogo() {
  const { currentTheme } = React.useContext(ThemeContext);
  return (
    <Link to="/">
      <h1
        className="text-[28px] font-[600] text-[#000000]"
        style={{ fontFamily: "Clash Display Variable" }}
      >
        Pokè
        <span className="mx-1" style={{ color: currentTheme }}>
          book
        </span>
      </h1>
    </Link>
  );
}
