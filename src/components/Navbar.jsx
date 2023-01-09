
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { FaSearch } from "react-icons/fa";
import "../nati.css"
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
    
    <div className=" flex items-center justify-between p-4 z-[100] w-full absolute nav">
      <div>

      <Link to="/">
        <h1 className="text-red-600 text-3xl md:text-4xl font-bold cursor-pointer nav-logo">
          &lt; NATI movies&#47;&gt;
        </h1>
      </Link>
      </div>
      
            <div className="flex items-center justify-between">
          <Link to="/search" >
            
            <i className=" nav-search">
            <FaSearch className="text-red-600 h-[60px] w-[33px] mx-5 nav-search " />

            </i>
          </Link>
      
      {user?.email ? (
        <div className="nav-c">
          <Link to="/account">
            <button className="n">{user?.email[0].toUpperCase()}</button>
          </Link>

         
            <button onClick={handleLogout} className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white nav-logout">
              Logout
            </button>
          
        </div>
      ) : (
        <div className="flex items-center nav-c">
         
          <Link to="/login">
            <button className="text-white pr-4 nav-s "> Sign in</button>
          </Link>

          <Link to="/signup">
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white nav-s">
              Sign Up
            </button>
          </Link>
        </div>
      )}

</div>
       
    </div>
  );
};

export default Navbar;
