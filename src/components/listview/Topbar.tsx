import React from "react";
import TopLogo from "./TopLogo";
import TopSearchbar from "./TopSearchbar";
import Themebutton from "./Themebutton";

export default function Topbar(props: any) {
  return (
    <nav
      className="bg-[#FFFFFF] w-full md:h-16 h-14 flex justify-between px-4 items-center"
      style={{ boxShadow: " 0px 14px 24px rgba(0, 0, 0, 0.05)" }}
    >
      <TopLogo />
      <div className="md:block hidden">
        <TopSearchbar value={props.value} onChange={props.onChange} />
      </div>
      <Themebutton />
    </nav>
  );
}
