import React from "react";
import "./Persona.css";

const Persona = ({ persona }) => {
  return (
    <div className="hero">
      <img src={persona.image} alt="" />
      <div className="card">
      <h2>
        {persona.nombre} {persona.apellido}
      </h2>
        <p>🗺️{persona.ciudad} </p>
        <p>🗓️{persona.cumpleaños}</p>
        <p>
          📧
          <a href={"mailto:" + persona.email}>
          luissf1590@gmail.es
          </a>
        </p>
        <p>📱 {persona.twitter}</p>
        <p>💾<a href={persona.twitter}>
            Twitter
          </a></p>
      </div>
    </div>
  );
};

export default Persona;