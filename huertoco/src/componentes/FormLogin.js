import { useForm } from '../hooks/useForm';
import { useHistory } from "react-router";

import {LOGIN_URL} from '../config/config';


export default function CardPrincipal() {

    const initialFormState = {password: "", username: ""};
    const [form, handleInputChange] = useForm(initialFormState); // Custom Hook

    const history = useHistory();

    const handleSubmit = async e => {
        e.preventDefault();
        
       const options = {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(form)
       }

        const response = await fetch(LOGIN_URL, options)
        const data = await response.json();


        if(response.status >= 200 && response.status < 300) {
            history.push("/DashboardHortaliza")
            const setToken = token => localStorage.setItem("TOKEN_KEY", token);
            setToken(data.token);
        } else {
            alert("Login incorrecto");
            } 
     };

    

    return (
            <div className="bg-white w-50 d-flex justify-content-around container p-4 shadow p-3 mb-5 bg-body rounded">
                <div className="p-4">
                    <h2 className="fs-5 text">Iniciar Sesión</h2>
                    <div>
                        <form onSubmit={handleSubmit} className="form-group">
                            <input onChange={handleInputChange} value={form.username} name="username" className="form-control mb-3" type="text" placeholder="&#128231; Email" />
                            <input onChange={handleInputChange} value={form.password} name="password"  className="form-control mb-3" type="text" placeholder="******" />
                            <input className="form-control mb-3 w-100 ml-auto btn-primary" type="submit" value="iniciar sesión"/>
                        </form>
                    </div>
                </div>
            </div>
    )
}
