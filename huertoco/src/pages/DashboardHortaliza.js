import React from "react";

import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Footer from '../componentes/Footer';
import BotonesDashboardHortaliza from "../componentes/BotonesDashboardHortaliza";

import {URL_VEGETABLE, URL_INPUT_VEGETABLE, URL_DELETE_VEGETABLE} from '../config/config';


export default function Dashboardhortaliza() {

  const [input, setInput] = useState("");
  const [Hortalizas, setHortalizas] = useState([]);

  const history = useHistory();
  
  const handleRedirect = (e) => history.push("/AñadirHortaliza");
  const handleSearch = (e) => setInput(e.target.value);
  const handleModificar = (ModificarId, NameHortaliza, scientificnameHortaliza, familyhortaliza, sowingTemperateClimates, sowOtherClimates, plantation, harvest, flowerpot,substrateFertilizer, irrigation, light, weather, difficulty, notes, properties,associations, pests, filterMonth, image) => {
    history.push("/ModificarHortaliza/" + ModificarId + "/" + NameHortaliza + "/" + scientificnameHortaliza + "/" + familyhortaliza + "/" + sowingTemperateClimates + "/" + sowOtherClimates + "/" + plantation + "/" + harvest + "/" + flowerpot + "/" + substrateFertilizer + "/" +irrigation + "/" + light + "/" + weather  + "/" +difficulty + "/" + notes  + "/" + properties + "/" + associations + "/" +  pests + "/" + filterMonth  + "/" + image);
  };

  useEffect(() => {

    fetch(URL_VEGETABLE)
      .then((Response) => Response.json())
      .then((data) => {
        setHortalizas(data);
        console.log(data);
      });
  }, []);

  
  useEffect(() => {
    fetch(URL_INPUT_VEGETABLE + input)
    .then((Response) => Response.json())
    .then((data) => {
      setHortalizas(data.splice(0, 9));
    });
  }, [input, setHortalizas]);
  
  
  const handleEliminar = (EliminarId) => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      //  body: JSON.stringify(form)
    };
    
    fetch(URL_DELETE_VEGETABLE + EliminarId, options)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
  };
  
  

  return (
    <div className="vh-100 d-flex justify-content-around flex-column">
      <div >
        <h1 className="text-light">DashboardHortaliza</h1>

      </div>

      <div className="bg-white w-100 d-flex justify-content-around container shadow p-3 mb-5 bg-body rounded">
        <div className="w-100">
          <BotonesDashboardHortaliza />
            <input
              type="text"
              placeholder="Buscar"
              className="input-group container w-100 border border-secondary rounded mb-1 mt-2 mb-2 border-1"
              value={input}
              onChange={handleSearch}
            />

          <table className="table w-100 ">
            <thead className="table-dark">
              <tr>
                <th scope="col">nombre</th>
                <th scope="col">nombrecientifico</th>
                <th scope="col">familia</th>
                <th scope="col">dificultad</th>
                <th scope="col">Modificar</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {Hortalizas.map((Hortaliza) => {
                return (
                  <tr key={Hortaliza.id}>
                    <th scope="row">{Hortaliza.name}</th>
                    <td>{Hortaliza.scientificName}</td>
                    <td>{Hortaliza.family}</td>
                    <td>{Hortaliza.difficulty}</td>
                    <td>
                      <button
                        className=" btn btn-success"
                        onClick={() => handleModificar(Hortaliza.id, Hortaliza.name, Hortaliza.scientificName ,Hortaliza.family, Hortaliza.sowingTemperateClimates, Hortaliza.sowOtherClimates, Hortaliza.plantation, Hortaliza.harvest, Hortaliza.flowerpot, Hortaliza.substrateFertilizer, Hortaliza.irrigation, Hortaliza.light, Hortaliza.weather, Hortaliza.difficulty, Hortaliza.notes, Hortaliza.properties, Hortaliza.associations, Hortaliza.pests, Hortaliza.filterMonth, Hortaliza.image)}
                      >
                        Modificar
                      </button>
                    </td>
                    <td>
                      <button
                        className=" btn btn-danger"
                        onClick={() => handleEliminar(Hortaliza.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <button
              className=" btn btn-primary mt-2 d-flex justify-content-start"
              onClick={() => handleRedirect()}
            >
              añadir
            </button>
          </table>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
