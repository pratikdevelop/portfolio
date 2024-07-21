import React from "react";

const About = () => {
  return (
    <>
      <div
        className="relative flex flex-auto p-5 w-full"
        id="about"
      >
        <span className="w-2/6 flex items-center space-x-6">
          <img
            height={400}
            width={400}
            className='rounded'
            style={{ height: "400px !important" }}
            src="https://th.bing.com/th/id/R.4c9e2f73e7c4ffba009f88d6901fd89c?rik=LWIvE7fveF2pTQ&riu=http%3a%2f%2fwww.rippleslearning.com%2fwp-content%2fuploads%2f2018%2f09%2fabout-us-1024x683.jpg&ehk=3Fjo8%2f%2fKf1YtxIPyrT%2bADIeyaTnhj3SqBvPOVoGLD70%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          />
        </span>

        <div className="w-4/6 flex flex-col items-start space-y-2">
          <span className="text-4xl font-bold capitalize text-white"> About Me</span>
          <span className="about-heading text-white uppercase">Let me intro<span className="text-purple-600 about-heading">duced my self </span>
          </span>
          <p className="text-xs leading-6 text-wide font-medium text-white">
            Hello, I am A Pratik Raut Full Stack Developer & DevOps Beginner Hailing from Ujjain, Madhya Pradesh, and armed with a fresh Bachelor's degree in Computer Science, I bring a passion for crafting user-centric web applications to the table. My 2-year journey as a Full-Stack Developer has equipped me to excel in both front-end development (utilizing frameworks like React and Angular) and back-end development (leveraging Node.js and Django). My fluency in JavaScript and Python allows me to seamlessly integrate APIs using industry standards like RESTful and GraphQL. Beyond the core development skills, I possess a diverse technical skillset. I can confidently navigate and manage data structures using popular databases like MongoDB, MySQL, and PostgreSQL. When it comes to deployment, I'm adept at leveraging leading cloud platforms like Heroku, AWS, and Firebase to ensure smooth application management. My commitment to clean and efficient code is reflected in my proficiency with version control systems like Git and GitHub. Additionally, I'm well-versed in front-end development tools like Redux, jQuery, and Bootstrap, allowing me to create user interfaces that are both responsive and engaging. To guarantee application quality, I implement rigorous testing methodologies using Jest and Mocha frameworks. Finally, my foundational understanding of DevOps tools (Docker, Jenkins, CircleCI, AWS) positions me to contribute to efficient deployment pipelines
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
