import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Skills from "../Components/Skills";

const Competences = () => {
  const [skills, setSkills] = useState("");

  useEffect(() => {
    fetch("../../../data.json")
      .then((response) => response.json())
      .then((myJson) => {
        setSkills(myJson);
      });
  }, []);

  let frontSkills = skills.front;
  let devSkills = skills.devtools;
  let environementSkills = skills.environement;
  let librairiesSkills = skills.librairies;
  let hardSkills = skills.hardSkills;

  if (devSkills === undefined) {
    console.log("loading");
  }
  if (frontSkills === undefined) {
    console.log("loading");
  }
  return (
    <section className="skills">
      <section className="mainSkills">
        <ul className="frontSkills">
          <h1 className="frontTitle">Frontend</h1>
          <div className="listOfSkills">
            {frontSkills &&
              frontSkills.length > 0 &&
              frontSkills.map((frontDetails) => (
                <Skills
                  key={frontDetails.id}
                  name={frontDetails.name}
                  picture={frontDetails.src}
                  alt={frontDetails.alt}
                />
              ))}
          </div>
        </ul>
        <ul className="devSkills">
          <h1 className="devTitle">Devtools</h1>
          <div className="listOfSkills">
            {devSkills &&
              devSkills.length > 0 &&
              devSkills.map((devDetails) => (
                <Skills
                  key={devDetails.id}
                  name={devDetails.name}
                  picture={devDetails.src}
                  alt={devDetails.alt}
                />
              ))}
          </div>
        </ul>
        <ul className="environementSkills">
          <h1 className="environementTitle">Environnement</h1>
          <div className="listOfSkills">
            {environementSkills &&
              environementSkills.length > 0 &&
              environementSkills.map((environementDetails) => (
                <Skills
                  key={environementDetails.id}
                  name={environementDetails.name}
                  picture={environementDetails.src}
                  alt={environementDetails.alt}
                />
              ))}
          </div>
        </ul>
        <ul className="librairiesSkills">
          <h1 className="librairiesTitle">Librairies</h1>
          <div className="listOfSkills">
            {" "}
            {librairiesSkills &&
              librairiesSkills.length > 0 &&
              librairiesSkills.map((librairiesDetails) => (
                <Skills
                  key={librairiesDetails.id}
                  name={librairiesDetails.name}
                  picture={librairiesDetails.src}
                  alt={librairiesDetails.alt}
                />
              ))}
          </div>
        </ul>
      </section>
      <section className="hard">
        <h1 className="hardTitle">Hard Skills</h1>
        <ul className="hardSkills">
          <div className="hardskill">
            {hardSkills &&
              hardSkills.length > 0 &&
              hardSkills.map((hardDetails) => (
                <Skills key={hardDetails.id} name={hardDetails.name} />
              ))}
          </div>
        </ul>
      </section>
    </section>
  );
};
export default Competences;
