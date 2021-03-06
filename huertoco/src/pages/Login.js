import React from 'react'
import FormLogin from "../componentes/FormLogin"
import Footer from '../componentes/Footer';

export default function Login() {

    return (
        <div className="vh-100 d-flex justify-content-between flex-column">
            <div className="mt-3">
                <h1 className="text-light mt-3">Login</h1>
                <p className="text-light fs-2 text" >inicia sesion para poder ver el panel de Administración</p>
                <p className="text-light fs-4"></p>
            </div>
            <FormLogin/>
            <Footer/>
        </div>
    )
}
