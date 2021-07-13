import React from "react";
import { useHistory } from "react-router";

export default function BotonesDashboardAromatic() {
    const history = useHistory();

    const handleRegistro = (e) =>  history.push("/dashboardHortaliza");
    const handleRegistroContacto = (e) =>  history.push("/DashboardContacto");

  return (
    <div>
      <div className="mb-2 d-flex justify-content-start">
        <button onClick={() => handleRegistro()} className="btn btn-dark me-2">
          Hortaliza
        </button>
        <button
          onClick={() => handleRegistroContacto()}
          className="btn btn-dark"
        >
          Contacto
        </button>
      </div>
    </div>
  );
}
