import React from "react";

export default function TopSearchbar(props: any) {
  const setText = (text: string) => {
    props.onChange(text);
  };
  return (
    <div
      style={{ fontFamily: "General Sans Variable" }}
      className="flex items-center text-[18px] md:text-[#7B7B7B] gap-5 md:w-[380px] w-[260px] border border-gray-700 md:border-gray-200 rounded-full py-2 px-5"
    >
      <span className="flex-shrink-0 text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
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
      </span>
      <input
        value={props.value ? props.value : ""}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
        type="text"
        name="text"
        className="w-full outline-none bg-transparent"
        placeholder="Enter pokemon name"
      />
    </div>
  );
}
