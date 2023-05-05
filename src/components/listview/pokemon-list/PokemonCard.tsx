import React from "react";
import { BsEyeFill } from "react-icons/bs";
import { ThemeContext } from "../../../context/ThemeContext";
import { useDrawer } from "../../../context/DrawerContext";

export default function PokemonCard(props: any) {
  const { currentTheme } = React.useContext(ThemeContext);
  const { openDrawer } = useDrawer();

  return (
    <div
      key={props.key}
      style={{ boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.06)" }}
      className="w-60 h-56 mb-5 p-2 flex flex-col justify-between items-center text-center bg-[#FFFFFF] rounded-2xl"
    >
      <div className="bg-[#F1F1F1] rounded-t-lg w-full h-[50%] flex justify-center items-center">
        <img
          src={props.poke.img}
          alt={props.poke.name}
          className="h-[120%] w-[70%] mb-8"
        />
      </div>
      <h4 className="text-[20px] font-[600] leading-7">{props.poke.name}</h4>
      <div className="flex py-2">
        <button className="bg-[#F1F1F1] px-3 py-0.5 rounded-full mx-2 capitalize text-xs">
          {props.poke.types.one}
        </button>
        <button className="bg-[#F1F1F1] px-3 py-0.5 rounded-full mx-2 capitalize text-xs">
          {props.poke.types.two}
        </button>
      </div>
      <button
        onClick={() => openDrawer(props.poke)}
        style={{ backgroundColor: currentTheme }}
        className="w-full cursor-pointer flex-row gap-3 text-sm px-4 py-1.5 text-white flex justify-between items-center border rounded-xl"
      >
        <span className="capitalize">View {props.poke.name}</span>
        <BsEyeFill />
      </button>
    </div>
  );
}
