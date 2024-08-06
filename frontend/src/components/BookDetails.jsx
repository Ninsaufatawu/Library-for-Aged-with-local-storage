// src/pages/BookDetails.js
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/upload/books/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };
    fetchBook();
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div className="p-8 dark:bg-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold">{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Description: {book.description}</p>
      <p>Published: {book.published}</p>
      {book.image && <img src={`http://localhost:8000/uploads/${book.image}`} alt={book.title} />}
      {book.pdf && (
        <a href={`http://localhost:8000/uploads/${book.pdf}`} target="_blank" rel="noopener noreferrer">
          Read PDF
        </a>
      )}
    </div>
  );
};
