import React, { useState } from "react";
import axios from "axios";

interface FormData {
  nombre: string;
  contenido: Blob | null;
  idcurso: number;
}

const AgregarMaterial: React.FC = () => {
  const  id  = 1;
  const initialFormData: FormData = {
    nombre: '',
    contenido: null,
    idcurso: Number(id),
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFormData({
        ...formData,
        contenido: event.target.files[0],
      });
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData();
    data.append('nombre', formData.nombre);
    if (formData.contenido) {
      data.append('contenido', formData.contenido);
    }
    data.append('idcurso', formData.idcurso.toString());

    await axios.post('http://127.0.0.1:5000/materiales', data);
    setFormData(initialFormData);
  };

  return (
    <form onSubmit={handleSubmit}>
    <div className="container p-5">
      <h3>Agregar material</h3>
      <div className="mx-2 mt-4 mb-2">
        <label>
          Nombre del material:
          <input type="text" name="nombre"  value={formData.nombre} onChange={handleInputChange} required className="form-control" />
        </label>
      </div>
      <div className="mx-2 my-2">
        <label>
          Material:
          <input  type="file" name="contenido" onChange={handleFileChange} required className="form-control" />
        </label>
      </div>
      <div className="mx-2 my-2 d-flex justify-content-end">
        <button type="submit" className="btn btn-primary">Agregar Material</button>
      </div>
    </div>
  </form>
  );
};

export default AgregarMaterial;
