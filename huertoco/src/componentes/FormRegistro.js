import { useForm } from '../hooks/useForm';

import {URL_REGISTRO} from '../config/config';


export default function CardPrincipal() {

    const initialFormState = {name: "", email: "", password: ""};
    const [form, handleInputChange] = useForm(initialFormState); // Custom Hook

    const handleSubmit = e => {
        e.preventDefault();

        const options = {
          method: "POST",
             headers: {
               "Content-type": "application/json",
            },
           body: JSON.stringify(form)
        }

        fetch(URL_REGISTRO, options)
        .then(response => {
            console.log(response);
            return response.json()
        })
        .then(data => {
            console.log(data);
        });
    };

    return (
            <div className="bg-white w-50 d-flex justify-content-around container p-4 shadow p-3 mb-5 bg-body rounded">
                <div className="p-4">
                    <h2 className="fs-5 text">Solicitar informacion</h2>
                    <div className="d-flex justify-content-between">
                        <form onSubmit={handleSubmit} className="form-group">
                            <input onChange={handleInputChange} value={form.name} name="name"  className="form-control mb-3" type="text" placeholder="&#128100; Nombre" />
                            <input onChange={handleInputChange} value={form.email} name="email" className="form-control mb-3" type="email" placeholder="&#128231; Email" />
                            <input onChange={handleInputChange} value={form.password} name="password" className="form-control mb-3" type="password" placeholder="******" />
                            <input className="form-control mb-3 w-50 ml-auto btn-primary" type="submit" value="Enviar" />
                        </form>
                    </div>
                </div>
            </div>
    )
}
