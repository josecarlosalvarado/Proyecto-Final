import React from 'react'
import { useParams } from "react-router"
import CardPrincipal from '../componentes/CardPrincipal';
import Introduccion from '../componentes/Introduccion';
import { useEffect } from "react";
import { useState } from "react";

import {URL_VEGETABLE_DETALLE,} from '../config/config';


export default function HortalizaDetalles() {

    const { HortalizaID } = useParams();
    const [Hortaliza, setHortaliza] = useState({})



    useEffect(() => {
        fetch(URL_VEGETABLE_DETALLE + HortalizaID)
        .then(Response => Response.json())
        .then(data => {
            setHortaliza(data);
        });
    }, [])


    return (
        <div>
            <Introduccion />
            <h1 className="text-light p-2 mb-3">Detalles</h1>
            <CardPrincipal
                title= {Hortaliza.name}
                description='El {Hortaliza.name} es una de las hortalizas mas beneficiosas que hay'
                src={Hortaliza.image} />
            <h2 className="fs-1 mb-5">{Hortaliza.name}</h2>
            <div className="row justify-content-md-center">
                <div className="row container ms-5 ">
                    <div className="col-6 mt-4 p-3 text-start row">
                        <p className="float-start"><strong> notas:</strong></p>
                        <p className="float-start">
                            {Hortaliza.notes}
                        </p>
                        
                        <p className="float-start"><strong> propiedades:</strong></p>
                        <p className="float-start">
                            {Hortaliza.properties}
                        </p>
                    </div>
                    <div className="col-6 p-3 mt-4 text-start row ">
                        <p><strong> Nombre:</strong> {Hortaliza.name}</p>
                        <p><strong> Nombre Cientifico:</strong>{Hortaliza.scientificName}</p>
                        <p><strong> Familia:</strong>{Hortaliza.family}</p>
                        <p><strong> Climas Templados:</strong>{Hortaliza.sowingTemperateClimates}</p>
                        <p><strong> OtrosClimas:</strong>{Hortaliza.sowOtherClimates}</p>
                        <p><strong> Plantación:</strong>{Hortaliza.plantation}</p>
                        <p><strong> Cosecha:</strong>{Hortaliza.harvest}</p>
                        <p><strong> Maceto:</strong>{Hortaliza.flowerpot}</p>
                        <p><strong> Sustrato/Abono:</strong>{Hortaliza.substrateFertilizer}</p>
                        <p><strong> Riego:</strong>{Hortaliza.irrigation}</p>
                        <p><strong> Luz:</strong>{Hortaliza.light}</p>
                        <p><strong> Dificultad:</strong>{Hortaliza.difficulty}</p>
                    </div>
                </div>
            </div>



        </div>
    )
}
