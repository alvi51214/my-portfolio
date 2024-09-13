import React from "react";
import { PiFileHtmlFill } from "react-icons/pi";
import { IoLogoCss3 } from "react-icons/io";
import { BsBootstrap } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { SiJira } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { GiTBrick } from "react-icons/gi";
const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <div className="section-title">
        <h1>skills</h1>
        <div className="underline"></div>
      </div>
      <div className="skills-container section-center">
        {/* single skill */}
        <div className="skill">
          <PiFileHtmlFill className="icon" />
          <p>html5</p>
        </div>
        {/* single skill */}
        <div className="skill">
          <IoLogoCss3 className="icon" />
          <p>css3</p>
        </div>
        {/* single skill */}
        <div className="skill">
          <BsBootstrap className="icon" />
          <p>bootstrap</p>
        </div>
        {/* single skill */}
        <div className="skill">
          <RiTailwindCssFill className="icon" />
          <p>tailwind css</p>
        </div>
        {/* single skill */}
        <div className="skill">
          <IoLogoJavascript className="icon" />
          <p>javascript</p>
        </div>
        {/* single skill */}
        <div className="skill">
          <IoLogoReact className="icon" />
          <p>react js</p>
        </div>
        {/* single skill */}
        <div className="skill">
          <SiJira className="icon" />
          <p>html5</p>
        </div>
        {/* single skill */}
        <div className="skill">
          <GiTBrick className="icon" />
          <p>git</p>
        </div>
        {/* single skill */}
        <div className="skill">
          <FiFigma className="icon" />
          <p>figma</p>
        </div>
        {/* single skill */}
        <div className="skill">
          <FaGithub className="icon" />
          <p>github</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
