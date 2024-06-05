import React, { useState, useEffect } from 'react';
import './ArticleStyle.css';

function ArticleTable() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('http://localhost:7000/cargar');
        if (response.ok) {
          const data = await response.json();
          setArticles(data);
        } else {
          throw new Error('Failed to fetch articles');
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <h2>Lista de Artículos</h2>
      <table>
        <thead>
          <tr>
            <th>Identificador</th>
            <th>Título</th>
            <th>Tema</th>
            <th>Descripción</th>
            <th>Nombre del Autor</th>
            <th>Acerca del Autor</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, index) => (
            <tr key={index}>
              <td>{article.identificador}</td>
              <td>{article.titulo}</td>
              <td>{article.tema}</td>
              <td>{article.descripcion}</td>
              <td>{article.nombreAutor}</td>
              <td>{article.acercaDelAutor}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ArticleTable;
