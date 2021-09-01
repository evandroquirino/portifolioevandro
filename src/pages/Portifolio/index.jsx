import{Banner} from '../../components/Main'

export const Portifolio = () =>{
    return(
        <>
        <>
        <Banner titulo="banner portifolio" imagem="imagens/portifolio.jpg"></Banner>
            <h1 className="text-center">projetos</h1>
        </>
            <div className="container">
                <ul>
                    <li>https://github.com/evandroquirino/calculadoraJavaScript</li>
                    <li>https://github.com/evandroquirino/metodo-pomodoro-moveIt</li>
                    <li>https://github.com/evandroquirino/Hackathon2021</li>
                    <li>https://gitlab.com/evandroquirin/website-pratica</li>
                    <li>https://gitlab.com/evandroquirin/tarefa-envio-de-email</li>
                    <li>https://gitlab.com/evandroquirin/ecode-estagio</li>
                </ul>
            </div>
        </>
    )
}