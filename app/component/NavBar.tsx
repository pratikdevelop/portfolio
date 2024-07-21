'use client';
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {BsFillFilePersonFill} from 'react-icons/bs';
const NavBar = () => {
   const [nav, setNav] = useState(false);
   
  return (
    <>
      <header
        className="fixed w-full bg-transparent px-8 py-3 "
      >
        <nav className="flex justify-between items-center max-w-screen-xl">
          <div className="text-2xl drop-shadow-2xl font-extrabold  tracking-wide text-white">
            Port<span className="text-purple-600">Folio</span>
          </div>

          <div
            className="hidden justify-around items-center space-x-8 lg:flex"
          >
            <Link
              href={"/"}
              className="text-white  hover:text-purple-600 hover:border-b-1 hover:border-purple-500  text-sm tracking-wider font-semibold drop-shadow-2xl capitalize duration-300 
          ease-in-out"
            >
              Home
            </Link>

            <Link
              href={"#about"}
              className="text-sm tracking-wider font-semibold drop-shadow-2xl capitalize duration-300 
          ease-in-out hover:text-purple-600 hover:border-b-1 hover:border-purple-500 text-white "
            >
              About
            </Link>

            <Link
              href={"#skills"}
              className="text-sm tracking-wider font-semibold drop-shadow-2xl capitalize duration-300 
          ease-in-out hover:text-purple-600 hover:border-b-1 hover:border-purple-500  text-white "
            >
              Skills
            </Link>
            <Link
              href={"#project"}
              className="text-sm tracking-wider font-semibold drop-shadow-2xl capitalize duration-300 
          ease-in-out hover:text-purple-600 hover:border-b-1 hover:border-purple-500  text-white "
            >
              Project
            </Link>

            <Link
              href={"#contact"}
              className="block px-4 py-2 text-sm tracking-wider font-semibold drop-shadow-2xl capitalize hover:scale-105 transition-300 duration-300 ease-in-out  text-purple-600 hover:border-b-1 hover:bg-orange-500  hover:text-white  border-purple-500  border-2  shadow-xl hover:shadow-2xl rounded-full"
            >
              contact
            </Link>
          </div>

          <button onClick={()=>{setNav(true)}} className="flex items-center sm:hidden lg:order-1 cursor-pointer">
            <AiOutlineMenu size={25} />
          </button>
        </nav>
      </header>
      <div className={nav ? "fixed h-screen top-0 left-0  w-full sm:hidden bg-black/70 shadow-xl border-gray-600 ":""}>
        <div className={nav ? "fixed w-[75%]  h-screen bg-[#e5e7e7] top-0 left-0 bottom-0 p-10 ease-in-out duration-200 overflow-y-auto": "fixed left-[-100%] bottom-0 p-10 top-0 ease-in duration-500 "}>
          <div>
            <div className="flex items-center justify-between w-full">
              <div className="text-2xl drop-shadow-2xl font-extrabold  tracking-wide text-white">
                Port<span className="text-orange-400">folio</span>
              </div>
              <div onClick={()=>{setNav(false)}} className="rounded-full shadow-lg  shadow-gray-500 p-3">
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-500 my-4">
              <p className="w-[80%] sm:w-[90%] py-4">
                let's build some legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
          <div
            className="flex flex-ccapitalize transition-transform
          ease-in-out space-y-8"
          >
            <Link
              href={"/"}
              className="block text-white  hover:text-purple-600  text-sm tracking-wider font-semibold drop-shadow-2xl uppercase"
            >
              Home
            </Link>

            <Link
              href={"#about"}
              className="block text-sm tracking-wider font-semibold drop-shadow-2xl uppercase hover:text-purple-600 text-white "
            >
              About
            </Link>

            <Link
              href={"#skills"}
              className="block text-sm tracking-wider font-semibold drop-shadow-2xl uppercase hover:text-purple-600   text-white "
            >
              Skills
            </Link>
            <Link
              href={"#project"}
              className="block text-sm tracking-wider font-semibold drop-shadow-2xl uppercase hover:text-purple-600  text-white "
            >
              Project
            </Link>

            <Link
              href={"#contact"}
              className="block text-sm tracking-wider font-semibold drop-shadow-2xl uppercase hover:text-purple-600  text-white "
            >
              contact
            </Link>
          </div>
          </div>
          <div className="pt-20">
            < p className="uppercase tracking-widest text-[#5651e5] ">
              let's connect
            </p>
            <div className="flex items-center w-full pt-6 space-x-12 sm:w-[80%]">
              <div className="rounded-full shadow-xl shadow-gray-600 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn/>
              </div>
              <div className="rounded-full shadow-xl shadow-gray-600 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub/>
              </div>
              <div className="rounded-full shadow-xl shadow-gray-600 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiOutlineMail/>
              </div>
              <div className="rounded-full shadow-xl shadow-gray-600 cursor-pointer hover:scale-105 ease-in duration-300">
                <BsFillFilePersonFill/>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
