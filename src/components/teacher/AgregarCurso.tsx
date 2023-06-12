
const AgregarCurso = () => {
  return (
    <div>
      <div className="p-3">
        <h3>Agregar curso</h3>
      </div>
      <div className="container-fluid">
        <form>
            <div className="my-2 mx-2">
                <p>Nombre del curso</p>
                <input type="text" className="form-control" />
            </div>
            <div className="my-2 mx-2">
                <p>Descripcion del curso</p>
                <input type="text" className="form-control" />
            </div>
            <div className="my-2 mx-2">
                <p>Categoria</p>
                <select className="form-control">
                    <option>Categoria A</option>                    
                </select>
            </div>
            <div className="my-2 mx-2">
                <p>Grupo</p>
                <select className="form-control">
                    <option>2CV32</option>
                </select>
            </div>
            <div className="d-flex justify-content-end my-4">
                <button className="btn btn-primary">Agregar curso</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default AgregarCurso
