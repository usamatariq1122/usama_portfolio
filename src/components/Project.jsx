import React, { useState, useEffect } from "react";
import { FaReact, FaPython, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiTensorflow, SiTailwindcss } from "react-icons/si";

import project from "../assets/images/Food Buddy.png";
import project1 from "../assets/images/Property.jpg";
import project2 from "../assets/images/Bank.png";
import project3 from "../assets/images/ecom.png";


const Project = () => {
  const [showAll, setShowAll] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const projects = [
    {
      img: project,
      name: "Food Buddy Web Application",
      description: "A web application that connects users with multiple restaurants, allowing them to browse menus, place orders, and leave reviews, similar to Foodpanda.",
      github_link: "",
      live_link: "",
      technologies: [<FaReact />, <SiTailwindcss />, <FaPython />],
    },
    {
      img: project1,
      name: "Real Estate Management System",
      description: "A web-based Real Estate Management System that enables users to buy, sell, and rent properties efficiently. It includes features such as property listings, user authentication, advanced search filters, appointment scheduling, and secure transactions, providing a seamless experience for buyers, sellers, and agents.",
      github_link: "",
      live_link: "",
      technologies: [<FaReact />, <SiTailwindcss />, <FaPython />],
    },
    {
      img: project2,
      name: "Bank Management System",
      description: "A Bank Management System that facilitates secure and efficient management of banking operations, including customer accounts, transactions, loans, and fund transfers. It provides features such as user authentication, balance inquiries, deposit and withdrawal management, and financial reporting to ensure smooth banking services for customers and administrators.",
      github_link: "",
      live_link: "",
      technologies: [<FaReact />, <SiTailwindcss />, <FaPython />],
    },
    {
      img: project3,
      name: "E-commerce Platform",
      description: "An E-Commerce Platform that enables users to browse, purchase, and manage products online. It includes features such as product listings, secure payment gateways, user authentication, order tracking, and a seamless shopping experience for both buyers and sellers.",
      github_link: "",
      live_link: "",
      technologies: [<FaPython />, <SiTensorflow />,<FaHtml5 />],
    },
  
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("projects");
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="projects"
      className={`py-10 text-white ${isVisible ? "fade-in" : ""}`}
    >
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <div className="mt-10 px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project_info, i) => (
            <div
              key={i}
              className="h-fit bg-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div
                className="overflow-hidden rounded-t-xl relative group"
                onClick={() => setFullscreenImage(project_info.img)}
              >
                <img
                  src={project_info.img}
                  alt={project_info.name}
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-110 cursor-pointer"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project_info.name}</h3>
                <p className="text-gray-300 my-2">{project_info.description}</p>

                

                <div className="flex gap-3 mt-4">
                  <a
                    href={project_info.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                  >
                    Github
                  </a>
                  <a
                    href={project_info.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {!showAll && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="text-cyan-600 bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-700 transition"
          >
            See More
          </button>
        </div>
      )}

      {/* Fullscreen Modal */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setFullscreenImage(null)}
        >
          <img
            src={fullscreenImage}
            alt="Fullscreen View"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
          <button
            onClick={() => setFullscreenImage(null)}
            className="absolute top-5 right-5 text-white text-2xl bg-gray-800 rounded-full p-2"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
};

export default Project;
