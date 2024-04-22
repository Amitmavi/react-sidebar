import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";

import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { BiSolidDiscount } from "react-icons/bi";
import { FaSearchDollar, FaShare } from "react-icons/fa";
import { FcMoneyTransfer } from "react-icons/fc";
import { GiMoneyStack } from "react-icons/gi";
import { GoAlertFill } from "react-icons/go";
import {  MdOutlineManageSearch, MdOutlineMergeType } from "react-icons/md";
import { RiBarChartGroupedLine } from "react-icons/ri";

import SidebarMenu from "./SidebarMenu";
const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },

  {
    path: "/Student-information",
    name: "Fees Collection",
    icon: <FaUser />,
    subRoutes: [
   
      {
        path: "/Student-add",
        name: "Collect Fees",
        icon: <GiMoneyStack />,
      },
      {
        path: "/online-add",
        name: "Search Fess Payment",
        icon: <MdOutlineManageSearch />,
      },
      {
        path: "/online-add",
        name: "Search Due Fess",
        icon: <FaSearchDollar />,
      },
      {
        path: "/online-add",
        name: "Fess Master",
        icon: <FcMoneyTransfer />,
      },
      {
        path: "/online-add",
        name: "Fess Group",
        icon: <RiBarChartGroupedLine />,
      },
      {
        path: "/online-add",
        name: "Fess Type",
        icon: <MdOutlineMergeType />,
      },
      {
        path: "/online-add",
        name: "Fess Discount",
        icon: <BiSolidDiscount />,
      },
      {
        path: "/online-add",
        name: "Fess Carry Forword",
        icon: <FaShare />,
      },
      {
        path: "/online-add",
        name: "Fess Reminder",
        icon: <GoAlertFill />,
      },
    ],
  },


  {
    path: "/file-manager",
    name: "Expance",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Add Expance ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "Search Expance",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Head Expance",
        icon: <FaMoneyBill />,
      },
    ],
  },

  
  {
    path: "/file-manager",
    name: "Human Resources",
    icon: <FaUser />,
    subRoutes: [
      {
        path: "/settings/Student-add",
        name: "Payroll ",
        icon: <FaUser />,
      },
    
    ],
  },

  {
    path: "/settings",
    name: "Settings",
    icon: <BiCog />,
   
  },
  {
    path: "/saved",
    name: "Saved",
    icon: <AiFillHeart />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  PulseZest School
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
         
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
