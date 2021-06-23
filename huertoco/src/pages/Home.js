import { useState } from "react";
import { useHistory } from "react-router";

import CardPrincipal from '../componentes/CardPrincipal';
import Footer from '../componentes/Footer';
import Introduccion from '../componentes/Introduccion';

export default function Home() {

    const history = useHistory();

    const handleRedirect = HortalizaID => history.push("/HortalizaDetalles/" + HortalizaID);

    const HortalizasArray = [
        { nombre: "Acedera", nombreCientifico: "Rumex acetosa", familia: " poligonáceas", siembraClimasTemplados: "Todo el año", siembraotrosClimas: "Todo el año", plantacion: "Solo siembra directa", cosecha: "Abril a junio", maceto: "mínimo 1 litro", sustratoAbono: "mullido/muy Abonado", riego: "Abundante. 4 veces en semana", luz: "sol directo", clima: "Templado", Dificultad: "Fácil", filtroMes: "1-12", id: 1, scr: "https://marketingcreativo.studio/wp-content/uploads/2021/05/acedera.jpg",propiedades: "La acedera tiene cantidades muy recomendables de hierro y vitamina C.Es aconsejable para abrir el apetito y para estimular los ácidos gástricos.", plagas: "Es una planta silvestre que no suele ser atacada por plagas ni hongos."},

        { nombre: "Acelga", nombreCientifico: "Beta vulgaris", familia: " Quenopodiáceas", siembraClimasTemplados: "Todo el año", siembraotrosClimas: "A finales de invierno", plantacion: "Con hojas de unos 10/15 cm", cosecha: "Al mes de plantación", maceto: "Mínimo 25 litros", sustratoAbono: "mullido/muy Abonado", riego: "Regular. Poca cantidad", luz: "Evitar Sol directo constante", clima: "Todos", Dificultad: "Fácil", filtroMes: "1-12", id: 2, scr: "https://marketingcreativo.studio/wp-content/uploads/2021/05/acelga.jpg",propiedades: "El jugo contiene hasta un 27% de sacarosa, además de coniferina, galactinol, vanillina y gran cantidad de ácidos orgánicos y azúcares. Uno de sus principios activos es betaína, que transforma los triglicéridos en lipoproteínas. Entre los aminoácidos se encuentran la guanidina, isoleucina, glutamina y arginina. Además se encuentran saponinas, derivados de la xantina y la colina.", plagas: "La acelga puede ser atacada por caracoles y babosas. Con exceso de humedad puede padecer enfermedades de tipo fúngicas como la roya y el oídio." },

        { nombre: "Ajo", nombreCientifico: "Allium sativum", familia: " lilliáceas", siembraClimasTemplados: "Todo el año", siembraotrosClimas: "Octubre a Enero", plantacion: "Enero a Marzo", cosecha: "Cuando este seca", maceto: "Mínimo 3 litros", sustratoAbono: "mullido/poco exigente en Abonado", riego: "Poco frecuente. Poca cantidad", luz: "Sol directo", clima: "Templado", Dificultad: "Fácil", filtroMes: "1-12", id: 3, scr: "https://marketingcreativo.studio/wp-content/uploads/2021/05/ajo.jpg", propiedades: "El ajo crudo tiene propiedades antisépticas, fungicidas, bactericidas y depurativas. Las excelentes cualidades diuréticas son también ampliamente conocidas y divulgadas.Por todo esto, el ajo se ha utilizado desde la antigüedad para tratar diversas afecciones.Las propiedades beneficiosas del ajo son tales que incluso se ha llegado a hablar de las propiedades anticancerígenas del ajo en muchos estudios recientes.", plagas: "En épocas de humedad puede verse afectada por roya, esta enfermedad retrasa el crecimiento de la planta." },

        { nombre: "Alcachofa", nombreCientifico: "Cynara scolymus", familia: "Compuestas", siembraClimasTemplados: "Octubre a Enero", siembraotrosClimas: "Enero a Marzo", plantacion: "Septiembre a Abril", cosecha: "A las 12 semanas del transplante", maceto: "Mínimo 30 litros", sustratoAbono: "Mullido y muy abonado", riego: "Abundante. 4 veces en semana", luz: "Sol y Sombra", clima: "Todos", Dificultad: "Media", filtroMes: "10-11-12-1", id: 4, scr: "https://marketingcreativo.studio/wp-content/uploads/2021/05/alcachofa.jpg",propiedades: "La hoja de la alcachofa contiene magnesio, potasio y esteroles, los cuales actúan en cierta sinergía con la cinarina, una sustancia tanto aromática como amarga.La alcachofa presenta una importantísima actividad reguladora de la secreción biliar, estando indicada en casos de mala digestión de las grasas, ictericia e hígado perezoso.Ayuda a regenerar las células hepáticas, ayudando a combatir las sustancias tóxicas y puede ser ideal en casos de hígado graso, a la vez que es capaz de reducir el colesterol alto. Además, la alcachofa puede convertirse en un excelente depurador, ayudando a nuestro organismo a expulsar las diferentes toxinas y sustancias que no necesita.Por este motivo,tampoco debemos olvidarnos de su consumo en dietas de adelgazamiento y de control de peso.",plagas: "Suele ser afectada por el gusano barrenador, que abre galerías en los tallos.También puede ser atacada por pulgón." },

        { nombre: "Apio", nombreCientifico: "Apium graveolens", familia: "Umbeliferas", siembraClimasTemplados: "Febrero a Marzo", siembraotrosClimas: "Marzo a Junio", plantacion: "Abril a Octubre", cosecha: "Todo el año", maceto: "Mínimo 10 litros", sustratoAbono: "Todo el año", riego: "Regular. 3 Veces en semana", luz: "Sol Directo", clima: "Templados", Dificultad: "Fácil", filtroMes: "2-3", id: 5, scr: "https://marketingcreativo.studio/wp-content/uploads/2021/05/apio.jpg",propiedades: "Los beneficios del apio para bajar de peso se basan en las propiedades curativas del apio para la obesidad.",plagas: "Suele ser afectada por ataque de pulgones, Mosca de la zanahoria, Mosca del apio y por enfermedades fúngicas como la septoriosis." },

        { nombre: "Berenjena", nombreCientifico: "Solanum melongena", familia: "Solánaceas", siembraClimasTemplados: "Febrero a Marzo", siembraotrosClimas: "Marzo a Junio", plantacion: "Abril a mayo", cosecha: "Junio a Noviembre", maceto: "Mínimo 30 litros", sustratoAbono: "Mullido y bien abonado", riego: "Abundante. 3 veces en semana", luz: "Sol Directo", clima: "Templados", Dificultad: "Media", filtroMes: "2-3", id: 6, scr: "https://marketingcreativo.studio/wp-content/uploads/2021/05/berenjena.jpg", propiedades: "Recomendadas para la circulación", plagas: "En un ambiente seco y de calor excesivo puede ser afectada por la mosca blanca y la araña roja. tambien puede ser atacada por pulgones. No se deben mojar las hojas para evitar enfermedades." },

        { nombre: "Berros", nombreCientifico: "Nasturtium officinale", familia: "Brassicaceae", siembraClimasTemplados: "Todo el año", siembraotrosClimas: "Todo el año (protegido)", plantacion: "Todo el año", cosecha: "Septiembre a Diciembre", maceto: "Mínimo 1 litros", sustratoAbono: "Arenoso y muy Abonado", riego: "Escaso. 2 veces en semana", luz: "Sol Directo", clima: "Templados", Dificultad: "Fácil", filtroMes: "1-12", id: 7, scr: "https://marketingcreativo.studio/wp-content/uploads/2021/05/berros.jpg",propiedades: "Los berros están recomendados principalmente para problemas renales.Su tratamiento consiste en moler o picar toda la planta, con o sin raíz, para ingerirla como té.En el tratamiento de dolores de estómago se hace un cocimiento con las ramas frescas o se muelen para tomarse como agua de uso.También el Berro se utiliza para tratar la anemia,bocio y diabetes.El tratamiento, para estos casos, consiste en la infusión de sus ramas.Rica en vitaminas y minerales (vitamina C,E beta carotenos) de gran utilidad como antioxidantes que eliminan los radicales libres teniendo una importante acción en la prevención de los cánceres por este motivo.", plagas: "Puede ser atacada por pulgones." },

        { nombre: "Boniato", nombreCientifico: "Ipomea batatas", familia: "Convolvulácea", siembraClimasTemplados: "Enero a Marzo", siembraotrosClimas: "Enero a Marzo", plantacion: "Abril a Junio", cosecha: "Septiembre a Noviembre", maceto: "Mínimo 10 litros", sustratoAbono: "Drenado / Abonado", riego: "Regular. 3 veces en semana", luz: "Sol Directo", clima: "Templados", Dificultad: "Alto", filtroMes: "1-2-3", id: 8, scr: "https://marketingcreativo.studio/wp-content/uploads/2021/05/boniato.jpg",propiedades: "abundante en vitaminas",plagas: "Es una planta muy rústica que no suele padecer plagas ni enfermedades." },

        { nombre: "Cacahuete", nombreCientifico: "Arachis hypogaea", familia: "Brassicaceae", siembraClimasTemplados: "Mayo a Julio", siembraotrosClimas: "Mayo a Julio (protegido)", plantacion: "Siembra directa", cosecha: "Septiembre a Noviembre", maceto: "Mínimo 5 litros", sustratoAbono: "Drenado y muy abonado", riego: "Escaso. 2 veces en semana", luz: "Sol Directo", clima: "Cálido", Dificultad: "Difícil", filtroMes: "5-6-7", id: 9, scr: "https://marketingcreativo.studio/wp-content/uploads/2021/05/cacahuete.jpg", propiedades: "El maní o cacahuete es otra importante fuente de aceite vegetal en las zonas tropicales y subtropicales.Aun cuando algunos países asiáticos,principalmente China e India,producen cerca de las dos terceras partes de la cosecha mundial,en la actualidad el cacahuete es una fuente importante de aceite para cocinar en los trópicos americanos,ocupando solamente el segundo lugar respecto a la palma de aceite en África.También se consumen grandes cantidades de frutos,tostados o cocidos y preparados en un sinfín de formas.", plagas: "Puede ser atacada por pulgones aunque la enfermedad más seria que afecta al cacahuete en los países tropicales, principalmente en las zonas húmedas, es la marchitez bacteriana (Pseudomonas solanacearum).Los síntomas son un marchitamiento rápido de las hojas y una muerte repentina de la planta." },

    ]

    const [Hortalizas, setHortalizas] = useState(HortalizasArray)

    return (
        <div>
            <Introduccion/>
            <button className="btn btn-dark mb-5">REGISTRATE</button>

            <CardPrincipal 
            title="La hortaliza más Famosa"
            description="A nuestros usuarios les encanta las hortalizas y esta es la mas buscada"
            src="https://jardineriaplantasyflores.com/wp-content/uploads/2016/10/cultivar-tomates-con-exito-780x405.jpg.webp"/>


            <div className="mb-2">
                <div className="col"><strong className="fs-2">Hortalizas</strong></div>
            </div>

            <input type="text" placeholder="Buscar" className="input-group container w-100 border border-secondary rounded mt-4"/>

            <div className="row mt-4">
            {Hortalizas.map(Hortaliza => {
                return (
                    <div className="mt-3 col-4 px-4 mb-3" key={Hortaliza.id}>
                        <div style={{
                                   backgroundImage: `url(${Hortaliza.scr})`,
                                   height: 200,
                                   backgroundSize: "cover"
                        }}>
                        <p 
                        onClick={() => handleRedirect(Hortaliza.id)}
                        className="float-start ms-2 bg-dark text-light w-50 opacity-50">{Hortaliza.nombre}</p>
                        </div>
                    </div>
                )
            })}
            </div>

            <Footer/>
        </div>
    )
}
