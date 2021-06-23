import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

import hortaliza from './hortaliza';
import Aromaticas from './Aromaticas';
import Contacto from './Contacto';
import Home from './Home';
import Login from './Login';
import { headerUrl } from '../config/config';
import HortalizaDetalles from './HortalizaDetalles';

export default function Rutas() {
    return (
        <div className="App">
            <div style={{
                backgroundImage: `url(${headerUrl})`,
                height: 500,
            }}>
                <BrowserRouter>

                    <nav className="navbar navbar-expand-xxl p-2 fs-4 navbar-fixed-top">

                        <NavLink exact to="/" className="text-decoration-none text-light">Home</NavLink>
                        <NavLink to="/hortaliza" className="text-decoration-none text-light">Hortalizas</NavLink>
                        <NavLink to="/Aromaticas" className="text-decoration-none text-light">Aromaticas</NavLink>
                        <NavLink to="/Contacto" className="text-decoration-none text-light">Contacto</NavLink>
                        <NavLink to="/Login">
                            <button className="btn btn-secondary" >Login</button>
                        </NavLink>

                    </nav>
                    <Switch>

                        <Route exact path="/" component={Home} />
                        <Route path="/hortaliza" component={hortaliza} />
                        <Route path="/Aromaticas" component={Aromaticas} />
                        <Route path="/Contacto" component={Contacto} />
                        <Route path="/Login" component={Login} />

                        <Route path="/HortalizaDetalles/:HortalizaID" component={HortalizaDetalles} />
                    </Switch>

                </BrowserRouter>


            </div>
        </div>
    )
}
