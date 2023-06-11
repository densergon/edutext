import React, { useState, FormEvent, ChangeEvent } from 'react';
import axios from 'axios';

interface IResult {
    [key: string]: any;
}
interface word {
    palabra: string
    frecuencia: number
    sinonimos: string[]
}

const Calificacion: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [grade, setGrade] = useState<number>(0);
    const [results, setResults] = useState<IResult | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const [exp, setExp] = useState<string>("");

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        setFile(file ? file : null);
    };


    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setIsLoading(true);

        if (!file) {
            alert('Por favor, selecciona un archivo antes de enviar');
            setIsLoading(false);
            return;
        }

        const formData = new FormData();
        formData.append('archivo', file);

        try {
            const res = await axios.post('http://127.0.0.1:5000/analizar', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setGrade(Math.round(res.data.calificacion))
            setExp(res.data.explicacion_calificacion)
            setResults(res.data.resultado);
        } catch (error) {
            // Manejar el error aquí...
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='px-5 py-5 mt-5 bg vh-100'>
            <form onSubmit={handleSubmit}>
                <h2 className='my-1'>Evaluar documento</h2>
                <p>Selecciona un documento para su evaluación.</p>
                <input type='file' className='form-control' onChange={handleFileChange} />
                <div className='d-flex justify-content-end'>
                    <button type="submit" disabled={isLoading} className='btn btn-primary my-2'>
                        {isLoading ? 'Cargando...' : 'Enviar'}
                    </button>
                </div>
            </form>
            <div>
                {grade != 0 &&
                    <h3>Calificación obtenida: {grade}</h3>
                }
                {exp != "" &&
                    <p>{exp}</p>
                }
            </div>
            <div>
                <h4 className='my-4'>Frecuencia de las palabras</h4>
                <div className='table-responsive'>
                    <table className='table table-md table-hover my-2 mx-2'>
                        <thead>
                            <tr>
                                <td scope='col'>Palabra</td>
                                <td scope='col'>Frecuencia</td>
                                <td scope='col'>Sinonimos</td>
                            </tr>
                        </thead>
                        <tbody>
                            {results != null && results.map((word: word, index: number) =>
                                <tr key={index}>
                                    <td>{word.palabra}</td>
                                    <td>{word.frecuencia}</td>
                                    <td>{word.sinonimos}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    );
}

export default Calificacion;
