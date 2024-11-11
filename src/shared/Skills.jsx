// App.js
import React from "react";

const skills = [
  {
    name: "HTML",
    image: "https://img.icons8.com/color/96/html-5.png",
  },
  {
    name: "CSS",
    image: "https://img.icons8.com/color/96/css3.png",
  },
  {
    name: "JavaScript",
    image: "https://img.icons8.com/color/96/javascript--v1.png",
  },
  {
    name: "React.js",
    image: "https://img.icons8.com/color/96/react-native.png",
  },
  {
    name: "Node.js",
    image: "https://img.icons8.com/color/96/nodejs.png",
  },
  {
    name: "Next.js",
    image: "https://img.icons8.com/color/96/nextjs.png",

  },
  {
    name: "Git",
    image: "https://img.icons8.com/color/96/git.png",
  },
];

const SkillCard = ({ skill }) => {
  return (
    <div className="card w-60 bg-base-100 shadow-md hover:shadow-xl transition">
      <figure className="p-4">
        <img src={skill.image} alt={skill.name} className="h-24 w-24" />
      </figure>
      <div className="card-body">
        <h2 className="text-center text-lg font-semibold">{skill.name}</h2>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="min-h-screen bg-black p-8">
      <h1 className="text-4xl text-white font-bold text-center mb-6">My Skills & Tools</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {skills.map((skill, index) => (
          <SkillCard skill={skill} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
