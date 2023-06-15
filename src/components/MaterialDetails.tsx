import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Document, Page } from 'react-pdf';

// Define la estructura del material
interface Material {
    id: number;
    nombre: string;
    contenido: Blob; // Aquí utilizo string para simplificar. En la práctica, manejarías esto como un BLOB.
    id_curso: number;
}

const MaterialDetails = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [contenido,setContenido]=useState<Blob|null>(null);
    const { id } = useParams()
    const [material, setMaterial] = useState<Material | null>(null);

    useEffect(() => {
        // Haz una petición a la API para obtener los detalles del material
        axios.get(`http://127.0.0.1:5000/materiales/${id}`)
            .then(response => {
                setMaterial(response.data);
                setContenido(response.data.contenido)
            })
            .catch(error => {
                console.error(`Hubo un error al cargar los detalles del material: ${error}`);
            });
    }, [id]); // Vuelve a ejecutar este efecto si el id cambia

    if (material === null) {
        return <div>Cargando...</div>; // Muestra un mensaje de carga mientras los datos se están obteniendo
    }


    return (
        <div>
            <h1>{material.nombre}</h1>
            <div>
                <Document file={contenido} onLoadSuccess={()=>setNumPages(numPages)}>
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
            </div>
        </div>
    );
}

export default MaterialDetails;
