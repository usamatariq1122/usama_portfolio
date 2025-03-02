import React from "react";
import hero from "../assets/images/ef.png";

const Hero = () => {
  const social_media = [
   {social_logo: "logo-github", social_link: "https://github.com/usamatariq1122"} ,
   {social_logo: "logo-linkedin", social_link: "https://www.linkedin.com/in/usama-tariq-b89930318/"} ,
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center mt-8"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1
            className="md:text-5xl text-2xl md:leading-normal leading-10
         text-white font-bold"
          >
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My name is <span>Usama Tariq</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-10 mt-4 font-bold text-gray-600">
            Php Laravel Developer
          </h4>
          <a href="#contact">
            <button className="btn-primary mt-8">Contact Me</button>
          </a>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer"
              >
                <a href={icon.social_link} target="_blank" rel="noopener noreferrer">
                <ion-icon name={icon.social_logo}></ion-icon>
                </a>
               
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
