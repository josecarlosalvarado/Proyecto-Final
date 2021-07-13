import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

import hortaliza from './hortaliza';
import Aromaticas from './Aromaticas';
import Contacto from './Contacto';
import Home from './Home';
import Login from './Login';
import { headerUrl } from '../config/config';
import HortalizaDetalles from './HortalizaDetalles';
import AromaticasDetalles from './AromaticasDetalles';
import DashboardHortaliza from './DashboardHortaliza';
import DashboardAromaticas from './DashboardAromaticas';
import DashboardContacto from './DashboardContacto';
import AñadirHortaliza from './AñadirHortaliza';
import AñadirAromatica from './AñadirAromatica';
import ModificarHortaliza from './ModificarHortaliza';
import Registro from "./Registro";

export default function Rutas() {
    return (
        <div className="App">
            <div style={{
                backgroundImage: `url(${headerUrl})`,
                height: 500,
            }}>
                <BrowserRouter>

                    <nav className="navbar p-2 fs-4 navbar-fixed-top">

                        <NavLink exact to="/" className="text-decoration-none text-light">Home</NavLink>
                        <NavLink to="/hortaliza" className="text-decoration-none text-light">Hortalizas</NavLink>
                        <NavLink to="/Aromaticas" className="text-decoration-none text-light">Aromaticas</NavLink>
                        <NavLink to="/Contacto" className="text-decoration-none text-light">Contacto</NavLink>
                        <NavLink to="/Login">&#128100;</NavLink>

                    </nav>
                    <Switch>

                        <Route exact path="/" component={Home} />
                        <Route path="/hortaliza" component={hortaliza} />
                        <Route path="/Aromaticas" component={Aromaticas} />
                        <Route path="/Contacto" component={Contacto} />
                        <Route path="/Login" component={Login} />

                        <Route path="/HortalizaDetalles/:HortalizaID" component={HortalizaDetalles} />
                        <Route path="/AromaticasDetalles/:AromaticasID" component={AromaticasDetalles} />
                        <Route path="/ModificarHortaliza/:HortalizaID" component={ModificarHortaliza} />
                        <Route path="/Registro" component={Registro}/>
                        <Route path="/DashboardHortaliza" component={DashboardHortaliza}/>
                        <Route path="/DashboardAromaticas" component={DashboardAromaticas}/>
                        <Route path="/DashboardContacto" component={DashboardContacto}/>
                        <Route path="/AñadirHortaliza" component={AñadirHortaliza}/>
                        <Route path="/AñadirAromatica" component={AñadirAromatica}/>
                    </Switch>

                </BrowserRouter>


            </div>
        </div>
    )
}
