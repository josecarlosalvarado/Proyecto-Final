import React from "react";
import { useHistory } from "react-router";

export default function BotonesDashboardContacto() {
    const history = useHistory();

    const handleRegistro = (e) =>  history.push("/dashboardHortaliza");
    const handleRegistroAromaticas = (e) =>  history.push("/DashboardAromaticas");
  return (
    <div>
      <div className="mb-2 d-flex justify-content-start">
        <button onClick={() => handleRegistro()} className="btn btn-dark me-2">
          Hortaliza
        </button>
        <button
          onClick={() => handleRegistroAromaticas()}
          className="btn btn-dark"
        >
          Aromaticas
        </button>
      </div>
    </div>
  );
}
