

export default function CardPrincipal({ src, title, description }) {
    return (
            <div className="bg-white w-50 d-flex flex-column container p-4 shadow p-3 mb-5 bg-body rounded">
                <h4 className="p-2">{title}</h4>
                <p className="fs-7">{description}</p>
                <div className="carousel slide w-55 container mt-5 ">
                    <div>
                        <div>
                            <img src={src} className="d-block w-100 " alt="..." />
                        </div>
                    </div>
                </div>
            </div>
    )
}
