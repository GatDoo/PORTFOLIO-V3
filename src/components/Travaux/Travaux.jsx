import React from "react";
import Booki from "../../images/Booki.png";
import OhMyFood from "../../images/OhMyFood.png";
import Sophie from "../../images/Sophie.png";

function Travaux() {
    return (
        <article id="travaux">
            <h1>Projets</h1>
            <div className="taff-flex">
                <div className="card">
                    <img src={Booki} alt="" />
                    <h2>Booki</h2>
                    <p>Booki est un site de voyage fait en HTML et CSS</p>
                </div>
                <div className="card">
                    <img src={OhMyFood} alt="" />
                    <h2>OhMyFood</h2>
                    <p>Site "Mobile First" nécessitant des animations en CSS</p>
                </div>
                <div className="card">
                    <img src={Sophie} alt="" />
                    <h2>Sophie Bluel</h2>
                    <p>Site Vitrine nécessitant une fonction d'ajout, suppression et gestion des projets</p>
                </div>
            </div>
        </article>
    );
}

export default Travaux;