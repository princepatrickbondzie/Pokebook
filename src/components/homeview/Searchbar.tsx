import React from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

export default function Searchbar() {
  const [text, setText] = React.useState<string>("");
  const { currentTheme } = React.useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <div
      style={{ backgroundColor: currentTheme }}
      className="flex justify-center items-center mt-9 md:w-[536px] lg:h-[64px] w-[250px] h-[45px] rounded-full lg:p-2 p-1"
    >
      <div className="bg-white w-full h-full rounded-full flex items-center gap-4 px-3">
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          name="text"
          value={text}
          className="w-full outline-none bg-transparent h-full rounded-full lg:px-2 px-1"
          placeholder="Enter pokemon name"
        />
        <button
          onClick={() => navigate("/pokemons", { state: text })}
          style={{ backgroundColor: currentTheme }}
          type="button"
          className="flex-shrink-0 border lg:p-2 p-1 rounded-full text-white shadow"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="lg:w-6 lg:h-6 w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

// * Rectangle 1 */

// position: absolute;
// width: 536px;
// height: 81px;
// left: 452px;
// top: 590px;

// background: #E85382;
// box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.08);
// border-radius: 60px;
