import React from "react";
import PhotoCV from "../../images/photoCV.jpg";
import Typewriter from "../Typewriter/Typewriter";

function Presentation() {
    return (
        <section id="presentation">
            <div className="presentation__container">
                <img src={PhotoCV} alt="" className="PhotoCV" />
                <h2>Présentation</h2>
                {/* <p>Bonjour ! Je m'appelle Gatien DOOLAEGHE, j'ai 20 ans et je suis actuellement en formation d'intégrateur web chez OpenClassrooms.</p> */}
                {/* <p>Je suis passionné par le développement web plus particulièrement de l'informatique et j'aimerais en faire mon métier.</p> */}
                <Typewriter text="Boonjour ! Je m'appelle Gatien DOOLAEGHE, j'ai 20 ans et je suis actuellement en formation d'intégrateur web chez OpenClassrooms. Je suis passionné par le développement web plus particulièrement de l'informatique et j'aimerais en faire mon métier." speed={100} />
                {/* <Typewriter text="Jee suis passionné par le développement web plus particulièrement de l'informatique et j'aimerais en faire mon métier." speed={100} /> */}
            </div>
        </section>
    );
}

export default Presentation;