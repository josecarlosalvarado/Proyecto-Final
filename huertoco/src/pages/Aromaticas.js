import CardPrincipal from "../componentes/CardPrincipal";
import Footer from "../componentes/Footer";
import Introduccion from "../componentes/Introduccion";
import { useEffect } from "react";

import { useState } from "react";
import { useHistory } from "react-router";

import {URL_AROMATICAS, URL_AROMATICAS_INPUT} from '../config/config';

export default function Aromaticas() {
  
    const [input, setInput] = useState("");
    const [Aromaticas, setAromaticas] = useState([]);

    const history = useHistory();

    const handleRedirect = AromaticasID => history.push("/AromaticasDetalles/" + AromaticasID);
    const handleSearch = e => setInput(e.target.value);

    useEffect(() => {
      fetch(URL_AROMATICAS)
      .then(Response => Response.json())
      .then(data => {
          setAromaticas(data);
      });
  }, [])


  useEffect(() => {
    fetch(URL_AROMATICAS_INPUT + input)
    .then(Response => Response.json())
    .then(data => {
      setAromaticas(data);
    });
}, [input, setAromaticas])




  return (
    <div>
      <h1 className="text-light">Aromaticas</h1>
      <Introduccion />
      <CardPrincipal
        title="Las mejores plantas Aromaticas"
        description="Las plantas Aromaticas perfectas para cocinar"
        src="https://i.pinimg.com/originals/f6/cb/18/f6cb188bf477486c3836144e2b397d55.jpg"
      />

      <div className="mb-2">
        <div className="col">
          <strong className="fs-2">Aromaticas</strong>
        </div>
      </div>

      <input
          type="text"
          placeholder="Buscar"
          className="input-group container w-100 border border-secondary rounded mt-4"
          value={input}
          onChange={handleSearch}
      />

      <div className="row mt-4">
        {Aromaticas.map((Aromatica) => {
          return (
            <div className="mt-3 col-4 px-4 mb-3" key={Aromatica.id}>
              <div
                style={{
                  backgroundImage: `url(${Aromatica.image})`,
                  height: 200,
                  backgroundSize: "cover",
                }}
              >
                <p
                  onClick={() => handleRedirect(Aromatica.id)}
                  className="float-start ms-2 bg-dark text-light w-50 opacity-50"
                >
                  {Aromatica.name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
