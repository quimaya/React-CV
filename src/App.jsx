import { useState } from "react";
import "./App.css";
import Persona from "./components/Persona/Persona"
import Educacion from "./components/Educacion/Educacion"
import Idiomas from "./components/Idiomas/Idiomas"
import Experiencia from "./components/Experiencia/Experiencia"

import { CV } from "./cv";

const { persona, educacion, experiencia, idiomas, habilidades } = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="App">
        <Persona persona={persona} />
        <button className= "boton educacion"
        onClick={() => setShowEducation(true)}
        >
        Educacion
            </button>
            <button
              className="boton educacion"
              onClick={() => setShowEducation(false)}
            >
              Experiencia
            </button>

        <div>
          {showEducation ? (
        <Educacion educacion={educacion} />) :(     
        <Experiencia experiencia={experiencia} />
        )}

        </div>

        <Idiomas idiomas={idiomas} />
	      
    </div>
  );
}



export default App;