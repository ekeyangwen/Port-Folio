import React from "react";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <section className="home">
      <section className="background">
        <div className="presentationEtContact">
          <h1 className="nom">Elisa Kaba</h1>
          <h2 className="titre">Développeuse FrontEnd</h2>
          {/* <h3 className="recherche">
            Recherche alternance 16 mois: Conceptrice développeuse d'aplicatons
            JAVA <br />
            Dès janvier 2023
          </h3> */}
          <NavLink className="contactSend" to="/contact">
            <div className="enveloppe">
              <img
                src="../../../img/noun-send-1070405.png"
                alt="Enveloppe de contact"
                className="send"
              />
            </div>
          </NavLink>
        </div>
        <div className="imgFond">
          <img
            src="../../../../img/homeBack.jpg"
            alt="Océan"
            className="backgroundImg"
          />
        </div>
      </section>
    </section>
  );
};

export default Home;
