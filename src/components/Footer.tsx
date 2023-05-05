import Logo from "../assets/img/Componente 13 – 1.svg"

import'../styles/components/footer.sass'

const Footer = () => {
  return (
    <section id="footer">
      <div className="container">
        <img src={Logo} alt='Logo Gudi, O bom da vida é viver.' />
        <ul className='footer-box'>
          <li>
            <a href='##' title='Sobre nós'>Sobre nós</a>
          </li>
          <li>
            <a href='##' title='Mural de memórias'>Mural de memórias</a>
          </li>
          <li>
            <a href='##' title='Eventos Gudi'>Eventos Gudi</a>
          </li>
          <li>
            <a href='##' title='Nosso blog'>Nosso blog</a>
          </li>
        </ul>
      </div>

      <div className="container">
        <h3 className="title">Contato</h3>
        <ul className='footer-box'>
          <li>
            <a href='##' title='Chat Virtual'>Chat Virtual</a>
          </li>
          <li>
            <a href='##' title='SAC Online'>SAC Online</a>
          </li>
          <li>
            <a href='##' title='Ouvidoria'>Ouvidoria</a>
          </li>
          <li>
            <a href='##' title='FAQ'>FAQ</a>
          </li>
        </ul>
      </div>

      <div className="container">
        <h3 className="title">benefícios</h3>
        <ul className='footer-box'>
          <li>
            <a href='##' title='Conta digital Gudi'>Conta digital Gudi</a>
          </li>
          <li>
            <a href='##' title='Viaje com Milhas'>Viaje com Milhas</a>
          </li>
          <li>
            <a href='##' title='C6 Átomos'>C6 Átomos</a>
          </li>
          <li>
            <a href='##' title='ID Jovem'>ID Jovem</a>
          </li>
        </ul>
      </div>

      <div className="container">
        <h3 className="title">Lugares</h3>
        <ul className='footer-box'>
          <li>
            <a href='##' title='O melhor do Brasil'>O melhor do Brasil</a>
          </li>
          <li>
            <a href='##' title='Cidades frequentes'>Cidades frequentes</a>
          </li>
          <li>
            <a href='##' title='Pontos turísticos'>Pontos turísticos</a>
          </li>
          <li>
            <a href='##' title='Restaurantes'>Restaurantes</a>
          </li>
        </ul>
      </div>

      <div className="container">
        <h3 className="title">Curiosidades</h3>
        <ul className='footer-box'>
          <li>
            <a href='##' title='Cultura e tradições'>Cultura e tradições</a>
          </li>
          <li>
            <a href='##' title='Pratos típicos'>Pratos típicos</a>
          </li>
          <li>
            <a href='##' title='Mitos brasileiros'>Mitos brasileiros</a>
          </li>
          <li>
            <a href='##' title='Carnaval'>Carnaval</a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Footer