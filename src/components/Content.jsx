import React, { useState } from "react";
import { getCategorias, getCategory, loadData } from "../helpers/loadData";
import { Card } from "./Card";

export const Content = () => {
  const [data, setData] = useState(loadData());
  const cat = getCategorias();

  return (
    <div className="container">
      <div className="row d-flex justify-content-center mt-2 px-5">
        <select className="form-select" onChange={ (e) => { setData( getCategory(e.target.value) ) } } >
          <option value="">--- Filtrar por categoria ---</option>
          {
            cat.map( (e, id) => <option key={id} value={e}>{e}</option>)
          }
        </select>
      </div>
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
              checked={"none"}
            ></Card>
          )
        } )
      }
    </div>
    </div>
  );
};