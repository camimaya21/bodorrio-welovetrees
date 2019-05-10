import React, { Component } from "react";
import { Link } from 'react-router-dom'
class HomePage extends Component {
  render() {
    return (
      <div className="section-wrapper">
        <section className="info-wrapper">
          <h2 className="subtitle">Home</h2>
          <h1 className="title">All you need is<span className="title-break" role="img" aria-label="rainbow">
          love 🌈
            </span></h1>
        </section>
        <img alt="kiss-the-girl" src="./img/homelove.png" />
        <section className="info-wrapper">
          <p className="section-body">
            Como sabéis, pronto empezaremos una nueva etapa en nuestras vidas, y
            queremos compartir ese día tan especial con nuestros amigos y
            familiares más cercanos.
          </p>
          <p className="section-body">
            Hemos creado esta página web para daros información sobre el{" "}
            <strong>día "D"...</strong>{" "}
            <span role="img" aria-label="wedding-girl">
              👰🏻
            </span>
            <span role="img" aria-label="purple-heart">
              💜
            </span>
            <span role="img" aria-label="wedding-girl">
              👰🏽
            </span>
          </p>
          <div className="btn-wrapper">
          <Link to="/form">
            <button>> Confirmar Asistencia</button>
          </Link>
        </div>
        </section>
      </div>
    );
  }
}

export default HomePage;
