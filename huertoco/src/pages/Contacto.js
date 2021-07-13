import React from 'react'
import Form from "../componentes/Form"
import Footer from '../componentes/Footer';



export default function Contacto() {
    return (
        <div className="vh-100 d-flex justify-content-between flex-column">
            <div className="mt-3">
                <h1 className="text-light mt-3">Contacto</h1>
                <p className="text-light fs-2 text" >¿En que te podemos ayudar?</p>
                <p className="text-light fs-4">cualquier duda que tengas te la resolveremos a traves de un email</p>
            </div>
            <Form/>
            <Footer/>
        </div>
    )
}
