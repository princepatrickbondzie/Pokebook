import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "../pages";
import Pokemons from "../pages/pokemons";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pokemons" element={<Pokemons />} />
      </Routes>
    </BrowserRouter>
  );
}
