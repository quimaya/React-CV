import React from "react";
import "./Idiomas.css";

const Idiomas = ({ idiomas }) => {
    return (
        <div className="idiomas">

            {idiomas.map((item) => {
                return (
                    <div key={JSON.stringify(item)}>
                        <p>Sé hablar {item.idioma}</p>
                        <p>Mi nivel de escritura es {item.escrito}</p>
                        <p>Mi nivel hablado es {item.hablado}</p>
                    </div>
                )
            })}
            </div>
    )
        }
        

    
    export default Idiomas;