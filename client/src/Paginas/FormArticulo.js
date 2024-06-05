import React from 'react'

export const FormArticulo = () => {
    return (
        <div className='mt-5'>
            <h2>Registro Articulo</h2>
            <form action="/agregar" method="POST">
                <div className="mb-3">
                    <label className="form-label">identificador</label>
                    <input type="text" className="form-control" id="identificador" name="identificador"></input><br></br>
                </div>

                <div className="mb-3">
                    <label className="form-label">titulo</label>
                    <input type="text" className="form-control" id="titulo" name="titulo"></input><br></br>
                </div>
                
                <div className="mb-3">
                    <label className="form-label">tema</label>
                    <input type="text" className="form-control" id="tema" name="tema"></input><br></br>
                </div>
                
                <div className="mb-3">
                    <label className="form-label">descripcion</label>
                    <input type="text" className="form-control" id="descripcion" name="descripcion"></input><br></br>
                </div>

                <div className="mb-3">
                    <label className="form-label">nombreAutor</label>
                    <input type="text" className="form-control" id="nombreAutor" name="nombreAutor"></input><br></br>
                </div>
                <div className="mb-3">
                    <label className="form-label">fecha</label>
                    <input type="date" className="form-control" id="fecha" name="fecha"></input><br></br>
                </div>
               
                <div className="mb-3">
                    <label className="form-label">acercaDelAutor</label>
                    <input type="text" className="form-control" id="acercaDelAutor" name="acercaDelAutor"></input><br></br>
                </div>

                <div className="mb-3">
                    <label className="form-label">textoArticulo</label>
                    <input type="text" className="form-control" id="textoArticulo" name="textoArticulo"></input><br></br>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}