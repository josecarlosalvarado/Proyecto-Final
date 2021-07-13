import React from 'react'

import { useHistory } from "react-router";

export default function CardDashboard() {

    const history = useHistory();
    const handleRegistro = (e) =>  history.push("/dashboardHortaliza");
    const handleRegistroAromaticas = (e) =>  history.push("/DashboardAromaticas");
    const handleRegistroContacto = (e) =>  history.push("/DashboardContacto");


    return (
        <div className="bg-white w-50  container p-4 shadow p-3 mb-5  bg-body rounded">
            <div className="d-flex justify-content-evenly">
                <button
                    onClick={() => handleRegistro()}
                    className="btn btn-dark mb-5">Hortaliza
                </button>
                <button
                    onClick={() => handleRegistroAromaticas()}
                    className="btn btn-dark mb-5">Aromaticas
                </button>
                <button
                    onClick={() => handleRegistroContacto()}
                    className="btn btn-dark mb-5">Contacto
                </button>
            </div>
        </div>
    )
}
