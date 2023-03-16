import React from "react";
import "../styles/Footer.css";

export const Footer = () => {
  return (
    <footer className="site-footer mt-4">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>OBJETIVO</h6>
            <p className="text-justify">
              El objetivo del desarrollo es utilizar los métodos map y filter,
              manejo de rutas, renderizado condicional y almacenamiento en
              localStorage, y crear una aplicación web interactiva y escalable
              que permita al usuario visualizar, filtrar y agregar datos de
              manera dinámica con el fin de dar cumplimiento a la rubrica del
              primer corte.
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>DESARROLLADOR</h6>
            <ul className="footer-links">
              <li>
                <b>Ivan Lafaurie</b>
                <br />
              </li>
              <li>Ingenieria de sistemas</li>
              <li>8 Semestre</li>
              <li>Desarrollo Web II</li>
            </ul>
          </div>

        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2023 All Rights Reserved by <a href="/#" target={"_blank"}>Ivan Lafaurie</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a className="facebook" href="https://www.facebook.com/" rel="noopener" target={"_blank"}>
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a className="instagram" href="https://www.instagram.com/" rel="noopener" target={"_blank"}>
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a className="linkedin" href="https://www.linkedin.com/in/ivan-lafaurie-5a6130225/" rel="noopener" target={"_blank"}>
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
