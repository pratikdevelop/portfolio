import React from "react";

const Skill = () => {
  const languages = [
    {
      id: 1,
      name: "Frontend Developer",
      value: [
        { name: "HTML", value: "90%" },
        { name: "css", value: "90%" },
        { name: "javascript", value: "85%" },
        { name: "react", value: "75%" },
        { name: "angular", value: "80%" },
        { name: "material ui", value: "70%" },
        { name: "nextjs", value: "20%" },
      ],
    },
    {
      id: 2,
      name: "Backend Developer",
      value: [
        { name: "php", value: "90%" },
        { name: "c++", value: "50%" },
        { name: "java", value: "20%" },
        { name: "nodejs", value: "90%" },
        { name: "python", value: "85%" },
        { name: "django", value: "75%" },
      ],
    },
    {
      id: 3,
      name: "Database",
      value: [
        { name: "mongodb", value: "90%" },
        { name: "mysql", value: "90%" },
        { name: "firebase", value: "85%" },
        { name: "sqlite", value: "75%" },
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center w-full" style={{fontFamily:"system-ui !important"}}>
        <div
          className="text-center text-4xl uppercase text-white"
          style={{ fontWeight: "600" }}
        >
          {" "}
          my <span className="text-purple-600">skills</span>{" "}
        </div>
        <span className="text-sm font-normal leading-6 tracking-wider text-slate-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A excepturi
          voluptas natus repellat eaque{" "}
        </span>
      </div>

      <div
        className="grid grid-cols-3 w-full gap-8"
        style={{ padding: "4rem 8rem" }}
      >
        <span className="flex text-sm w-auto justify-center text-center mx-auto col-span-3 text-gray-500  dark:border-gray-700 dark:text-gray-400 space-x-8 mb-8">
          <a
            href="#"
            aria-current="page"
            className="block p-4 text-white font-bold bg-purple-700 font-sans rounded-md active border-2 border-purple-600  shadow-2xl shadow-purple-600 "
          >
            All
          </a>

          <a
            href="#"
            className="block p-4 text-white font-bold bg-purple-700 font-sans rounded-md active border-2 border-purple-600  shadow-2xl shadow-purple-600 "
          >
            Frontend
          </a>

          <a
            href="#"
            className="block p-4 text-white font-bold bg-purple-700 font-sans rounded-md active border-2 border-purple-600  shadow-2xl shadow-purple-600 "
          >
            Backend
          </a>

          <a
            href="#"
            className="block p-4 text-white font-bold bg-purple-700 font-sans rounded-md active border-2 border-purple-600  shadow-2xl shadow-purple-600 "
          >
            Database
          </a>
        </span>
        {languages.map((lang) => {
          return (
            <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow-xl shadow-purple-700 sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                  {lang.name}
                </h5>
              </div>
              <div className="flow-root">
                {lang.value.map((la) => {
                  return (
                    <ul
                      role="list"
                      className="divide-y divide-gray-200 dark:divide-gray-700"
                    >
                      <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex-1 min-w-0">
                            <div className="mb-1 text-sm uppercase font-bold text-purple-700 dark:text-purple-500">
                              {la.name}
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                              <div
                                className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500"
                                style={{ width: la.value }}
                              ></div>
                            </div>
                          </div>
                          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            {la.value}
                          </div>
                        </div>
                      </li>
                    </ul>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Skill;
