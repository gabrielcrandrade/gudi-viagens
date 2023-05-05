

import "../styles/components/benefits.sass"

const Benefits = () => {
  return (
    <section id="benefits">
      <h3 className="sub-title">use a hashtag #brasilisverigudi</h3>
      <h2 className="title-content">Nosso mural de Experiências</h2>
      <div className="content-container">
        <img src="../src/assets/img/voabb-d.png" alt="" />
        <img src="../src/assets/img/vingadoresmirim-d.png" alt="" />
        <img src="../src/assets/img/selfiedog-d.png" alt="" />
        <img src="../src/assets/img/selfiemontain-d.png" alt="" />
        <img src="../src/assets/img/selfiebike-d.png" alt="" />
        <img src="../src/assets/img/selfiebesties-d.png" alt="" />
      </div>
      <div className="card-container">
        <div className="card-box-gray1">
          <img src="../src/assets/img/Grupo 308@2x.png" alt="" />
          <p className="discription">O melhor do Brasil</p>
        </div>

        <div className="card-box-blue1">
          <img src="../src/assets/img/Grupo 305@2x.png" alt="" />
          <p className="discription">Cidades mais frequentadas</p>
        </div>

        <div className="card-box-gray2">
          <img src="../src/assets/img/Caminho 240@2x.png" alt="" />
          <p className="discription">Pontos turísticos</p>
        </div>

        <div className="card-box-blue2">
          <img src="../src/assets/img/Grupo 463@2x.png" alt="" />
          <p className="discription">Restaurantes</p>
        </div>
      </div>
    </section>
  )
}

export default Benefits