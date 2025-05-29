"use client";
import { menuItems } from "@/constants/menuItems";
import { useBreakpoints } from "@/hooks";
import Image from "next/image";
import { useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { SideMenuItem } from "./SidebarMenuItem";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isMd } = useBreakpoints();

  const isMdCloseSideBar = () => {
    if (isMd) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <div
        className=" fixed z-50 text-white p-1  h-full w-[40px] left-0 top-0
          bg-gray-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <IoIosArrowDropleftCircle size={35} className="md:hidden" />
        ) : (
          <IoIosArrowDroprightCircle size={35} className="md:hidden" />
        )}
      </div>

      <div
        id="menu"
        className={`
          bg-gray-900 min-h-screen z-40 text-slate-300 fixed top-0 transform transition-transform duration-300 ease-in-out left-10
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:w-64
        `}
        style={{ width: "300px" }}
      >
        <div id="profile" className="mt-6 px-6 py-10 pl-0">
          <p className="text-slate-500 pb-2">Bienvenidos</p>
          <a className="inline-flex space-x-2 items-center">
            <span>
              <Image
                className="rounded-full w-8 h-8"
                width={50}
                height={50}
                src="/assets/images/logo.png"
                alt="User Avatar"
              />
            </span>
            <span className="text-sm md:text-base font-bold">
              Franco Herrera
            </span>
          </a>
        </div>
        <div id="nav" className="w-full px-6 pl-0">
          {menuItems.map((item) => (
            <SideMenuItem
              {...item}
              key={item.path}
              onClickItem={isMdCloseSideBar}
            />
          ))}
        </div>
      </div>
    </>
  );
};
