import React from "react";

const Skills = (name) => {
  return (
    <section className="skill">
      <img className="skillPicture" src={name.picture} alt={name.alt} />
      <li className="skillSkill">{name.name}</li>
    </section>
  );
};

export default Skills;
