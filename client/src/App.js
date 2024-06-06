import './App.css';
import { useState } from 'react';
import Axios from 'axios';

function App() {

  const [identificador, setIdentificador] = useState("");
  const [titulo, setTitulo] = useState("");
  const [tema, setTema] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [nombreAutor, setNombreAutor] = useState("");
  const [fecha, setFecha] = useState(new Date());
  const [acercaDelAutor, setAcercaDelAutor] = useState("");
  const [textoArticulo, setTextoArticulo] = useState("");

  const add = () => {
    Axios.post("http://localhost:7000/agregar", {
      identificador:identificador,
      titulo:titulo,
      tema:tema,
      descripcion:descripcion,
      nombreAutor:nombreAutor,
      fecha:fecha,
      acercaDelAutor:acercaDelAutor,
      textoArticulo:textoArticulo
    }).then(()=>{
      alert("Articulo registrado!");
    })
  }


  return (
    <div className="App">
      <h2>Registro de un artículo</h2>  
      <form>
        <div className="mb-3">
          <label className="form-label">Identificador</label>
          <input type="text" className="form-control" id="identificador" name="identificador" onChange={(event) => {
            setIdentificador(event.target.value);
          }} />
        </div>
        
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input type="text" className="form-control" id="titulo" name="titulo" onChange={(event) => {
            setTitulo(event.target.value);
          }} />
        </div>
        
        <div className="mb-3">
          <label className="form-label">Tema</label>
          <input type="text" className="form-control" id="tema" name="tema" onChange={(event) => {
            setTema(event.target.value);
          }} />
        </div>
      
        <div className="mb-3">
          <label className="form-label">Descripcion</label>
          <input type="text" className="form-control" id="descripcion" name="descripcion" onChange={(event) => {
            setDescripcion(event.target.value);
          }} />
        </div>
        
        <div className="mb-3">
          <label className="form-label">Nombre de Autor</label>
          <input type="text" className="form-control" id="nombreAutor" name="nombreAutor" onChange={(event) => {
            setNombreAutor(event.target.value);
          }} />
        </div>
        
        <div className="mb-3">
          <label className="form-label">Fecha</label>
          <input type="date" className="form-control" id="fecha" name="fecha" onChange={(e) => {
            setFecha(e.target.value);
          }} />
        </div>
       
        <div className="mb-3">
          <label className="form-label">Acerca del Autor</label>
          <input type="text" className="form-control" id="acercaDelAutor" name="acercaDelAutor" onChange={(event) => {
            setAcercaDelAutor(event.target.value);
          }} />
        </div>
        
        <div className="mb-3">
          <label className="form-label">Texto del Artículo</label>
          <input type="text" className="form-control" id="textoArticulo" name="textoArticulo" onChange={(event) => {
            setTextoArticulo(event.target.value);
          }} />
        </div>
        
        <button onClick={add} type="submit" className="btn btn-primary">Registrar</button>
      </form>
    </div>
  );
}

export default App;
