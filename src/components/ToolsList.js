import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/ToolsList.css'

const ToolList = () => {
    const [tools, setTools] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTools = async () => {
            try {
                const response = await axios.get('http://localhost:4001/tools');
                console.log(response.data);
                setTools(response.data);
            } catch (error) {
                console.error('Error fetching tools:', error);
                setError('An error occurred while fetching tools.');
            }
        };

        fetchTools();
    }, []);

    return (
        <div className='entryDetails'>
            <h1>Tool List</h1>
            {error && <p>{error}</p>}
            <ul>
                {tools.map(tool => (
                    <li key={tool.id}>
                        <h2>{tool.nombreherramienta}</h2>
                        <p>Propósito: {tool.propositoia}</p>
                        <p>Subpropósito: {tool.subpropositoia}</p>
                        <p>Ecosistema: {tool.ecosistema}</p>
                        <p>Tipo de contenido: {tool.tipocontenido}</p>
                        <p>Descripción: {tool.descripcion}</p>
                        <p>Costo: {tool.costo}</p>
                        <p>Licencia: {tool.licencia ? 'Sí' : 'No'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToolList;