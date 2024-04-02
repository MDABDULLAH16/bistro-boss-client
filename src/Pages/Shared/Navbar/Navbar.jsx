import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import profileImg from "../../../assets/others/profile.png";
const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  console.log(user?.photoURL, user?.displayName);
  if (loading) {
    return <progress className="progress w-full"></progress>;
  }
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  const navLinkOption = (
    <div className="flex items-center font-bold text-2xl ">
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Oder Food</Link>
      </li>
      <li>
        <Link to="/secret">Secret</Link>
      </li>
    </div>
  );

  const userBtn = (
    <div className="flex items-center font-bold text-2xl list-none">
      <li className="mr-4">{user?.displayName}</li>
      <li className="">
        {user ? (
          <img
            className="w-16 h-16 rounded-full mr-4"
            src={user?.photoURL}
            alt=""
          />
        ) : (
          <img
            className="w-16 h-16 rounded-full mr-4"
            src={profileImg}
            alt=""
          />
        )}
      </li>

      {user ? (
        <>
          <button
            onClick={handleLogOut}
            className="btn btn-ghost font-bold text-2xl"
          >
            Log Out
          </button>
        </>
      ) : (
        <>
          <li>
            <Link className="mr-4" to="/login">
              Login
            </Link>
          </li>
        </>
      )}
    </div>
  );
  return (
    <div className="  mx-auto">
      <div className="navbar fixed z-10 bg-opacity-40 max-w-screen-xl  mx-auto  bg-indigo-600 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinkOption}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">BISTRO BOSS</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  px-1">{navLinkOption}</ul>
        </div>
        <div className="navbar-end ">{userBtn}</div>
      </div>
    </div>
  );
};

export default Navbar;
