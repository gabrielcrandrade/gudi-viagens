import Logo from "../assets/img/Componente 13 – 1.svg"

import "../styles/components/header.sass"

const Header = () => {
    return (
        <header className="header-container">
            <div className="box-logo">
                <a className="link-logo" href="#site">
                    <img src={Logo} alt="Logo" />
                </a>
            </div>
            <nav>
                <ul>
                    <a href="#about"><li>Sobre</li></a>
                    <a href="#benefits"><li>Benefícios</li></a>
                    <a href="#footer"><li>Contato</li></a>
                </ul>
                    <a href="#contact">
                        <button>Agendar</button>
                    </a>
            </nav>
        </header>
    )
}

export default Header