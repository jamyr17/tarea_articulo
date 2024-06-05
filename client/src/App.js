import React, { useState } from 'react';
import ArticleTable from './ArticleTable';
import './App.css';
function App() {
  const [formData, setFormData] = useState({
    identificador: '',
    titulo: '',
    tema: '',
    descripcion: '',
    nombreAutor: '',
    acercaDelAutor: '',
    textoArticulo: ''
  });

  const [errors, setErrors] = useState({
    exito: null,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
 
  
    try {
      const response = await fetch('http://localhost:7000/agregar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      const result = await response.text();
      if (response.ok) {
        setErrors({ ...errors, exito: result, error: null });
      } else {
        setErrors({ ...errors, error: result, exito: null });
      }
    } catch (error) {
      console.error('Error:', error);
      setErrors({ ...errors, error: 'Ocurrió un error al enviar la solicitud.', exito: null });
    }
  };
  

  return (
    <div className="App">
      <h2>Escribir un nuevo artículo</h2>

      <div className="container">
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="identificador">Identificador:</label><br />
            <input type="text" id="identificador" name="identificador" value={formData.identificador} onChange={handleChange} required /><br />

            <label htmlFor="titulo">Título:</label><br />
            <input type="text" id="titulo" name="titulo" value={formData.titulo} onChange={handleChange} required /><br />

            <label htmlFor="tema">Tema:</label><br />
            <input type="text" id="tema" name="tema" value={formData.tema} onChange={handleChange} required /><br />

            <label htmlFor="descripcion">Descripción:</label><br />
            <input type="text" id="descripcion" name="descripcion" value={formData.descripcion} onChange={handleChange} required /><br />

            <label htmlFor="nombreAutor">Nombre del autor:</label><br />
            <input type="text" id="nombreAutor" name="nombreAutor" value={formData.nombreAutor} onChange={handleChange} pattern="[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+" title="Por favor, ingresa solo letras" required /><br />

            <label htmlFor="acercaDelAutor">Acerca del autor:</label><br />
            <textarea id="acercaDelAutor" name="acercaDelAutor" rows="4" cols="50" value={formData.acercaDelAutor} onChange={handleChange} required></textarea><br />

            <label htmlFor="textoArticulo">Texto del artículo:</label><br />
            <textarea id="textoArticulo" name="textoArticulo" rows="10" cols="50" value={formData.textoArticulo} onChange={handleChange} required></textarea><br />

            <input type="submit" value="Guardar" />
          </form>
        </div>
      </div>
      <ArticleTable />
      {errors.exito && <div className="alert alert-success">{errors.exito}</div>}
      {errors.error && <div className="alert alert-error">{errors.error}</div>}
    </div>
  );
}

export default App;
