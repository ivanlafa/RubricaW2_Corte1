import React, { useState } from 'react'
import { createItem } from '../helpers/createItem';
import { getCategorias } from '../helpers/loadData';
import "../styles/Form.css"

export const Create = () => {
  const cat = getCategorias();
  //STATE INPUTS
  const [imgUrl, setImgUrl] = useState('');
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [equipo, setEquipo] = useState('');
  const [url, setUrl] = useState('');
  const [categoria, setCategoria] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(categoria);
      if (categoria === "") {
        alert("Por favor selecciona una categoria :)");
      }else{
        createItem( { imgUrl, titulo, descripcion, equipo, url, categoria } );
        setImgUrl('');
        setTitulo('');
        setDescripcion('');
        setEquipo('');
        setUrl('');
        setCategoria('');
      }
  };


  return (
    <div className="container mt-4">
      <form onSubmit={ handleSubmit }>
      <div className="row mb-3">
        <label htmlFor="imgUrl" className="form-label">URL de la imagen: </label>
        <input type="text" className="form-control" palceholder='Prueba' id="imgUrl" value={imgUrl} onChange={ (e) => { setImgUrl( e.target.value ) } } required />
      </div>

      <div className="mb-3">
        <label htmlFor="titulo" className="form-label" minlength="3" maxlength="20">Titulo: </label>
        <input type="text" className="form-control" id="titulo" value={titulo} onChange={ (e) => { setTitulo( e.target.value ) } } required/>
      </div>
      
      <div className="form-floating">
        <textarea className="form-control mb-3" minlength="50" maxlength="200" placeholder="Escribe aquí la descripción del deporte" id="descripcion" style={ { height: "100px" } } value={descripcion} onChange={ (e) => { setDescripcion( e.target.value ) } } required></textarea>
        <label htmlFor="descripcion">Descripcion</label>
      </div>

      <div className="mb-3">
        <label htmlFor="equipo" className="form-label">Equipo: </label>
        <input type="text" className="form-control" minlength="3" maxlength="15" id="equipo" value={equipo} onChange={ (e) => { setEquipo( e.target.value ) } } required/>
      </div>

      <div className="mb-3">
        <label htmlFor="url" className="form-label" minlength="10" maxlength="50">URL: </label>
        <input type="text" className="form-control" id="url" value={url} onChange={ (e) => { setUrl( e.target.value ) } } required/>
      </div>

      <select className="form-select" value={categoria} onChange={ (e) => { setCategoria( e.target.value ) } } >
        <option value="">Seleccionar categoria</option>
        {
          cat.map( (e, id) => <option key={id} value={e}>{e}</option>)
        }
      </select>

        <div className="container w-100 d-flex justify-content-end">
          <button type="submit" className="btn btn-success mt-4 mb-3">Registrar</button>
        </div>
      
  </form>
    </div>
  )
}
