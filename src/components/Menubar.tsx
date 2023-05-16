import React, { useState } from "react";
import { MENU_LIST } from "../utils/Constant";
import menu from "../assets/main-menu.png";
import close from "../assets/x-button.png";

const Menubar = (props: { signInhandler: (args: boolean) => void }) => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="fixed top-0 left-0 z-[110] w-full h-11 md:h-20 p-5 flex items-center justify-between gradient_ground">
      <p className="text-[22px] font-[700] cursor-pointer">Pro OTT</p>
      <div className="hidden min-[768px]:flex items-center justify-between">
        <div className="flex mx-5 ">
          {MENU_LIST.map((menu: any, idx: number) => (
            <button
              key={idx}
              className={` text-primary text-[14px] font-[500] border-none bg-transparent px-3 ${
                idx === 1 ? "menu-text-active" : ""
              } menu-text`}
            >
              {menu}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search"
          className="outline-none w-[12.5rem] h-[3.125rem] p-5 rounded-[12px] border-[1px] border-cyan-400 focus:shadow-[0_0_9px_#fff] bg-transparent text-primary"
        />
        <div className="subscribe flex items-center m-5">
          <button className="border-none rounded-[12px] h-[3.125rem] text-primary font-[500] bg-red px-5">
            Subscribe
          </button>
          <button
            className="border-none rounded-[12px] h-[3.125rem] text-primary font-[500] bg-green ml-5 px-5"
            onClick={() => props.signInhandler(true)}
          >
            SignIn
          </button>
        </div>
      </div>
      {/* <img src={menu} alt="menu" className="block min-[930px]:hidden h-[32px] cursor-pointer" onClick={() => setToggle(!toggle)}/> */}
      <div className="flex min-[768px]:hidden flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            !toggle ? "hidden" : " flex"
          } p-6 bg-secondary absolute top-20 right-0 mx-4 my-2 minw-[140px] z-10 rounded-xl flex-col shadow-[0_0_9px_#000000] items-center`}
        >
          <ul className="list-none flex justify-end items-center flex-col gap-4">
            {MENU_LIST.map((link, id) => (
              <li
                key={id}
                className={`text-primary font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                {link}
              </li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="Search"
            className="outline-none w-[12.5rem] h-[3.125rem] p-5 rounded-[12px] border-[1px] border-cyan-400 focus:shadow-[0_0_9px_#fff] bg-transparent text-primary mt-3"
          />
          <div className="subscribe flex items-center m-5 min-[768px]:items-start">
            <button className="border-none rounded-[12px] h-[3.125rem] text-primary font-[500] bg-red px-5">
              Subscribe
            </button>
            <button
              className="border-none rounded-[12px] h-[3.125rem] text-primary font-[500] bg-green ml-5 px-5"
              onClick={() => {
                props.signInhandler(true);
                setToggle(!toggle);
              }}
            >
              SignIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
