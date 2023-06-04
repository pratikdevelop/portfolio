import React from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillFilePersonFill } from "react-icons/bs";
const Home = () => {
  return (
    <div>
      <div
        className="grid grid-cols-5 ease-in-out scale-105 duration-300 overflow-hidden"
        style={{ padding: "4rem 8rem" }}
      >
        <div className="flex flex-col col-span-3 px-8 space-y-2">
        <span className="text-purple-500 hover:text-white font-semibold text-xs  border-2 hover:bg-purple-500 border-purple-600  px-4 py-1.5 rounded-full mr-auto drop-shadow-2xl">
             Welcome to our portfolio
            </span>
          <span
            className="font-bold text-white tracking-normal text-2xl"
          >
            Hello, I am 
          </span>
            <span className="font-extrabold tracking-normal text-purple-600 text-4xl"> A Pratik Raut</span>
         
            <span className="text-purple-900  text-sm font-semibold  drop-shadow-2xl">
              Frontend Web Developer
            </span>
          <p className="text-sm leading-6 text-wide font-medium text-white  mt-2">
            As a frontend developer, my role is to create visually appealing and
            user-friendly interfaces for websites and applications. I use HTML,
            CSS, JavaScript anfd many javascript frameworks such as react
            ,angular, node js and nextjs to build interactive components, ensure
            responsive design, and optimize performance. I collaborate with
            designers and backend developers to deliver seamless user
            experiences.
          </p>
          <div className="flex items-center mt-5 space-x-6">
            <div className="rounded-full shadow-2xl text-white border-white border-2 p-2 hover:scale-210 shadow-white cursor-pointer hover:scale-105 ease-in-out duration-500">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-2xl text-white border-white border-2 p-2 hover:scale-210 shadow-white cursor-pointer hover:scale-105 ease-in-out duration-500">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-2xl text-white border-white border-2 p-2 hover:scale-210 shadow-white cursor-pointer hover:scale-105 ease-in-out duration-500">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-2xl text-white border-white border-2 p-2 hover:scale-210 shadow-white cursor-pointer hover:scale-105 ease-in-out duration-500">
              <BsFillFilePersonFill />
            </div>
          </div>
          <div className="flex items-center space-x-4 mr-auto">
           
            <button className="my-5 font-semibold text-xs text-purple-600 hover:text-white rounded-2xl shadow-2xl shadow-gradient-to-r  border-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-600 py-2  ease-in-out transition-all duration-200 mr-auto px-6  hover:skew-6 border-2 hover:border-gray-200">
              Download CV
            </button>
          </div>
        </div>

        <div className="image col-span-2 flex  justify-center  rounded-full">
          <Image
            src="/battle.jpg"
            alt="profile image"
            className="rounded-2xl"
            width={500}
            height={500}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Home;
