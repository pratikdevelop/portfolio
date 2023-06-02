import React from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillFilePersonFill } from "react-icons/bs";
const Home = () => {
  return (
    <div>
      <div
        className="grid grid-cols-5 ease-in-out scale-105 duration-300 bg-gray-900 overflow-hidden"
        style={{ padding: "4rem 8rem" }}
      >
        <div className="flex flex-col col-span-3 px-8 space-y-2">
        <span className="text-white font-semibold text-sm bg-pink-700 px-4 py-1.5 rounded-full mr-auto drop-shadow-2xl">
             Welcome to our portfoio
            </span>
          <span
            className="font-extrabold text-white tracking-normal text-4xl"
          >
            Hello, I am a 
            <span className="font-extrabold tracking-normal text-pink-600 text-4xl"> Pratik Raut</span>
          </span>
         
            <span className="text-pink-600  drop-shadow-2xl">
              Frontend Web Developer
            </span>
          <p className="text-sm leading-6 text-wide font-medium text-gray-400 mt-2">
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
            <button className="my-5 font-bold text-sm text-white rounded-full shadow-md hover:shadow-2xl shadow-gradient-to-r  border-fuchsia-600 bg-gradient-to-r from-fuchsia-600 to-purple-600 py-2  ease-in-out transition-all duration-200 mr-auto px-6  font-mono hover:scale-105 ">
              {" "}
              Hire me
            </button>
            <button className="my-5 font-bold text-sm text-white rounded-full shadow-md hover:shadow-2xl shadow-gradient-to-r  border-fuchsia-600 bg-gradient-to-r from-fuchsia-600 to-purple-600 py-2  ease-in-out transition-all duration-200 mr-auto px-6  font-mono hover:scale-105 ">
              {" "}
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
