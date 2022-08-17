import React from "react";
import "./Experiencia.css";

const Experiencia = ({ experiencia }) => {
  return (
    <div>
      <div className="experiencia card">
        {experiencia.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
                <h2 className="experienciaName"> {item.name}</h2>
              <h3> {item.where}</h3>
              <p>{item.date}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experiencia;