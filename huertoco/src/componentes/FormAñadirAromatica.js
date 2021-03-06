import { useForm } from '../hooks/useForm';

import {URL_AROMATICAS} from '../config/config';


export default function CardPrincipal() {

    const initialFormState = {name: "", scientific_name: "", family: "", sowing_temperature_climates: "", sow_other_climates: "", harvest: "", flowerpot: "", subtrate_fertilizer: "", irrigation: "", light: "", weather: "", difficulty: "", notes: "", properties: "", pests: "", filter_month: ""};
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

        fetch(URL_AROMATICAS, options)
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
                    <div className="d-flex justify-content-between">
                        <form onSubmit={handleSubmit} className="form-group d-flex justify-content-around">
                            <div className="me-2">
                                <input onChange={handleInputChange} value={form.name} name="name"  className="form-control mb-3" type="text" placeholder=" name" />
                                <input onChange={handleInputChange} value={form.scientific_name} name="scientific_name" className="form-control mb-3" type="text" placeholder=" scientific_name" />
                                <input onChange={handleInputChange} value={form.family} name="family" className="form-control mb-3" type="text" placeholder="family" />
                                <input onChange={handleInputChange} value={form.sowing_temperature_climates} name="sowing_temperature_climates" className="form-control mb-3" type="text" placeholder="sowing_temperature_climates" />
                                <input onChange={handleInputChange} value={form.sow_other_climates} name="sow_other_climates" className="form-control mb-3" type="text" placeholder="sow_other_climates" />
                                <input onChange={handleInputChange} value={form.harvest} name="harvest" className="form-control mb-3" type="text" placeholder="harvest" />
                                <input onChange={handleInputChange} value={form.flowerpot} name="flowerpot" className="form-control mb-3" type="text" placeholder="flowerpot" />
                                <input onChange={handleInputChange} value={form.subtrate_fertilizer} name="subtrate_fertilizer" className="form-control mb-3" type="text" placeholder="subtrate_fertilizer" />
                            </div>
                            <div>
                                <input onChange={handleInputChange} value={form.irrigation} name="irrigation" className="form-control mb-3" type="text" placeholder="irrigation" />
                                <input onChange={handleInputChange} value={form.light} name="light" className="form-control mb-3" type="text" placeholder="light" />
                                <input onChange={handleInputChange} value={form.weather} name="weather" className="form-control mb-3" type="text" placeholder="weather" />
                                <input onChange={handleInputChange} value={form.difficulty} name="difficulty" className="form-control mb-3" type="text" placeholder="difficulty" />
                                <input onChange={handleInputChange} value={form.notes} name="notes" className="form-control mb-3" type="text" placeholder="notes" />
                                <input onChange={handleInputChange} value={form.properties} name="properties" className="form-control mb-3" type="text" placeholder="properties" />
                                <input onChange={handleInputChange} value={form.pests} name="pests" className="form-control mb-3" type="text" placeholder="pests" />
                                <input onChange={handleInputChange} value={form.filter_month} name="filter_month" className="form-control mb-3" type="text" placeholder="filter_month" />
                                <input onChange={handleInputChange} value={form.image} name="image" className="form-control mb-3" type="text" placeholder="image" />
                                <input className="form-control mb-3 w-50 ml-auto btn-primary" type="submit" value="Enviar" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    )
}
