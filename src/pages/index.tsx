import React from "react";
import Logo from "../components/homeview/Logo";
import Name from "../components/homeview/Name";
import Description from "../components/homeview/Description";
import Searchbar from "../components/homeview/Searchbar";
import ViewLink from "../components/homeview/ViewLink";
import { useAppContext } from "../context/AppContext";
import Loading from "../components/elements/Loading";

export default function App() {
  const { isLoading } = useAppContext();
  return (
    <div className="h-screen flex bg-[#F1F1F1] justify-center items-center w-full">
      {isLoading ? (
        <div className=" flex flex-col justify-center items-center">
          <Loading />
        </div>
      ) : (
        <div className=" flex flex-col justify-center items-center">
          <Logo />
          <Name />
          <Description />
          <Searchbar />
          <ViewLink />
        </div>
      )}
    </div>
  );
}
