import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ThemeContext } from "../../context/ThemeContext";

export default function Themebutton() {
  const [open, setOpen] = useState<boolean>(false);
  const cancelButtonRef = useRef(null);
  const { changeTheme, currentTheme } = React.useContext(ThemeContext);

  const switchTheme = (color: string) => {
    changeTheme(color);
    setOpen(false);
  };

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="rounded-full border md:h-10 h-5 md:w-10 w-5 md:p-1 p-0.5 cursor-pointer"
      >
        <div
          style={{ backgroundColor: currentTheme }}
          className="h-full w-[100%] border rounded-full"
        ></div>
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xs">
                  <div className="bg-white pt-2">
                    <div className="sm:flex sm:items-start">
                      <div className=" text-center sm:ml-0 sm:mt-0">
                        <Dialog.Title
                          as="h3"
                          className="text-base mb-2 font-semibold leading-6 text-gray-900"
                        >
                          Choose theme
                        </Dialog.Title>
                        <Dialog.Description className="w-[20rem] bg-[#F1F1F1] pb-4 border h-full">
                          <div className="mt-2 w-full h-full">
                            <div className="">
                              <button
                                onClick={() => switchTheme("primary")}
                                className="rounded-full border  sm:h-16 sm:w-16 h-10 w-10 sm:mx-3 mx-2 p-1 cursor-pointer"
                              >
                                <div
                                  style={{ backgroundColor: "#E85382" }}
                                  className="h-full w-[100%] border mx-2 rounded-full"
                                ></div>
                              </button>
                              <button
                                onClick={() => switchTheme("secondary")}
                                className="rounded-full border sm:h-16 sm:w-16 h-10 w-10 sm:mx-3 mx-2 p-1 cursor-pointer"
                              >
                                <div
                                  style={{ backgroundColor: "#39BADF" }}
                                  className="h-full w-[100%] border rounded-full"
                                ></div>
                              </button>
                              <button
                                onClick={() => switchTheme("tertiary")}
                                className="rounded-full border sm:h-16 sm:w-16 h-10 w-10 sm:mx-3 mx-2 p-1 cursor-pointer"
                              >
                                <div
                                  style={{ backgroundColor: "#E1A725" }}
                                  className="h-full w-[100%] border rounded-full"
                                ></div>
                              </button>
                            </div>
                          </div>
                        </Dialog.Description>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
