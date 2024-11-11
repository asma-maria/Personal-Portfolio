import React from "react";
import BooksImage from "../assets/Book Club.png";
import keymatch from "../assets/Secret Key Matcher.jpg"
import HungrySpoon from "../assets/Hungry Food.png"
import BooksBucket from "../assets/BooksBucket.png"
import TechHub from "../assets/TechHub.jpg"
import bookMSImage from "../assets/admin-dashboard.png";

const projects = [
  {
    id: 1,
    name: "Books Club",
    technologies: "MERN Stack",
    image: BooksImage,
    github: "https://github.com/asma-maria/Simple-Book-Shop-Website",
  },
  {
    id: 2,
    name: "Secret Key Matcher",
    technologies: "MERN Stack",
    image: keymatch,
    github: "https://github.com/asma-maria/Secret-Key-Matcher.git",
  },
  {
    id: 3,
    name: "Hungry Spoon",
    technologies: "MERN Stack",
    image: HungrySpoon,
    github: "https://github.com/asma-maria/Responsive-Food-Corner",
  },
  {
    id: 4,
    name: "Books Bucket",
    technologies: "MERN Stack",
    image: BooksBucket,
    github: "https://github.com/asma-maria/Books-Bucket-Frontend",
  },
  {
    id: 5,
    name: "Tech Hub",
    technologies: "MERN Stack",
    image: TechHub,
    github: "https://github.com/asma-maria/Course-Related-Website",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;