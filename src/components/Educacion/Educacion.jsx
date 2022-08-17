import React from "react";
import "./Educacion.css";

const Educacion = ({ educacion }) => {
  return (
    <div>
      <div className="education card">
        {educacion.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name">📕 {item.titulacion}</p>
              <p>{item.centro}</p>
              <p>{item.fecha}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Educacion;