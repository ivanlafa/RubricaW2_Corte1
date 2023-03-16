import React from 'react'
import { LikeButton } from './LikeButton'

export const Card = ( { id, imgUrl, titulo, descripcion, equipo, url, categoria, checked } ) => {

  return (
    <div className="col-lg-4 m-0 d-flex justify-content-center">
        <div className="card my-3" style={{ width: "18rem" }}>
          <img src={ imgUrl } className="card-img-top" alt="Imagen deporte" />
          <div className="card-body">
            <h5 className="card-title">{ titulo }</h5>
            <p className="card-text">
              { descripcion }
            </p>
            <span>
              <b>Equipo:</b> <a href={ url } rel="noopener" target={"_blank"} className="nav-link active p-0 d-inline">{ equipo }</a>
            </span>
            <br />
            <span><b>Categoria:</b> { categoria }</span>
          </div>
          {
            checked !== "none" && <div className="row w-100 d-flex justify-content-end">
                                    <LikeButton id={id} checked={checked}></LikeButton>
                                  </div>
          }
        </div>
      </div>
  )
}
