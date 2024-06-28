import React, {useEffect, useState} from "react";
import ReactSimplyCarousel from 'react-simply-carousel';
import Skills from "../Components/Skills";

const Competences = () => {
    const [skills, setSkills] = useState("");
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    useEffect(() => {
        fetch("http://localhost:3001/competences")
            .then((response) => response.json())
            .then((myJson) => {
                setSkills(myJson);
            });
    }, []);

    let dataSkills = skills.data
    console.log(dataSkills)

    return (

        <div className="carousel">
            <img src="../../public/img/icons8-html-5-50.png" alt="" className="test"/>
            <ReactSimplyCarousel
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                itemsToShow={1}
                itemsToScroll={1}
                forwardBtnProps={{
                    //here you can also pass className, or any other button element attributes
                    style: {
                        alignSelf: 'center',
                        background: '#983122',
                        border: 'none',
                        borderRadius: '50%',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '20px',
                        height: 30,
                        lineHeight: 1,
                        textAlign: 'center',
                        width: 30,
                    },
                    children: <span>{`>`}</span>,
                }}
                backwardBtnProps={{
                    //here you can also pass className, or any other button element attributes
                    style: {
                        alignSelf: 'center',
                        background: '#983122',
                        border: 'none',
                        borderRadius: '50%',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '20px',
                        height: 30,
                        lineHeight: 1,
                        textAlign: 'center',
                        width: 30,
                    },
                    children: <span>{`<`}</span>,
                }}
                responsiveProps={[
                    {
                        itemsToShow: 2,
                        itemsToScroll: 2,
                        minWidth: 768,

                    },
                ]}
                autoplay={true}
                autoplayDelay={3000}
                speed={400}
                easing="linear"
            >
                {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
                {dataSkills &&
                    dataSkills.length > 0 &&
                    dataSkills.map((skillDetail) => (<div style={{width: 300, height: 300}}>
                            <div className="skills">
                                <Skills
                                    key={skillDetail.competence_id}
                                    name={skillDetail.competence_name}
                                    picture={skillDetail.competence_img}
                                    alt='Logo compétence'

                                />
                            </div>
                        </div>
                    ))}

            </ReactSimplyCarousel>
        </div>

    );
}


// return(
//     <section className="skills">
//         {dataSkills &&
//             dataSkills.length > 0 &&
//             dataSkills.map((skillDetail) => (
//                 <Skills
//                     key={skillDetail.competence_id}
//                     name={skillDetail.competence_name}
//                     picture={skillDetail.competence_img}
//
//                 />
//                 ))}
//     </section>
// )

/*let frontSkills = skills.front;
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
);*/
//};
export default Competences;
