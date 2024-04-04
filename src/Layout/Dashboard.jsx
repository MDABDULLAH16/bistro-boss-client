import React from "react";
import { FaShoppingCart, FaHome } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa6";
import { IoIosWallet } from "react-icons/io";
import { IoCalendarNumber } from "react-icons/io5";
import { MdMenu, MdShop2 } from "react-icons/md";

import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex m-0 ">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu">
          <li>
            <NavLink
              className="  my-2 flex items-center uppercase "
              to="/dashboard/userHome"
            >
              <FaHome className="mr-3 text-2xl"></FaHome>User Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="   my-2 flex items-center uppercase "
              to="/dashboard/reservation"
            >
              <FaCalendar className="mr-3 text-2xl"></FaCalendar>reservation
            </NavLink>
          </li>
          <li>
            <NavLink
              className="   my-2 flex items-center uppercase "
              to="/dashboard/paymentHistory"
            >
              <IoIosWallet className="mr-3 text-2xl" />
              payment history
            </NavLink>
          </li>
          <li>
            <NavLink
              className="   my-2 flex items-center uppercase "
              to="/dashboard/cart"
            >
              <FaShoppingCart className="mr-3 text-2xl"></FaShoppingCart>My Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              className="   my-2 flex items-center uppercase "
              to="/dashboard/addReview"
            >
              <FaShoppingCart className="mr-3 text-2xl"></FaShoppingCart>add
              review
            </NavLink>
          </li>
          <li>
            <NavLink
              className="   my-2 flex items-center uppercase "
              to="/dashboard/myBooking"
            >
              <IoCalendarNumber className="mr-3 text-2xl" />
              my booking
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink className="   my-2 flex items-center uppercase " to="/">
              <FaHome className="mr-3 text-2xl" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="   my-2   flex items-center uppercase " to="/">
              <MdMenu className="mr-3 text-2xl" />
              menu
            </NavLink>
          </li>
          <li>
            <NavLink className="   my-2   flex items-center uppercase " to="/">
              <MdShop2 className="mr-3 text-2xl" />
              shop
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 min-h-screen bg-[#F6F6F6] p-0 m-0">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
