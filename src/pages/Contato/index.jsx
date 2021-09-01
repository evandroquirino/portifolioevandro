import{Banner} from '../../components/Main'

export const Contato = () =>{
    return(
        
        <>
        <Banner titulo="banner contatos" imagem="imagens/contato.png"></Banner>
            <h1 className="text-center">contato</h1>
            <div className="container">
                <ul>
                    <li> <strong>evandroquirin@gmail.com</strong></li>
                    <li>https://www.instagram.com/evandroquirinoo/</li>
                    <li>https://www.facebook.com/evandro.quirin</li>
                </ul>
            </div>
        </>
       

    )
}