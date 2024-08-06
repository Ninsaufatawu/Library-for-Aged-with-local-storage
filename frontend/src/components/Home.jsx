import { useState, useEffect } from 'react';

import Banner from "./Banner";
import axios from 'axios';
import { Link } from 'react-router-dom';
import {SearchBar} from './SearchBar';

export const Home = () => {
  const [booksByCategory, setBooksByCategory] = useState({});

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:8000/upload/books");
        const books = response.data;
        const categorizedBooks = books.reduce((acc, book) => {
          if (!acc[book.category]) {
            acc[book.category] = [];
          }
          acc[book.category].push(book);
          return acc;
        }, {});
        setBooksByCategory(categorizedBooks);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="overflow-y-scroll bg-slate-200 p-8 pt-2 dark:bg-gray-800">
      <div className="dark:text-white">
        <div>
          <SearchBar />
        </div>
        <div>
          <Banner />
        </div>
        <h1 className="bg-slate-700 text-white">Home</h1>
        {Object.keys(booksByCategory).map(category => (
          <div key={category}>
            <h2 className="text-2xl font-bold mb-4">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {booksByCategory[category].map((book) => (
                <div key={book.id} className="bg-white p-4 rounded shadow">
                  <Link to={`/book/${book.id}`}>
                    <h3 className="text-xl font-bold">
                      {book.title}
                    </h3>
                    <p>Author: {book.author}</p>
                    {book.image && <img src={`http://localhost:8000/uploads/${book.image}`} alt={book.title} />}
                  </Link>
                  
                  
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
