import React, { useState } from "react";
import { SIDEBAR_LIST } from "../utils/Constant";
import SideArrow from "../assets/right-arrow.png";
import { motion } from "framer-motion";
const Sidebar = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <div
        className="hidden min-[768px]:flex w-[60px] hover:w-[200px] fixed z-[100] sidebar_gradient_ground flex-col items-start px-5 py-20 overflow-y-hidden"
        style={{ height: "calc(100vh - 80px)" }}
      >
        {SIDEBAR_LIST.map((sidebar, idx) => (
          <div key={sidebar.label} className="flex items-center pt-5 menu-text">
            <div className="rounded-full bg-white w-[32px] h-[32px] p-1">
              <img
                src={sidebar.img}
                alt={sidebar.label}
                className="h-full w-full"
              />
            </div>
            <button key={idx} className="text-primary font-[500]  mx-3">
              {sidebar.label}
            </button>
          </div>
        ))}
      </div>
      <motion.div
        className={`flex fixed min-[930px]:invisible flex-col w-[200px] justify-start items-start pt-20 ${
          show ? "visible" : ""
        } cursor-pointer z-[1000]`}
        style={{ height: "calc(100vh - 80px)" }}
        onClick={() => setShow(!show)}
      >
        <div className="h-32">
        {show && SIDEBAR_LIST.map((sidebar, idx) => (
          <div key={sidebar.label} className="flex items-center pt-5 menu-text">
            <div className="rounded-full bg-white w-[32px] h-[32px] p-1">
              <img
                src={sidebar.img}
                alt={sidebar.label}
                className="h-full w-full"
              />
            </div>
            <button key={idx} className="text-primary font-[500]  mx-3">
              {sidebar.label}
            </button>
          </div>
        ))}
        </div>
        <img src={SideArrow} alt="side-menu" className={`w-[32px] h-[32px] mt-52 ${show? 'rotate-180': ''} `} />
      </motion.div>
    </>
  );
};

export default Sidebar;
