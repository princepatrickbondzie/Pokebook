import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useDrawer } from "../../../context/DrawerContext";
import { ThemeContext } from "../../../context/ThemeContext";
import { Tab } from "@headlessui/react";

function classNames(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

const Drawer = () => {
  const { currentTheme } = React.useContext(ThemeContext);
  const { isDrawerOpen, drawerContent, closeDrawer } = useDrawer();

  return (
    <>
      <div
        className={`fixed inset-0 z-50 transition-opacity ${
          isDrawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-gray-500 opacity-75"
          onClick={closeDrawer}
        />
      </div>
      <div
        className={`fixed inset-y-0 right-0 z-50 flex-shrink-0 xl:w-[24rem] lg:w-[28rem] md:w-[32rem] w-[80%] transition transform ${
          isDrawerOpen ? "translate-x-0 ease-out" : "translate-x-full ease-in"
        }`}
      >
        {!isDrawerOpen ? (
          <div>Drawer not available...</div>
        ) : (
          <div className="flex flex-col h-full p-3 overflow-y-auto bg-white shadow">
            <div
              style={{ backgroundColor: currentTheme }}
              className="px-4 py-3 rounded-md shadow-inner border-gray-200 md:h-[40%] h-[35%]"
            >
              <button
                onClick={closeDrawer}
                className="bg-white mb-2 shadow-md p-2.5 flex justify-center items-center rounded-md"
              >
                <BsArrowLeft />
              </button>
              <div className="w-full h-[75%] flex justify-center items-center">
                <img
                  className="h-[12rem] w-[12rem] mt-16"
                  src={drawerContent.img}
                  alt={drawerContent && drawerContent.name}
                />
              </div>
            </div>
            <div className="relative tab-list-bg flex flex-col justify-center items-center pt-8">
              <div className="">
                <h1 className="text-4xl font-semibold capitalize text-gray-900">
                  {drawerContent && drawerContent.name}
                </h1>
              </div>
              <div className="flex my-3">
                <button className="bg-[#F1F1F1] px-3 py-0.5 rounded-full mx-1 capitalize text-xs">
                  {drawerContent.types.one}
                </button>
                <button className="bg-[#F1F1F1] px-3 py-0.5 rounded-full mx-1 capitalize text-xs">
                  {drawerContent.types.two}
                </button>
              </div>
              <div className="w-full flex flex-col justify-center items-center">
                <Tab.Group>
                  <Tab.Panels className="">
                    <Tab.Panel>
                      <div className="bg-white w-full flex justify-center items-center shadow-md py-2">
                        <h1 className="font-bold text-lg">About</h1>
                      </div>
                      <div className="tab-list-bg lg:mt-2 mt-8 w-full flex justify-center items-center">
                        <ul className="flex flex-col">
                          <li className="flex py-1 border-b">
                            <h3 className="mx-2">Height</h3>{" "}
                            <p className="font-bold mx-3">
                              {drawerContent.about.height}.0m
                            </p>
                          </li>
                          <li className="flex py-1 border-b">
                            <h3 className="mx-2">Weight</h3>{" "}
                            <p className="font-bold mx-3">
                              {drawerContent.about.weight}.0Kg
                            </p>
                          </li>
                          <li className="flex py-1 border-b">
                            <h3 className="mx-2">Abilities</h3>{" "}
                            <div className="font-medium ml-5">
                              <ul className="list-disc">
                                {drawerContent.about.abilities.map(
                                  (ab: any, idx: any) => (
                                    <li>
                                      <b key={idx}>{ab.ability.name}</b>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="bg-white w-full flex justify-center items-center shadow-md py-2">
                        <h1 className="font-bold text-lg">Stats</h1>
                      </div>
                      <div className="tab-list-bg lg:mt-2 mt-8 w-full flex justify-center items-center">
                        <ul className="flex flex-col w-[20rem] text-right justify-center">
                          {drawerContent.stats.map((stat: any, idx: any) => (
                            <li
                              key={idx}
                              className="flex py-1 border-b w-full text-right justify-end items-center"
                            >
                              <h3 className="mx-2 capitalize">
                                {stat.stat.name}
                              </h3>
                              <div className="w-[10rem] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                <div
                                  style={{ width: `${stat.base_stat}%` }}
                                  className="bg-gray-800 h-2.5 rounded-full dark:bg-gray-300"
                                ></div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="bg-white w-full flex justify-center items-center shadow-md py-2">
                        <h1 className="font-bold text-lg">Similar</h1>
                      </div>
                      <div className="tab-list-bg lg:mt-2 mt-8 flex flex-row justify-evenly items-center">
                        <div
                          style={{
                            boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.06)",
                          }}
                          className="w-[8rem] h-[7rem] mb-5 mx-2 p-2 flex flex-col justify-between items-center text-center bg-[#FFFFFF] rounded-2xl"
                        >
                          <div className="bg-[#F1F1F1] rounded-t-lg w-full h-[80%] flex justify-center items-center">
                            <img
                              src={drawerContent.img}
                              alt={drawerContent.name}
                              className="h-[120%] w-[70%] mb-4"
                            />
                          </div>
                          <h4 className="text-[15px] font-[600] leading-7">
                            {drawerContent.name}
                          </h4>
                        </div>
                        <div
                          style={{
                            boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.06)",
                          }}
                          className="w-[8rem] h-[7rem] mb-5 mx-2 p-2 flex flex-col justify-between items-center text-center bg-[#FFFFFF] rounded-2xl"
                        >
                          <div className="bg-[#F1F1F1] rounded-t-lg w-full h-[80%] flex justify-center items-center">
                            <img
                              src={drawerContent.img}
                              alt={drawerContent.name}
                              className="h-[120%] w-[70%] mb-4"
                            />
                          </div>
                          <h4 className="text-[15px] font-[600] leading-7">
                            {drawerContent.name}
                          </h4>
                        </div>
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>
                  <Tab.List className="border mt-4 w-[18rem] bg-gray-200 rounded-full h-10 shadow-inner flex justify-between px-1.5 py-2 items-center">
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          "px-5 py-1.5 rounded-full text-sm font-semibold",
                          selected
                            ? "bg-white text-black shadow"
                            : "text-gray-700"
                        )
                      }
                    >
                      About
                    </Tab>
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          "px-5 py-1.5 rounded-full text-sm font-semibold",
                          selected
                            ? "bg-white text-black shadow"
                            : "text-gray-700"
                        )
                      }
                    >
                      Stats
                    </Tab>
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          "px-5 py-1.5 rounded-full text-sm font-semibold",
                          selected
                            ? "bg-white text-black shadow"
                            : "text-gray-700"
                        )
                      }
                    >
                      Similar
                    </Tab>
                  </Tab.List>
                </Tab.Group>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Drawer;
