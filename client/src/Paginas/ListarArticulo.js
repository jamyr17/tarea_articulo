import React from 'react'
import { articuloApi } from '../api/articuloApi';

export const ListarArticulo = () => {

    /*articuloApi.get('/cargar')  // esto de aquí no está conectando a mysql
        .then( resp => {
            console.log(resp);
        } )
        */
    return (
        <div className='mt-5'>

            <h2>Articulos</h2>
            <hr />

            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}