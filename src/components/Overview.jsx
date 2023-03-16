import React from "react";
import { loadData } from "../helpers/loadData";
import { Card } from "./Card";

export const Overview = () => {
  const data = loadData();

  return (
    <div className="container">
      <div className="row">
      {
        data.map( (e, id) => {
          return (
            <Card
              id={e.id}
              key={id}
              imgUrl={e.imgUrl}
              titulo={e.titulo}
              descripcion={e.descripcion}
              equipo={e.equipo}
              url={e.url}
              categoria={e.categoria}
              checked={e.checked}
            ></Card>
          )
        } )
      }
    </div>
    </div>
  );
};
