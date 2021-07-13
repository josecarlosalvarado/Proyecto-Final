import React from 'react'
import FormAñadirAromatica from "../componentes/FormAñadirAromatica"
import Footer from '../componentes/Footer';

export default function AñadirHortaliza() {
    return (
        <div className="vh-100 d-flex justify-content-between flex-column">
        <div className="mt-3">
            <h1 className="text-light mt-3">Añadir Aromatica</h1>
            <p className="text-light fs-2 text" >Se añadira una Aromatica</p>
            <p className="text-light fs-4">cualquier duda que tengas te la resolveremos a traves de el formulario contacto</p>
        </div>
        <FormAñadirAromatica/>
        <Footer/>
    </div>
    )
}
