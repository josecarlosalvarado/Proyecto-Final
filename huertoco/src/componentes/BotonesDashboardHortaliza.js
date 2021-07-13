import React from "react";

import { useHistory } from "react-router";

export default function BotonesDashboardHortaliza() {
    const history = useHistory();

    const handleRegistroAromaticas = (e) =>  history.push("/DashboardAromaticas");
    const handleRegistroContacto = (e) =>  history.push("/DashboardContacto");
    
  return (
    <div>
      <div className="mb-2 d-flex justify-content-start">
        <button
          onClick={() => handleRegistroAromaticas()}
          className="btn btn-dark me-2 "
        >
          Aromaticas
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
