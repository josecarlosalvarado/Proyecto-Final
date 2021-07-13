import React from 'react'
import { useParams } from "react-router"
import CardPrincipal from '../componentes/CardPrincipal';
import Introduccion from '../componentes/Introduccion';
import { useEffect } from "react";
import { useState } from "react";

import {URL_AROMATICAS_DETALLES,} from '../config/config';


export default function HortalizaDetalles() {

    const { AromaticasID } = useParams();
    const [Aromaticas, setAromaticas] = useState({});

    useEffect(() => {
        fetch(URL_AROMATICAS_DETALLES + AromaticasID)
        .then(Response => Response.json())
        .then(data => {
            setAromaticas(data);
        });
    }, [])


    return (
        <div>
            <Introduccion />
            <h1 className="text-light p-2 mb-3">Detalles</h1>
            <CardPrincipal
                title= {Aromaticas.name}
                description='El {Hortaliza.name} es una de las hortalizas mas beneficiosas que hay'
                src={Aromaticas.image} />
            <h2 className="fs-1 mb-5">{Aromaticas.name}</h2>

            <div className="row justify-content-md-center">
                <div className="row container ms-5 ">
                    <div className="col-6 mt-4 p-3 text-start row">
                        <p className="float-start"><strong> notas:</strong></p>
                        <p className="float-start">
                            {Aromaticas.notes}
                        </p>
                        
                        <p className="float-start"><strong> propiedades:</strong></p>
                        <p className="float-start">
                            {Aromaticas.properties}
                        </p>
                    </div>
                    <div className="col-6 p-3 mt-4 text-start row">
                        <p><strong> Nombre:</strong> {Aromaticas.name}</p>
                        <p><strong> Nombre Cientifico:</strong>{Aromaticas.scientificName}</p>
                        <p><strong> Familia:</strong>{Aromaticas.family}</p>
                        <p><strong> Climas Templados:</strong>{Aromaticas.sowingTemperateClimates}</p>
                        <p><strong> OtrosClimas:</strong>{Aromaticas.sowOtherClimates}</p>
                        <p><strong> Plantación:</strong>{Aromaticas.plantation}</p>
                        <p><strong> Cosecha:</strong>{Aromaticas.harvest}</p>
                        <p><strong> Maceto:</strong>{Aromaticas.flowerpot}</p>
                        <p><strong> Sustrato/Abono:</strong>{Aromaticas.substrateFertilizer}</p>
                        <p><strong> Riego:</strong>{Aromaticas.irrigation}</p>
                        <p><strong> Luz:</strong>{Aromaticas.light}</p>
                        <p><strong> Dificultad:</strong>{Aromaticas.difficulty}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
