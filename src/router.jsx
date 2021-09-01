import { BrowserRouter, Switch, Route } from "react-router-dom";
import {Sobre} from './pages/Sobre'
import {Contato} from './pages/Contato'
import {Curriculo} from './pages/Curriculo'
import {Home} from './pages/Home'
import {Portifolio} from './pages/Portifolio'
import {Header,Footer} from "./components/Main";

export const Router = () =>{
    return (
        <BrowserRouter>
            <Header></Header>
            <Switch>
                <Route path={['/', '/home' ]}exact component={Home}></Route>
                <Route path='/sobre' component={Sobre}></Route>
                <Route path='/contato' component={Contato}></Route>
                <Route path='/curriculo' component={Curriculo}></Route>
                <Route path='/portifolio' component={Portifolio}></Route>

            </Switch>
            <Footer></Footer>
        </BrowserRouter>
    )
}