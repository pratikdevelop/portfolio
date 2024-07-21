import React from "react";

const Project = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full">
        <div
          className="text-center text-4xl uppercase text-white"
          style={{ fontWeight: "600" }}
        >
          Our <span className="text-purple-600">Projects</span>
        </div>
        <span className="text-sm font-normal leading-6 tracking-wider text-slate-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A excepturi
          voluptas natus repellat eaque
        </span>
      </div>

      <div
        className="grid grid-cols-3 w-full gap-8"
        style={{ padding: "4rem 8rem" }}
      >
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-transparent  shadow-purple-500">
          <img
            className="w-full h-44"
            src="https://m.media-amazon.com/images/I/61x3GIwnW0L.png"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">Realtme chat app</div>
            <p className="text-gray-700 text-base">
              Built interactive chat app with React frontend and Redux for state management.
              Integrated Firebase for user authentication and secure data storage.
              Implemented Node.js backend with Socket.io for real-time messaging.
              Showcased skills in modern web dev & creating seamless user experiences.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Reactjs
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              material ui
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">

              nodejs
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">

              socket io
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">

              mongodb
            </span>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-transparent  shadow-purple-500">
          <img
            className="w-full h-44"
            src="data:image/jpeg;base64,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"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-white text-xl mb-2">Endorsement Project</div>
            <p className="text-gray-200 text-xs leading-6">
              Led "Social Connect" Project: Fostered impactful online interactions & user engagement.
              Adept Project Management: Ensured successful execution from concept to deployment.
              Full-Stack Development: Contributed with proficiency in front-end & back-end technologies.
              Seamless Social Integration: Enhanced user engagement through social features.
              User-Centric Design: Created an engaging & user-friendly digital environment.

            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Angular
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              angular material
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">

              django
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              stripe
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">

              mongodb
            </span>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-transparent  shadow-purple-500">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1611746872915-64382b5c76da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hhdCUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">E-Commerce Catalog</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Reactjs
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              material ui
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">

              nodejs
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">

              mongodb
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
