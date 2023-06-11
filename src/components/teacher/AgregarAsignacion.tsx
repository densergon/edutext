
const AgregarAsignacion = () => {
    return (
        <div className="container-fluid p-3 mt-4">
            <h3>Añadir asignacion</h3>
            <div className="mt-4">
                <form>
                    <div className="my-2 mx-3">
                        <p>¿Para que grupo?</p>
                        <select className="form-control">
                            <option>3CV12</option>
                            <option>3CV13</option>
                        </select>
                    </div>
                    <div className="my-2 mx-3">
                        <p>¿Para que unidad?</p>
                        <select className="form-control">
                            <option>Unidad 1</option>
                            <option>Unidad 2</option>
                        </select>
                    </div>
                    <div className="my-1 mx-3">
                        <p>Fecha de entrega:</p>
                        <input type="date" className="form-control" />
                    </div>
                    <div className="my-2 mx-3">
                        <p>Nombre de la asignacion</p>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="my-2 mx-3">
                        <p>Descripcion de la asignacion</p>
                        <textarea className="form-control" />
                    </div>
                    <div className="my-3 mx-3 d-flex justify-content-end">
                        <button className="btn btn-primary" >Añadir</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AgregarAsignacion