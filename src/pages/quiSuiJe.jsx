import React from "react";
import { NavLink } from "react-router-dom";

const QuiSuiJe = () => {
  return (
    <section className="PhotoEtPrez">
      <img
        src="../../../img/photoElisa.jpg"
        alt="Elisa Kaba"
        className="photoElisa"
      />
      <div className="presentation">
        <p className="textDePresentation">
          Issue d’un cursus en sciences humaines, j’ai longtemps travaillé dans
          le secteur social. Cela m’a permis d’acquérir des compétences
          transversales telles que la capacité à travailler en équipe, à gérer
          un projet selon un cahier des charges mais aussi l’écoute, l’autonomie
          et la prise d’initiatives et de responsabilités. En 2021, j’ai décidé
          de me reconvertir dans le développement web afin de faire de ma
          passion pour l’informatique, mon métier. J’ai donc entamé une
          formation 100% à distance de développeuse frontend, d’un an et demi,
          chez Openclassrooms. Je souhaite aujourd’hui développer des
          compétences backend dans le cadre d’une alternance, pour pouvoir
          proposer mes services avec des acquis plus solides et une technicité
          toujours plus élevée. Selon moi, la technique ne doit pas empêcher,
          mais accompagner, faciliter, grâce à des interfaces adaptées et
          intuitives. Il s’agit de ne pas être dépassé par la machine.
          <br />
          <NavLink className="contacter" to="/contact">
            N’hésitez pas à me contacter !
          </NavLink>
          <br />
        </p>
        <p className="CV">
          <a href="../../../cvElisa.pdf" download="CV_ElisaKaba.pdf">
            Pour en savoir plus sur mon parcours téléchargez mon CV ici
          </a>
        </p>
      </div>
    </section>
  );
};

export default QuiSuiJe;
