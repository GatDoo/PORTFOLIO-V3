import React, { useState } from "react";
import Booki from "../../images/Booki.png";
import OhMyFood from "../../images/OhMyFood.png";
import Sophie from "../../images/Sophie.png";

function Travaux() {
    const [isFlipped, setIsFlipped] = useState({
        booki: false,
        ohMyFood: false,
        sophie: false,
    });

    const handleFlip = (card) => {
        setIsFlipped({ ...isFlipped, [card]: !isFlipped[card] });
    };

    return (
        <article id="travaux">
            <h1>Projets</h1>
            <div className="taff-flex">
                <div className={`card ${isFlipped.booki ? "flipped" : ""}`} onClick={() => handleFlip("booki")}>
                    <div className="card-inner">
                        <div className="card-front">
                            <img src={Booki} alt="Booki" />
                            <h2>Booki</h2>
                            <p>Booki est un site de voyage fait en HTML et CSS</p>
                        </div>
                        <div className="card-back">
                            <a href="" target="_blank"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            <a href="https://github.com/GatDoo/Portfolio-architecte-sophie-bluel-master" target="_blank"><i className="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <div className={`card ${isFlipped.ohMyFood ? "flipped" : ""}`} onClick={() => handleFlip("ohMyFood")}>
                    <div className="card-inner">
                        <div className="card-front">
                            <img src={OhMyFood} alt="OhMyFood" />
                            <h2>OhMyFood</h2>
                            <p>Site "Mobile First" nécessitant des animations en CSS</p>
                        </div>
                        <div className="card-back">
                            <a href="" target="_blank"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            <a href="https://github.com/GatDoo/Oh-My-Food" target="_blank"><i className="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                </div>
                <div className={`card ${isFlipped.sophie ? "flipped" : ""}`} onClick={() => handleFlip("sophie")}>
                    <div className="card-inner">
                        <div className="card-front">
                            <img src={Sophie} alt="Sophie" />
                            <h2>Sophie Bluel</h2>
                            <p>Site Vitrine nécessitant une fonction d'ajout, suppression et gestion des projets</p>
                        </div>
                        <div className="card-back">
                            <a href="" target="_blank"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            <a href="https://github.com/GatDoo/Portfolio-architecte-sophie-bluel-master" target="_blank"><i className="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Travaux;
