import React from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function Name() {
  const { currentTheme } = React.useContext(ThemeContext);
  return (
    <h1
      className="text-[48px] leading-10 font-[600] mt-3 text-[#000000]"
      style={{ fontFamily: "Clash Display Variable" }}
    >
      Pokè
      <span className="mx-0.5" style={{ color: currentTheme }}>
        book
      </span>
    </h1>
  );
}
