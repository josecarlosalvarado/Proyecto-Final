import { useState } from "react";
import { useHistory } from "react-router";
import { useEffect } from "react";

import CardPrincipal from '../componentes/CardPrincipal';
import Footer from '../componentes/Footer';
import Introduccion from '../componentes/Introduccion';

import {URL_VEGETABLE, URL_INPUT_VEGETABLE} from '../config/config';

export default function Home() {
    const [Hortalizas, setHortalizas] = useState([]);
    const [input, setInput] = useState("");

    const history = useHistory();

    const handleRedirect = HortalizaID => history.push("/HortalizaDetalles/" + HortalizaID);
    const handleRegistro = (e) =>  history.push("/Registro");
    const handleSearch = e => setInput(e.target.value);

    useEffect(() => {
        fetch(URL_VEGETABLE)
        .then(Response => Response.json())
        .then(data => {
            setHortalizas(data);
            console.log(data);
        });
    }, [])
    


    useEffect(() => {
        fetch(URL_INPUT_VEGETABLE + input)
        .then(Response => Response.json())
        .then(data => {
            setHortalizas(data);
        });
    }, [input, setHortalizas])

    return (
        <div>
            <Introduccion/>
                <button
                onClick={() => handleRegistro()}
                className="btn btn-dark mb-5">REGISTRATE</button>

            <CardPrincipal 
            title="La hortaliza más Famosa"
            description="A nuestros usuarios les encanta las hortalizas y esta es la mas buscada"
            src="https://jardineriaplantasyflores.com/wp-content/uploads/2016/10/cultivar-tomates-con-exito-780x405.jpg.webp"/>


            <div className="mb-2">
                <div className="col"><strong className="fs-2">Hortalizas</strong></div>
            </div>

            <input
                type="text"
                placeholder="Buscar"
                className="input-group container w-100 border border-secondary rounded mt-4"
                value={input}
                onChange={handleSearch}
               />

            <div className="row mt-4 p-3">
            {Hortalizas.map(Hortaliza => {
                return (
                    <div className="mt-3 col-4 px-4 mb-3" key={Hortaliza.id}>
                        <div style={{
                                   backgroundImage: `url(${Hortaliza.image})`,
                                   height: 200,
                                   backgroundSize: "cover"
                        }}>
                        <p 
                        onClick={() => handleRedirect(Hortaliza.id)}
                        className="float-start ms-2 bg-dark text-light w-50 opacity-50">{Hortaliza.name}</p>
                        </div>
                    </div>
                )
            })}
            </div>

            <Footer/>
        </div>
    )
}
