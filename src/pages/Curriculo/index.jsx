import{Banner} from '../../components/Main'

export const Curriculo = () =>{
    return(
        <>
        <>
        <Banner titulo="banner curriculo" imagem="imagens/curriculo.png"></Banner>
            <h1 className="text-center">curriculo</h1>
            <div className="container">
                <h3>EXPERIÊNCIA PROFISSIONAL</h3>
                <h5>Chefe de produção</h5>
                    <p>Parresia Camiseteria | Jan 2016 - Abril 2020- Responsável por corte, estampas e produção geral de uniformes.</p> 
                    <p>- Trabalhando e liderando uma equipe composta por designers,estampadores e costureiros.</p>
                <h5>Faturista</h5>
                    <p>Nova Beer | Set 2020 - julho 2021 - Trabalhando com o faturamento em geral da empresa, sendo responsável pela movimentação virtual dos produtos no estoque.</p>
                <h5>Estagiario</h5>
                    <p>e-code | agosto 2021 - atualmente - estagiario desenvolvimento web</p>
            </div>
        </>
        </>
    )
}