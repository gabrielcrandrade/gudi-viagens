import casal from "../assets/img/casal-desktop.png"
import amigosMontanha from "../assets/img/amigosMontanha-desktop.png"
import amigosPiscina from "../assets/img/amigosPiscina-desktop.png"


import "../styles/components/about.sass"

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="box-content-image">
          <img className="img" src={casal} alt="Casal em viagem" />
        </div>

        <div className="box-content-text">
          <div className="box-info">
            <h3 className="sub-title">
              <h4><span className="line"></span> Viagens Nacionais</h4>
            </h3>
            <h2 className="title-content">O clima perfeito, no lugar perfeito</h2>
            <p className="paragraph-content">Planeje sua viagem com sua paquera, compartilhar momentos preciosos juntos não tem preço.</p>
            <button className="btn">Agendar</button>
          </div>
        </div>

        <div className="box-content-text">
          <div className="box-info">
            <h3 className="sub-title">
              <h4><span className="line"></span> Viagens Nacionais</h4>
            </h3>
            <h2 className="title-content">Curta uma nova vibe entre amigos</h2>
            <p className="paragraph-content">Rachando a conta ou rachando o bico, a melhor hora pra curtir é entre amigos. Conheça nossos <span>Planos Multi</span>.</p>
            <button className="btn">Agendar</button>
          </div>
        </div>

        <div className="box-content-image">
          <img className="img" src={amigosMontanha} alt="Amigos na montanha" />
        </div>

        <div className="box-content-image">
          <img className="img" src={amigosPiscina} alt="Amigos na piscina" />
        </div>

        <div className="box-content-text">
          <div className="box-info">
            <h3 className="sub-title">
              <span className="line"></span> Viagens Nacionais
            </h3>
            <h2 className="title-content">Algumas experiências são inexplicáveis</h2>
            <p className="paragraph-content">Conheça as fontes termais de <span>Caldas Novas, Goiás</span>. Águas quentes, num clima sereno, relaxante e natural.</p>
            <button className="btn">Agendar</button>
          </div>
        </div>
      </div>

      <div className="travel-container">
        <div className="travel-container-box-rj">
          <button className="btn-rj">Rio de Janeiro</button>
        </div>
        <div className="travel-container-box-ro">
          <button className="btn-ro">Rio das Ostras</button>
        </div>
        <div className="travel-container-box-cn">
          <button className="btn-cn">Caldas Novas</button>
        </div>
        <div className="travel-container-box-am">
          <button className="btn-am">Amazônia</button>
        </div>
      </div>

    </section>
  )
}

export default About