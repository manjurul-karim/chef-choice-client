/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Header = () => {
  const { user, logedOut } = useContext(AuthContext);

  const handleLogedOut = () => {
    logedOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

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

        {/* <li>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Profilepicture
          </NavLink>
        </li> */}
        <li>
          <NavLink className='flex gap-2'>
            {user ? (
              <>
                <div>
                  <div
                    className="tooltip  tooltip-left"
                    data-tip={user.displayName}
                  >
                    <span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.photoURL}
                        alt=""
                      />
                    </span>
                  </div>
                </div>
                <button onClick={handleLogedOut} className="btn btn-sm btn-outline btn-primary lowercase">
                  signOut
                </button>
              </>
            ) : (
              <Link to="/login">login</Link>
            )}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
