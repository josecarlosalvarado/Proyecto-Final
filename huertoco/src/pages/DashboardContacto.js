import React from "react";

import { useState } from "react";
import { useEffect } from "react";

import BotonesDashboardContacto from '../componentes/BotonesDashboardContacto';
import Footer from '../componentes/Footer';

import {URL_CONTACTO, URL_INPUT_CONTACTO, URL_DELETE_CONTACTO} from '../config/config';

export default function Dashboardhortaliza() {

    const [input, setInput] = useState("");
    const [Contactos, setContacto] = useState([]);

    const handleSearch = e => setInput(e.target.value); 


  useEffect(() => {
    fetch(URL_CONTACTO)
      .then((Response) => Response.json())
      .then((data) => {
        setContacto(data);
        console.log(data);
      });
  }, []);


  useEffect(() => {
    fetch(URL_INPUT_CONTACTO + input)
    .then(Response => Response.json())
    .then(data => {
        setContacto(data.splice(0,9));
    });
}, [input, setContacto])

const handleEliminar = EliminarId => {
    const options = {
        method: "DELETE",
           headers: {
             "Content-type": "application/json",
          },
        //  body: JSON.stringify(form)
      }

      fetch(URL_DELETE_CONTACTO + EliminarId, options)
      .then(response => {
          console.log(response);
          return response.json()
      })
      .then(data => {
          console.log(data);
      });
}; 

  return (
    <div className="vh-100 d-flex justify-content-around flex-column">
      <div>
        <h1 className="text-light">DashboardHortaliza</h1>
      </div>
      <div className="bg-white w-100 d-flex justify-content-around container p-4 shadow p-3 mb-5 bg-body rounded">
        <div className="w-100">
          <BotonesDashboardContacto/>
          <input
              type="text"
              placeholder="Buscar"
              className="input-group container w-100 border border-secondary rounded mb-1 mt-2 mb-2 border-1"
              value={input}
              onChange={handleSearch}
          />
          <table className="table w-100">
            <thead className="table-dark">
              <tr>
                <th scope="col">nombre</th>
                <th scope="col">Email</th>
                <th scope="col">informacion</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {Contactos.map((Contacto) => {
                return (
                  <tr key={Contacto.id}>
                    <th scope="row">{Contacto.name}</th>
                    <td>{Contacto.email}</td>
                    <td>{Contacto.information}</td>
                    <td><button
                      className=" btn btn-danger"
                      onClick={() => handleEliminar(Contacto.id)}
                      >Eliminar
                  </button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
