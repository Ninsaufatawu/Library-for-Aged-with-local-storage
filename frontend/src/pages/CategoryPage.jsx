import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export const CategoryPage = () => {
  const { category } = useParams(); // Get the category from the URL
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooksByCategory = async () => {
      try {
        // If category is undefined, it fetches all books; otherwise, it fetches by category
        const response = await axios.get(`http://localhost:8000/upload/books${category ? `?category=${category}` : ''}`);
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books by category:", error);
      }
    };
    fetchBooksByCategory();
  }, [category]);

  return (
    <div className="p-8 dark:bg-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-8">{category || 'All Books'}</h1>
      {books.length === 0 ? (
        <p>No books available in this category.</p>
      ) : (
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {books.map((book) => (
            <div key={book.id} className="rounded-xl drop-shadow-2xl w-36">
              <Link to={`/book/${book.id}`}>
                <div className="relative gap-1 justify-center text-center pt-4">
                  {book.image && (
                    <img
                      src={`http://localhost:8000/uploads/${book.image}`}
                      alt={book.title}
                      className="w-52 h-48 object-fit"
                    />
                  )}
                </div>
                <div className="pt-5">
                  <button
                    className="p-2 border justify-center text-lg dark:bg-slate-800 text-center rounded-md w-36 bg-blue-600 text-white"
                  >
                    Read More
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
