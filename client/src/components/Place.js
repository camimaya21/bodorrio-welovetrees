import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PlaceMark, Clock } from '../svg/icons'

class Place extends Component {
  render() {
    return (
      <div className="section-wrapper">
        <img alt="kiss-the-girl" src="./img/kiss-the-girl.png" />
        <section className="info-wrapper">
          <h2 className="subtitle">Lugar & Hora</h2>
          <h1 className="title">Calle Corazón de María 4</h1>
          <p className="date">Sábado, 18 de mayo de 2019</p>
        </section>
        <div className="btn-wrapper">
          <Link to="/form">
            <button>> Confirmar Asistencia</button>
          </Link>
        </div>
        <section className="details-wrapper">
          <ul className="details-list">
            <li className="details-items">
              <PlaceMark />
              <p>Calle Corazón de María 4 (metro Cartagena)</p>
            </li>
            <li className="details-items">
              <Clock />
              <p>Apertura puertas 19:00 Ceremonia 20:00</p>
            </li>
          </ul>
        </section>
      </div>
    )
  }
}

export default Place
