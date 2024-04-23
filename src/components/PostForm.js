import React, { useState } from 'react';
import axios from 'axios';

const PostForm = () => {
    const [toolAttributes, setToolAttributes] = useState({
        nombreHerramienta: '',
        propositoia: '',
        subpropositoia: '',
        ecosistema: '',
        tipocontenido: '',
        descripcion: '',
        costo: '',
        licencia: false // Assuming default value is false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setToolAttributes(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(toolAttributes);
        try {
            const response = await axios.post('http://localhost:4001/tools', toolAttributes);
            console.log('Tool created:', response.data);
            // You can handle success here, such as displaying a success message or redirecting the user
        } catch (error) {
            console.error('Error creating tool:', error);
            // You can handle errors here, such as displaying an error message to the user
        }
    };

    return (
        <div>
            <h2>Create New Tool</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre de la Herramienta:
                    <input type="text" name="nombreHerramienta" value={toolAttributes.nombreHerramienta} onChange={handleChange} required />
                </label>
                <label>
                    Proposito:
                    <input type="text" name="propositoia" value={toolAttributes.propositoia} onChange={handleChange} required />
                </label>
                <label>
                    Sub proposito:
                    <input type="text" name="subpropositoia" value={toolAttributes.subpropositoia} onChange={handleChange} required />
                </label>
                <label>
                    Ecosistema:
                    <input type="text" name="ecosistema" value={toolAttributes.ecosistema} onChange={handleChange} required />
                </label>
                <label>
                    Tipo de contenido:
                    <input type="text" name="tipocontenido" value={toolAttributes.tipocontenido} onChange={handleChange} required />
                </label>
                <label>
                    Descripción:
                    <textarea name="descripcion" value={toolAttributes.descripcion} onChange={handleChange} required />
                </label>
                <label>
                    Costo:
                    <input type="text" name="costo" value={toolAttributes.costo} onChange={handleChange} required />
                </label>
                <label>
                    Licencia:
                    <select name="licencia" value={toolAttributes.licencia} onChange={handleChange}>
                        <option value="false">No</option>
                        <option value="true">Sí</option>
                    </select>
                </label>
                <button type="submit">Create Tool</button>
            </form>
        </div>
    );
};

export default PostForm;