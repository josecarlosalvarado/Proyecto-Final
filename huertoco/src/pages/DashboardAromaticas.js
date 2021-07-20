import React from 'react'

import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Footer from '../componentes/Footer';
import BotonesDashboardAromatic from '../componentes/BotonesDashboardAromatic'

import {URL_AROMATICAS, URL_AROMATICAS_INPUT, URL_DELETE_AROMATIC} from '../config/config';

export default function DashboardAromaticas() {
    const [input, setInput] = useState("");
    const [Aromaticas, setAromaticas] = useState([]);

    const history = useHistory();

    const handleRedirect = (e) =>  history.push("/AñadirAromatica");

    const handleSearch = e => setInput(e.target.value); 

    const handleModificar = (ModificarId) => {
      history.push("/ModificarAromatica/" + ModificarId);
    };

    useEffect(() => {
        fetch(URL_AROMATICAS)
          .then((Response) => Response.json())
          .then((data) => {
            setAromaticas(data);
            console.log(data);
          });
      }, []);

      useEffect(() => {
        fetch(URL_AROMATICAS_INPUT + input)
        .then(Response => Response.json())
        .then(data => {
            setAromaticas(data.splice(0,9));
        });
    }, [input, setAromaticas])

    const handleEliminar = EliminarId => {
        const options = {
            method: "DELETE",
               headers: {
                 "Content-type": "application/json",
              },
            //  body: JSON.stringify(form)
          }
    
          fetch(URL_DELETE_AROMATIC + EliminarId, options)
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
            <h1 className="text-light">DashboardAromaticas</h1>
          </div>
    
          <div className="bg-white w-100 d-flex justify-content-around container shadow p-3 mb-5 bg-body rounded">
            <div className="w-100">
              <BotonesDashboardAromatic/>
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
                    <th scope="col">nombrecientifico</th>
                    <th scope="col">familia</th>
                    <th scope="col">dificultad</th>
                    <th scope="col">Modificar</th>
                    <th scope="col">Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  {Aromaticas.map((Aromaticas) => {
                    return (
                      <tr key={Aromaticas.id}>
                        <th scope="row">{Aromaticas.name}</th>
                        <td>{Aromaticas.scientificName}</td>
                        <td>{Aromaticas.family}</td>
                        <td>{Aromaticas.difficulty}</td>
                        <td><button 
                          className=" btn btn-success"
                          onClick={() => handleModificar(Aromaticas.id)}
                          >Modificar
                      </button></td>
                        <td><button
                          className=" btn btn-danger"
                          onClick={() => handleEliminar(Aromaticas.id)}
                          >Eliminar
                      </button></td>
                      </tr>
                    );
                  })}
                </tbody>
                <button 
                  className=" btn btn-primary d-flex justify-content-start mt-2"
                  onClick={() => handleRedirect()}
                  >añadir
              </button>
              </table>
            </div>
          </div>
          <Footer/>
        </div>
      );
}
