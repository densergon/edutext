
const AgregarMaterial = () => {
  return (
    <div>
      <div className="p-2">
        <h3>Agregar material</h3>
      </div>
      <div className="container-fluid">
            <div className="p-2">
                <form>
                    <div className="mx-2 my-3">
                        <p>Nombre del material</p>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="mx-2 my-3">
                        <p>Descripcion del material</p>
                        <textarea className="form-control"/>
                    </div>
                    <div className="mx-2 my-3">
                        <p>¿A que grupo desea asignar el material?</p>
                        <select className="form-control">
                            <option>2CV2</option>
                        </select>
                    </div>
                    <div className="mx-2 my-3">
                        <p>A continuacion suba el material</p>
                        <input type="file" className="form-control" />
                    </div>
                    <div className="mx-2 my-3 d-flex justify-content-end">
                        <button className="btn btn-primary my-2">Subir material</button>
                    </div>
                </form>
            </div>
      </div>
    </div>
  )
}

export default AgregarMaterial
