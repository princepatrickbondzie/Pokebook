import React from "react";
import { Link } from "react-router-dom";

export default function ViewLink() {
  return (
    <Link
      to="/pokemons"
      style={{ fontFamily: "General Sans Variable", fontWeight: 500 }}
      className="mt-5 text-[18px] text-[#0D131A] leading-6 underline"
    >
      View all
    </Link>
  );
}
