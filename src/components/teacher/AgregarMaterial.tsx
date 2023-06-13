import React, { useState } from "react";
import axios from "axios";

const AgregarMaterial: React.FC = () => {
  const [nombre, setNombre] = useState("");
  const [contenido, setContenido] = useState("");
  const [idGrupo, setIdGrupo] = useState("");

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const material = {
        nombre: nombre,
        contenido: btoa(contenido), // Convertir el contenido a base64
        id_grupo: idGrupo
      };

      const response = await axios.post('http://localhost:5000/materiales', material);

      if(response.status === 201) {
        alert("Material agregado exitosamente.");
      } else {
        alert("Hubo un error al agregar el material.");
      }

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={submitForm}>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} required />
      </label>
      <label>
        Contenido:
        <input type="text" value={contenido} onChange={e => setContenido(e.target.value)} required />
      </label>
      <label>
        ID del Grupo:
        <input type="number" value={idGrupo} onChange={e => setIdGrupo(e.target.value)} required />
      </label>
      <button type="submit">Agregar Material</button>
    </form>
  );
}

export default AgregarMaterial;
