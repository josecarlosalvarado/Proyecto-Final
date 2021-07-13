import { useHistory } from "react-router";

import jwt_decode from "jwt-decode";

export default function Footer() {

    
    
    const history = useHistory();
    const handleRedirect = (e) => {
        const TOKEN_LOGIN_FOOTER = localStorage.getItem("TOKEN_KEY");
        const decoded = TOKEN_LOGIN_FOOTER ? jwt_decode(TOKEN_LOGIN_FOOTER) : "";


        if(!TOKEN_LOGIN_FOOTER && Date.now() > decoded.exp) {
            history.push("/Login");
        } else {
            history.push("/DashboardHortaliza");
            }
    };
    const handleAromatica = (e) =>  history.push("/Aromaticas");
    const handleHortaliza = (e) =>  history.push("/Hortaliza");
    const handleContacto= (e) =>  history.push("/Contacto");
    return (
        <div>
            <footer>
                <hr></hr>
                <ul class="nav d-flex justify-content-evenly">
                    <p 
                        className="nav-item"
                        onClick={() => handleHortaliza()}
                        >Hortaliza
                    </p>
                    <p 
                        className="nav-item"
                        onClick={() => handleAromatica()}
                        >Aromatica
                    </p>
                    <p 
                        className="nav-item"
                        onClick={() => handleContacto()}
                        >Contacto
                    </p>
                    <li class="nav-item">
                    <p 
                        className="nav-item"
                        onClick={() => handleRedirect()}
                        >acceso administracion
                    </p>
                    </li>
                </ul>
            </footer>
        </div>
    )
}
