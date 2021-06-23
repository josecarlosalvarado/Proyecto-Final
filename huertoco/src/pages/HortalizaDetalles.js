import React from 'react'
import { useParams } from "react-router"
import CardPrincipal from '../componentes/CardPrincipal';
import Introduccion from '../componentes/Introduccion';


export default function HortalizaDetalles({ Hortalizas }) {

    const { HortalizaID } = useParams();


    return (
        <div>
            <Introduccion />
            <h1 className="text-light p-2 mb-3">Detalles</h1>
            <CardPrincipal
                title="Boniato"
                description="El Boniato es una de las hortalizas mas beneficiosas que hay"
                src="https://marketingcreativo.studio/wp-content/uploads/2021/05/boniato.jpg" />

            <h2 className="fs-1 mb-5">Boniato (especificaciones)</h2>

            <div className="row container">
                <div className="col-6 mt-4 p-3 ">
                    <p className="float-start"><strong> notas:</strong></p>
                    <p className="float-start">
                        El Boniato es una planta tropical o subtropical,que pertenece a la familia de las Convulvuláceas.Necesita de un clima cálido.
                        Si hace demasiado frío le perjudica, se hielan.En América Latina es más conocido por batata o camote. Los colonizadores españoles
                        lo llevaron a las Islas Filipinas y las Islas Malucas.
                    </p>
                    <p className="float-start">
                        Más tarde,los navegantes portugueses la hicieron llegar a la India, China y Japón.
                        Les gusta los climas calurosos y puede cultivarse cuando ya no exista riesgo de heladas.Se debe proteger el semillero.De los diferentes
                        brotes pueden hacerse esquejes.El sistema mas sencillo es dividir las plantas y separar cada brote con un trozo de tubérculo y raíces.
                        Se debe transplantar cuando el tiempo es cálido a mediados o finales de primavera.Las plantas se separan con un marco de unos 50 cm entre ellas.
                        Hay que abonarlas bien ya que es una planta muy exigente.Desde el transplante a la cosecha suelen pasar de 6 a 7 meses.
                    </p>
                    <p className="float-start">
                        Se debe transplantar cuando el tiempo es cálido a mediados o finales de primavera.Las plantas se separan con un marco de unos 50 cm entre ellas.
                        Hay que abonarlas bien ya que es una planta muy exigente.Desde el transplante a la cosecha suelen pasar de 6 a 7 meses.
                    </p>
                    
                    <p className="float-start"><strong> propiedades:</strong></p>
                    <p className="float-start">
                        - Provitamina A
                        - Vitamina B1 y B2
                        - Vitamina C
                        - Vitamina E
                        - Potasio
                        - Hierro 
                        - Es rico en hidratos de carbono de asimilación lenta.
                        - Va bien para problemas de piel
                        - Previene el cáncer
                        - Es rejuvenecedor
                        - Regula la presión sanguínea
                    </p>
                </div>
                <div className="col-6 p-3 mt-4 ">
                    <p><strong> Nombre:</strong> Boniato</p>
                    <p><strong> Nombre Cientifico:</strong>Ipomea batatas</p>
                    <p><strong> Familia:</strong>Convolvulácea</p>
                    <p><strong> Climas Templados:</strong>Enero a Marzo</p>
                    <p><strong> OtrosClimas:</strong>Enero a Marzo</p>
                    <p><strong> Plantación:</strong>Abril a Junio</p>
                    <p><strong> Cosecha:</strong>Septiembre a Noviembre</p>
                    <p><strong> Maceto:</strong>Mínimo 10 litros</p>
                    <p><strong> Sustrato/Abono:</strong>Drenado / Abonado</p>
                    <p><strong> Riego:</strong>Regular. 3 veces en semana</p>
                    <p><strong> Luz:</strong>Sol Directo</p>
                    <p><strong> Dificultad:</strong>Alto</p>
                </div>
            </div>

        </div>
    )
}
