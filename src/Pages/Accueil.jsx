import React from "react";
import Header from "../components/Header/Header";
import Presentation from "../components/Presentation/Presentation";
// import ImgHeader1 from "../images/ImgHeader1.jpg";
import Index from "../components/Index/Index";
import Competences from "../components/Competences/Competences";
// import Img2 from "../images/ImgPresent.jpg"
import Travaux from "../components/Travaux/Travaux";
import Footer from "../components/Footer/Footer";
import Background from "../components/Background/Background";

function Accueil() {
    return (
        <>
            <div className="back">
                <Background />
            </div>
            <Header />
            <Presentation />
            <Competences />
            <Travaux />
            <Index />
            <Footer />
        </>
    );
}

export default Accueil;