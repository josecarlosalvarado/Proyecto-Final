import React from 'react'
import FormRegistro from "../componentes/FormRegistro"
import Footer from '../componentes/Footer';

export default function Registro() {

    return (
        <div className="vh-100 d-flex justify-content-between flex-column">
            <div className="mt-3">
                <h1 className="text-light mt-3">Registro</h1>
                <p className="text-light fs-2 text" >Registrate Para contar con todas las funcionalidades de la web</p>
                <p className="text-light fs-4"></p>
            </div>
            <FormRegistro/>
            <Footer/>
        </div>
    )
}
