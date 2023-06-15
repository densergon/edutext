import React, { useState } from "react";
import axios from "axios";
// Define la estructura de los datos del formulario
interface FormData {
  nombre: string;
  contenido: Blob | null; // Aquí se considera el contenido como Blob, necesitarás adaptar esto según tu manejo de archivos
  id_curso: number | '';
}

const AgregarMaterial: React.FC = () => {
  const initialFormData: FormData = {
    nombre: '',
    contenido: null,
    id_curso: '',
  };
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Aquí necesitarías agregar lógica para enviar el formulario a tu API.
    // Esto variará dependiendo de cómo manejes el envío de archivos en tu back-end.
    // Como un ejemplo, puedes usar FormData de la API de la Web para enviar el archivo:
    const data = new FormData();
    data.append('nombre', formData.nombre);
    data.append('contenido', formData.contenido as Blob);
    data.append('id_curso', formData.id_curso.toString());

    axios
      .post('http://localhost:5000/materiales', data)
      .then((response) => {
        console.log(response);
        setFormData(initialFormData); // Restablecer el formulario
      })
      .catch((error) => {
        console.error(error);
      });
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

        <div className="mx-2 my-2">
          <label>
            Grupo:
            <select name="id_curso" value={formData.id_curso} onChange={handleInputChange} className="form-control">
              <option value={1}>1</option>
            </select>
          </label>
        </div>
        <div className="mx-2 my-2 d-flex justify-content-end">
          <button type="submit" className="btn btn-primary">Agregar Material</button>
        </div>
      </div>
    </form>
  );
}

export default AgregarMaterial;
