import CardPrincipal from "../componentes/CardPrincipal";
import Footer from "../componentes/Footer";
import Introduccion from "../componentes/Introduccion";

import { useState } from "react";
import { useHistory } from "react-router";

export default function Aromaticas() {


    const history = useHistory();

    const handleRedirect = HortalizaID => history.push("/HortalizaDetalles/" + HortalizaID);

  const AromaticasArray = [
    {
      nombre: "cilantro",
      scr: "file:///Users/josecarlosalvaradosanchez/Documents/ProyectoFinal/huertoco/src/img/cilantro.jpg",
    },

    {
      nombre: "Eneldo",
      scr: "file:///Users/josecarlosalvaradosanchez/Documents/ProyectoFinal/huertoco/src/img/eneldo.jpg",
    },

    {
      nombre: "Estragón",
      scr: "file:///Users/josecarlosalvaradosanchez/Documents/ProyectoFinal/huertoco/src/img/estragon.jpg",
    },

    {
      nombre: "hierbaluia",
      scr: "file:///Users/josecarlosalvaradosanchez/Documents/ProyectoFinal/huertoco/src/img/hierbaluisa.jpg",
    },

    {
      nombre: "laurel",
      scr: "file:///Users/josecarlosalvaradosanchez/Documents/ProyectoFinal/huertoco/src/img/laurel.jpg",
    },

    {
      nombre: "lavanda",
      scr: "file:///Users/josecarlosalvaradosanchez/Documents/ProyectoFinal/huertoco/src/img/lavanda.jpg",
    },

    {
      nombre: "mejorana",
      scr: "file:///Users/josecarlosalvaradosanchez/Documents/ProyectoFinal/huertoco/src/img/mejorana.jpg",
    },

    {
      nombre: "menta",
      scr: "file:///Users/josecarlosalvaradosanchez/Documents/ProyectoFinal/huertoco/src/img/menta.jpg",
    },

    {
      nombre: "orégano",
      scr: "file:///Users/josecarlosalvaradosanchez/Documents/ProyectoFinal/huertoco/src/img/oregano.jpg",
    },
  ];

  const [Aromaticas, setAromaticas] = useState(AromaticasArray);

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
      />

      <div className="row mt-4">
        {Aromaticas.map((Aromatica) => {
          return (
            <div className="mt-3 col-4 px-4 mb-3" key={Aromatica.id}>
              <div
                style={{
                  backgroundImage: `url(${Aromatica.scr})`,
                  height: 200,
                  backgroundSize: "cover",
                }}
              >
                <p
                  onClick={() => handleRedirect(Aromatica.id)}
                  className="float-start ms-2 bg-dark text-light w-50 opacity-50"
                >
                  {Aromatica.nombre}
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
