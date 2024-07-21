import React from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillFilePersonFill } from "react-icons/bs";
const Home = () => {
  return (
    <div>
      <div
        className="grid grid-cols-5 p-16 ease-in-out scale-105 duration-300 overflow-hidden"
      >
        <div className="flex flex-col col-span-3 p-16 space-y-2">
          <span
            className="font-bold text-white tracking-normal text-2xl"
          >
            Hello, I am
          </span>
          <span className="text-purple-600 text-4xl"> A Pratik Raut</span>
          <h1 className="text-purple-700 text-4xl drop-shadow-2xl">
            Full Stack Developer & DevOps Beginner</h1>
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
        <Image
          src="https://pics.craiyon.com/2023-09-20/a1bc4a53522c4249a9a0f2af9adefb0d.webp"
          alt="profile image"
          className="rounded h-[50vh] col-span-2"
          width={250}
          height={30}
        ></Image>
      </div>
    </div>
  );
};

export default Home;
