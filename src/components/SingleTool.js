import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/ToolsList.css';

const SingleTool = () => {
    const [tool, setTool] = useState(null); // Change to null initial state
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTool = async () => {
            try {
                const response = await axios.get('http://localhost:4001/tools/1');
                setTool(response.data);
            } catch (error) {
                console.error('Error fetching tool:', error);
                setError('An error occurred while fetching the tool.');
            }
        };

        fetchTool();
    }, []);

    return (
        <div className='entryDetails'>
            <h1>Tool Details</h1>
            {error && <p>{error}</p>}
            {tool && ( // Render only if tool is not null
                <ul>
                    <li>
                        <h2>{tool.nombreherramienta}</h2>
                        <p>Propósito: {tool.propositoia}</p>
                        <p>Subpropósito: {tool.subpropositoia}</p>
                        <p>Ecosistema: {tool.ecosistema}</p>
                        <p>Tipo de contenido: {tool.tipocontenido}</p>
                        <p>Descripción: {tool.descripcion}</p>
                        <p>Costo: {tool.costo}</p>
                        <p>Licencia: {tool.licencia ? 'Sí' : 'No'}</p>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default SingleTool;