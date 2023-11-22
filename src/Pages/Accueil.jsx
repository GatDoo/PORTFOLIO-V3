import React from "react";
import Header from "../components/Header/Header";
import Presentation from "../components/Presentation/Presentation";
import ImgHeader1 from "../images/ImgHeader1.jpg";
import Index from "../components/Index/Index";
import Competences from "../components/Competences/Competences";
import Img2 from "../images/ImgPresent.jpg"
import Travaux from "../components/Travaux/Travaux";
import Footer from "../components/Footer/Footer";

function Accueil() {
    return (
        <>
            <article className="HP">
                <div className="filter"></div>
                <img src={ImgHeader1} alt="" className="img-present" />
                <Header />
                <Presentation />
            </article>
            <article className="img2">
                <div className="filter"></div>
                <img src={Img2} alt="" className="img-fond" />
                <Competences />
                <Travaux />
            </article>
            <Index />
            <Footer />
        </>
    );
}

export default Accueil;