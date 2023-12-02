import React from "react";

function Competences() {
  return (
    <article id="competences">
      <h2>Compétences</h2>
      <div className="competences-container">
        <div className="competences-container-1">
          <h3>Front-end</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>SASS</li>
          </ul>
        </div>
        <div className="competences-container-3">
          <h3>Autres</h3>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>Visual Studio Code</li>
            <li>Postman</li>
            <li>MongoDB</li>
            <li>Redux</li>
            <li>LUA</li>
            <li>SWAGGER</li>
            <li>JEST</li>
          </ul>
        </div>
      </div>
    </article>
  );
}

export default Competences;