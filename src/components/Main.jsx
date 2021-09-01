import { Link } from "react-router-dom"

export const Header = () =>{
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-black">
                <Link to={'/'} className="nav-link">
                    <img src="imagens/logo.png" alt="logo" className="img.fuid " class="logoNav"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toglee="collapse" data-bs-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/portifolio'} className="nav-link">Portifólio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/curriculo'} className="nav-link">Curriculo</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/contato'} className="nav-link">Contato</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/sobre'} className="nav-link">Sobre mim</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export const Footer = () => {
    return(
        <footer className="text-center bg-black">
            <img class="logoFooter" src="imagens/logo.png" alt="logo" />
            <p>Desenvolvido por Evandro Quirino ra:11208</p>
        </footer>
    )
}

export const Banner = props => {
    return(
        <>
        <div class="w-100 h-25" id="banner">
            <img src={props.imagem} alt={props.titulo} title={props.titulo} className="w-100"/>
        </div>
        </>
    )
}