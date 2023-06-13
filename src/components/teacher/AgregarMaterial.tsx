import React, { useState } from "react";
import axios from "axios";

const AgregarMaterial: React.FC = () => {
  const [nombre, setNombre] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [idGrupo, setIdGrupo] = useState("");

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    if (file === null) {
      alert("Por favor, selecciona un archivo.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = async () => {
      try {
        const base64String = reader.result?.toString().split(',')[1];
        const material = {
          nombre: nombre,
          contenido: base64String, // El contenido es un string Base64
          id_grupo: idGrupo
        };

        const response = await axios.post('http://127.0.0.1:5000/materiales', material);

        if (response.status === 201) {
          alert("Material agregado exitosamente.");
        } else {
          alert("Hubo un error al agregar el material.");
        }

      } catch (error) {
        console.error(error);
      }
    };
    reader.readAsDataURL(file);
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files !== null) {
      setFile(files[0]);
    }
  };

  return (
    <form onSubmit={submitForm}>
      <div className="container p-5">
        <h3>Agregar material</h3>
        <div className="mx-2 mt-4 mb-2">
          <label>
            Nombre del material:
            <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} required className="form-control" />
          </label>
        </div>
        <div className="mx-2 my-2">
          <label>
            Material:
            <input type="file" onChange={handleFileChange} required className="form-control" />
          </label>
        </div>

        <div className="mx-2 my-2">
          <label>
            Grupo:
            <select value={idGrupo} onChange={e => setIdGrupo(e.target.value)} required className="form-control">
              <option>grupo</option>
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
