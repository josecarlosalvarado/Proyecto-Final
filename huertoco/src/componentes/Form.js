import { useForm } from '../hooks/useForm';


export default function CardPrincipal() {

    const initialFormState = {name: "", email: "", informacion: ""};
    const [form, handleInputChange] = useForm(initialFormState); // Custom Hook

    const handleSubmit = e => {
        e.preventDefault();
        //JSON.stringify(form)
    };

    

    return (
            <div className="bg-white w-50 d-flex justify-content-around container p-4 shadow p-3 mb-5 bg-body rounded">
                <div className="p-4 ">
                    <h2 className="fs-5 text">HuertoCo</h2>
                    <p className="text-secondary fs-5 text">&#128222; +34 666 666 666</p>
                    <p className="text-secondary fs-5 text">&#128231; info@huertoco.com</p>
                </div>
                <div className="p-4">
                    <h2 className="fs-5 text">Solicitar informacion</h2>
                    <div className="d-flex justify-content-between">
                        <form onSubmit={handleSubmit} className="form-group">
                            <input onChange={handleInputChange} value={form.name} name="name"  className="form-control mb-3" type="text" placeholder="&#128100; Nombre" />
                            <input onChange={handleInputChange} value={form.email} name="email" className="form-control mb-3" type="text" placeholder="&#128231; Email" />
                            <input onChange={handleInputChange} value={form.informacion} name="informacion" className="form-control mb-3" type="text" placeholder="&#128196; te podemos ayudar" />
                            <input className="form-control mb-3 w-50 ml-auto btn-primary" type="submit" value="Enviar" />
                        </form>
                    </div>
                </div>
            </div>
    )
}
