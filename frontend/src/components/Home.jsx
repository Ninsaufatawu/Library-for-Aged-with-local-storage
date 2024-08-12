import { useState, useEffect } from 'react';
import Banner from "./Banner";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { SearchBar } from './SearchBar';

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
    <div className="overflow-y-scroll dark:bg-gray-800">
      <div className="dark:text-white">
        <div className='fixed w-full dark:h-16 h-16 z-20 bg-white'>
          <SearchBar />
        </div>
        <div className='p-8'>
          <div className='pt-24'>
            <Banner />
          </div>
          {Object.keys(booksByCategory).map(category => (
            <div key={category}>
              <h2 className="text-2xl font-bold mb-4 pt-10">
                <Link to={`/category/${category}`}>
                  {category}
                </Link>
              </h2>
              <div className="overflow-x-scroll w-full flex gap-20" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {booksByCategory[category].map((book) => (
                  <div key={book.id} className="rounded-xl drop-shadow-2xl w-36">
                    <Link to={`/book/${book.id}`}>
                      <div className="relative gap-1 justify-center text-center pt-4">
                        {book.image && (
                          <img src={`http://localhost:8000/uploads/${book.image}`} alt={book.title} className='w-52 h-48 object-fit' />
                        )}
                      </div>
                      <div className='pt-5'>
                        <button className="p-2 border justify-center text-lg dark:bg-slate-800 text-center rounded-md w-36 bg-blue-600 text-white">
                          Read More
                        </button>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
