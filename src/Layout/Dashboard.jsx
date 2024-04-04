import React from "react";
import { FaShoppingCart, FaHome } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa6";
import { IoIosWallet } from "react-icons/io";
import { IoCalendarNumber } from "react-icons/io5";

import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul>
          <li>
            <NavLink
              className="ml-4 my-4 flex items-center uppercase "
              to="/dashboard/userHome"
            >
              <FaHome className="mr-3"></FaHome>User Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="ml-4 my-4 flex items-center uppercase "
              to="/dashboard/reservation"
            >
              <FaCalendar className="mr-3"></FaCalendar>reservation
            </NavLink>
          </li>
          <li>
            <NavLink
              className="ml-4 my-4 flex items-center uppercase "
              to="/dashboard/paymentHistory"
            >
              <IoIosWallet className="mr-3" />
              payment history
            </NavLink>
          </li>
          <li>
            <NavLink
              className="ml-4 my-4 flex items-center uppercase "
              to="/dashboard/cart"
            >
              <FaShoppingCart className="mr-3"></FaShoppingCart>My Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              className="ml-4 my-4 flex items-center uppercase "
              to="/dashboard/addReview"
            >
              <FaShoppingCart className="mr-3"></FaShoppingCart>add review
            </NavLink>
          </li>
          <li>
            <NavLink
              className="ml-4 my-4 flex items-center uppercase "
              to="/dashboard/myBooking"
            >
              <IoCalendarNumber className="mr-3" />
              my booking
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
