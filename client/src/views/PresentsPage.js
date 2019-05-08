import React from "react"

const Presents = () => {
  return (
    <div className="section-wrapper">
      <section className="info-wrapper">
        <h2 className="subtitle">Regalos</h2>
        <h1 className="title">
          El mejor regalo es compartir este día con vosotros 
          <span role="img" aria-label="present">🎁</span>
        </h1>
      </section>
      <img alt="kiss-the-girl" src="./img/love.png" />
      <section className="info-wrapper">
        <p className="section-body">
          <strong>No queremos regalos</strong>, esta celebración la hacemos para compartir esta
          unión con todos aquellos que han vivido diferentes momentos junto a
          nosotras y que han sido testigos de este amor tan especial que nos
          une.
        </p>
        <p className="section-body">
          <strong>¡Gracias por ser parte de esta historia, nuestra historia! </strong>
          <span role="img" aria-label="girl">👩🏻</span>
          <span role="img" aria-label="red-heart">❤️</span>
          <span role="img" aria-label="kiss">💋</span>
          <span role="img" aria-label="girl">👩🏽</span>
        </p>
      </section>
    </div>
  )
}

export default Presents
