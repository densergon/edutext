
const AgregarGrupoAdmin = () => {
  return (
    <div className="container-fluid">
        <div className="p-2 mt-2">
            <div>
                <h3>Agregar Grupo</h3>
            </div>
            <div>
                <div className="p-2">
                    <form>
                        <div className="my-2 mx-2">
                            <p>Nombre del grupo</p>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="my-2 mx-2">
                            <p>Profesor asignado</p>
                            <select className="form-control">
                                <option>Pedro Armendariz</option>
                            </select>
                        </div>
                        <div className="my-4 d-flex justify-content-end">
                            <button className="btn btn-primary">Agregar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AgregarGrupoAdmin
