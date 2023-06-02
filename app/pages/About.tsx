import React from "react";

const About = () => {
  return (
    <>
      <div
        className="flex items-start my-4 w-full"
        id="about"
        style={{ padding: "4rem" }}
      >
        <span className="w-1/2">
          <img
            height={500}
            width={500}
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </span>

        <div className="flex flex-col items-start space-y-2 w-2/3 p-2"> 
          <div className="font-bold text-4xl tracking-wider" style={{fontFamily:"'Merriweather', serif"}}>Let me introduced about myself</div>
          <span
            className="leading-6 text-gray-800 font-medium drop-shadow-2xl text-sm"
            style={{fontFamily:"'Merriweather', serif"}}
          >
             Hi i am a frontend developer with a
            fantastic experience of 1.6 years, I am a working with angular,
            angular material,cakephp, nginx, docker, stripe and typscript ,
            ihave also learned about react, nodejs, Mean development, Mern
            development. I am worked on many project such as dp360 crm ,
            endorsement, Eccommerce website etc. As a frontend developer, my
            role is to create the visual and interactive components of a website
            or application that users directly interact with. I am responsible
            for building the user interface (UI) and ensuring that it is
            visually appealing, user-friendly, and responsive across different
            devices and browsers.
          </span>
        </div>
      </div>
    </>
  );
};

export default About;
