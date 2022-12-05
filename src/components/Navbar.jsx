import { async } from "@firebase/util";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-3xl md:text-4xl font-bold cursor-pointer ">
          &lt; NATI &#47;&gt;
        </h1>
      </Link>
      
      {user?.email ? (
        <div >
          <Link to="/account">
            <button className="text-white pr-4">Account</button>
          </Link>

         
            <button onClick={handleLogout} className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
              Logout
            </button>
          
        </div>
      ) : (
        <div className="flex items-center">
          <Link to="/search" >
            <FaSearch className="text-red-600 h-[60px] w-[33px] mx-5 "/>
          </Link>
          <Link to="/login">
            <button className="text-white pr-4"> Sign in</button>
          </Link>

          <Link to="/signup">
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
