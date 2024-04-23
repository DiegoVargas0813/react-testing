import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/ToolsList.css';

const TagSearch = () => {
    const [tools, setTools] = useState([]);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedValue, setSelectedValue] = useState('');

    const fetchTools = async () => {
        try {
            const response = await axios.get(`http://localhost:4001/tools/${selectedCategory}/${selectedValue}`);
            setTools(response.data);
        } catch (error) {
            console.error('Error fetching tools:', error);
            setError('An error occurred while fetching tools.');
        }
    };

    const handleSearch = () => {
        if (selectedCategory && selectedValue) {
            fetchTools();
        }
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleValueChange = (e) => {
        setSelectedValue(e.target.value);
    };

    return (
        <div className='entryDetails'>
            <h1>Tool List</h1>
            <select value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">Select Category</option>
                <option value ="ecosystem">Ecosistema</option>
                <option value="purpose">Propósito</option>
                <option value="content">Contenido</option>
                <option value="cost">Costo</option>
                <option value="license">Licencia</option>
            </select>
            <input
                type="text"
                value={selectedValue}
                onChange={handleValueChange}
                placeholder="Enter Value"
            />
            <button onClick={handleSearch}>Search</button>
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

export default TagSearch;