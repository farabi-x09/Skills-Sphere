"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/img/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userData = authClient.useSession();
  const user = userData.data?.user;
  console.log(user);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-b px-4 py-3 bg-white sticky top-0 z-50">
      <div className="flex flex-wrap justify-between items-center w-11/12 mx-auto ">
        
        {/* Logo Section */}
        <div className="flex gap-2 items-center">
          <Image
            src={logo}
            alt="logo"
            loading="eager"
            width={50}
            height={50}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-2xl">SkillSphere</h3>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          <li>
            <NavLink href={"/"} className="hover:text-primary transition-colors">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink href={"/courses"} className="hover:text-primary transition-colors">
              All Courses
            </NavLink>
          </li>
          <li>
            <NavLink href={"/profile"} className="hover:text-primary transition-colors">
              My Profile
            </NavLink>
          </li>
        </ul>

        {/* Desktop Auth Links */}
        {/* <div className="hidden md:flex items-center gap-2.5 text-sm font-medium">
          <NavLink href={"/signin"} className="px-4 py-2 border rounded-md hover:bg-gray-50 transition-colors">
            SignIn
          </NavLink>
      
          <NavLink href={"/register"} className="px-4 py-2 border rounded-md hover:bg-gray-50 transition-colors ">
            Register
          </NavLink>
        </div> */}

         {user ? (
      <div className="hidden md:flex  gap-2.5 text-sm font-medium">
        <Avatar>
          <Avatar.Image src={user?.image || ""} alt={user?.name || "User Avatar"} />
          <Avatar.Fallback>{user?.name ? user.name.charAt(0) : "U"}</Avatar.Fallback>
        </Avatar>
        <button
          onClick={() => {
            authClient.signOut(); 
            toggleMenu();
          }}
          className="w-full text-center px-2 py-2 border rounded-md cursor-pointer hover:bg-gray-50 transition-colors"
        >
          Logout
        </button>
      </div>
    ) : (
      <div className=" hidden md:flex  gap-4 text-sm font-medium">
        <NavLink href={"/signin"} className="w-full text-center px-2 py-2 border rounded-md" onClick={toggleMenu}>
          SignIn
        </NavLink>
        <NavLink href={"/register"} className="w-full text-center px-2 py-2 border rounded-md" onClick={toggleMenu}>
          Register
        </NavLink>
      </div>
    )}

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl p-2 rounded focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <IoClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 border-t pt-4 pb-4 flex flex-col gap-5 w-11/12 mx-auto bg-white">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            <li>
              <NavLink href={"/"} className="hover:text-primary transition-colors" onClick={toggleMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink href={"/courses"} className="hover:text-primary transition-colors" onClick={toggleMenu}>
                All Courses
              </NavLink>
            </li>
            <li>
              <NavLink href={"/profile"} className="hover:text-primary transition-colors" onClick={toggleMenu}>
                My Profile
              </NavLink>
            </li>
          </ul>
        
        {user ? (
      <div className="flex flex-col gap-2.5 text-sm font-medium">
        <Avatar>
          <Avatar.Image src={user?.image || ""} alt={user?.name || "User Avatar"} />
          <Avatar.Fallback>{user?.name ? user.name.charAt(0) : "U"}</Avatar.Fallback>
        </Avatar>
        <button
          onClick={() => {
            authClient.signOut(); 
            toggleMenu();
          }}
          className="w-full text-center py-2 border rounded-md cursor-pointer hover:bg-gray-50 transition-colors"
        >
          Logout
        </button>
      </div>
    ) : (
      <div className="flex flex-col gap-2.5 text-sm font-medium">
        <NavLink href={"/signin"} className="w-full text-center py-2 border rounded-md" onClick={toggleMenu}>
          SignIn
        </NavLink>
        <NavLink href={"/register"} className="w-full text-center py-2 border rounded-md" onClick={toggleMenu}>
          Register
        </NavLink>
      </div>
    )}
   
          
            
        </div>
      )}
    </nav>
  );
};

export default Navbar;