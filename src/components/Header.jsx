/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex  justify-between px-8 py-4 bg-gray-100">
      <h4 className="tex-2xl font-bold uppercase">
        {" "}
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          chef's Choice
        </span>
      </h4>
      <ul className="mr-2 md:flex gap-5">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Blog
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Profilepicture
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
