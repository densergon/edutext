import axios from 'axios';
import { useState, useEffect, FormEvent } from 'react';
import { useAuthStore } from '../../store/authStore';

interface Grupo {
  id: number;
  nombre: string;
  id_profesor: number;
}

const AgregarCurso = () => {
  const idProfesor: number = useAuthStore((state) => state.id);
  const [nombreCurso, setNombreCurso] = useState('');
  const [descripcionCurso, setDescripcionCurso] = useState('');
  const [categoriaCurso, setCategoriaCurso] = useState('Categoria A');
  const [grupoCurso, setGrupoCurso] = useState<number | string>('');
  const [grupos, setGrupos] = useState<Grupo[]>([]);

  const fetchGrupos = async () => {
    const response = await axios.get('http:127.0.0.0.1/grupos');
    setGrupos(response.data);
  };

  useEffect(() => {
    fetchGrupos();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('/cursos', {
        nombre: nombreCurso,
        descripcion: descripcionCurso,
        categoria: categoriaCurso,
        id_grupo: grupoCurso
      });
      console.log(response.data);
    } catch (error) {
      console.error('Hubo un error al agregar el curso:', error);
    }
  }

  return (
    <div>
      <div className="p-3">
        <h3>Agregar curso</h3>
      </div>
      <div className="container-fluid">
        <form onSubmit={handleSubmit}>
          <div className="my-2 mx-2">
            <p>Nombre del curso</p>
            <input type="text" className="form-control" value={nombreCurso} onChange={(e) => setNombreCurso(e.target.value)} />
          </div>
          <div className="my-2 mx-2">
            <p>Descripcion del curso</p>
            <input type="text" className="form-control" value={descripcionCurso} onChange={(e) => setDescripcionCurso(e.target.value)} />
          </div>
          <div className="my-2 mx-2">
            <p>Categoria</p>
            <select className="form-control" value={categoriaCurso} onChange={(e) => setCategoriaCurso(e.target.value)}>
              <option>Categoria A</option>
            </select>
          </div>
          <div className="my-2 mx-2">
            <p>Grupo</p>
            <select className="form-control" value={grupoCurso} onChange={(e) => setGrupoCurso(e.target.value)}>
              {grupos.map((grupo) => (
                <option key={grupo.id} value={grupo.id}>
                  {grupo.nombre}
                </option>
              ))}
            </select>
          </div>
          <div className="d-flex justify-content-end my-4">
            <button type="submit" className="btn btn-primary">Agregar curso</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AgregarCurso;
