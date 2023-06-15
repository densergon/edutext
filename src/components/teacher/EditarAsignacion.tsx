
const EditarAsignacion = () => {
  return (
    <div className="container-fluid p-5">
      <div className="my-2 mx-2">
        <h3>Editar Asignacion</h3>
      </div>
      <div className="my-3 mx-2">
        <div>
            <form>
                <div className="mx-2 my-2">
                    <p>Nombre</p>
                    <input type="text" className="form-control"/>
                </div>
                <div className="mx-2 my-2">
                    <p>Descripcion</p>
                    <textarea className="form-control"/>
                </div>
                <div className="mx-2 my-2">
                    <p>Fecha de entrega:</p>
                    <input type="date" className="form-control"/>
                </div>
                <div className="d-flex justify-content-end my-5">
                    <button className="btn btn-warning">Salvar cambios</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default EditarAsignacion
