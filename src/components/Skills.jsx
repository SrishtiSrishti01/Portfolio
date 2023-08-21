import React from "react";
import Html from "../assets/images/skills/html.svg";
import CSS from "../assets/images/skills/css.svg";
import JavaSript from "../assets/images/skills/javascript.svg";
import react from "../assets/images/skills/react.svg";
import Redux from "../assets/images/skills/redux.svg";
import MongoDB from "../assets/images/skills/mongodb.svg";
import NodeJS from "../assets/images/skills/nodejs.svg";
import Git from "../assets/images/skills/git.svg";
import Java from "../assets/images/skills/java-icon.svg";
import Angular from "../assets/images/skills/angular-icon.svg";
import Typescript from "../assets/images/skills/typescriptlang-icon.svg";
import Tailwind from "../assets/images/skills/tailwindcss-icon.svg";
import Bootstrap from "../assets/images/skills/getbootstrap-icon.svg";
import Github from "../assets/images/skills/github-icon.svg";
import VSCode from "../assets/images/skills/visualstudio_code-icon.svg";
import Eclipse from "../assets/images/skills/eclipse.svg";
import Linux from "../assets/images/skills/linux.svg";

function Skills() {
  const skills = [
    {
      img: Html,
      text: "HTML",
    },
    {
      img: CSS,
      text: "CSS",
    },
    {
      img: Bootstrap,
      text: "Bootstrap",
    },
    {
      img: Tailwind,
      text: "Tailwind CSS",
    },
    {
      img: JavaSript,
      text: "JavaScript",
    },
    {
      img: Typescript,
      text: "TypeScript",
    },
    {
      img: Java,
      text: "Java",
    },
    {
      img: react,
      text: "ReactJS",
    },
    {
      img: Redux,
      text: "Redux",
    },
    {
      img: Angular,
      text: "Angular",
    },
    {
      img: NodeJS,
      text: "NodeJS",
    },
    {
      img: MongoDB,
      text: "MongoDB",
    },

    {
      img: Git,
      text: "Git",
    },
  ];

  const tools = [
    {
      img: Github,
      text: "Github",
    },
    {
      img: VSCode,
      text: "VSCode",
    },
    {
      img: Eclipse,
      text: "Eclipse",
    },
    {
      img: Linux,
      text: "Linux",
    },
  ];

  return (
    <div className="mt-14 bg-black text-white">
      <div className="skills flex flex-col items-center pt-10">
        <div className="header">
          <div className="header-text text-center text-6xl pb-2">Skills</div>
          <div className="header-line-wrapper flex justify-center">
            <div className="header-line border-yellow-300 w-52 border-2 rounded"></div>
          </div>
        </div>

        <ul className="flex flex-wrap align-middle justify-evenly mt-10 md:max-w-7xl">
          {skills.map((skill) => (
            <li className="pr-16 mt-16   " key={skill.text}>
              <img src={skill.img} alt="" height="100px" width="100px" />
              <p className="text-center pt-4 text-xl">{skill.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="skills flex flex-col items-center pt-12 pb-10">
        <div className="header">
          <div className="header-text text-center text-6xl pb-2">Tools</div>
          <div className="header-line-wrapper flex justify-center">
            <div className="header-line border-yellow-300 w-52 border-2 rounded"></div>
          </div>
        </div>

        <ul className="flex flex-wrap align-middle justify-evenly md:max-w-7xl">
          {tools.map((tool) => (
            <li className="pr-16 mt-16   " key={tool.text}>
              <img src={tool.img} alt="" height="100px" width="100px" />
              <p className="text-center pt-4 text-xl">{tool.text}</p>
            </li>
          ))}

          {/* <li>
                <img src={css} alt="" height="80px" width="80px" />
            </li>
            <li>
                <img src={javasript} alt="" height="80px" width="80px" />
            </li>
            <li>
                <img src={react} alt="" height="80px" width="80px" />
            </li>
            <li>
                <img src={redux} alt="" height="80px" width="80px" />
            </li>
            <li>
                <img src={mongodb} alt="" height="80px" width="80px" />
            </li>
            <li>
                <img src={nodejs} alt="" height="80px" width="80px" />
            </li>
            <li>
                <img src={git} alt="" height="80px" width="80px" />
            </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
