import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const FavoritePage = () => {
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favoriteBooks')) || [];
    setFavoriteBooks(storedFavorites);
  }, []);

  const removeFavorite = (id) => {
    const updatedFavorites = favoriteBooks.filter(book => book.id !== id);
    setFavoriteBooks(updatedFavorites);
    localStorage.setItem('favoriteBooks', JSON.stringify(updatedFavorites));
  };

  const handleDownload = async (pdf) => {
    try {
      const response = await axios({
        url: `http://localhost:8000/uploads/${pdf}`,
        method: 'GET',
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', pdf);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error("Error downloading book:", error);
    }
  };

  return (
    <>
    <div className=' pb-14 p-8'>
            <Link to={"/"} className='flex gap-4 '>
                <div className=' pt-2 text-xl'>
                <FaArrowLeft />
                </div>
                <p className='font-bold text-2xl'>Back Home</p>
            </Link>
        </div>
    <div className="p-10 pl-16 dark:bg-gray-800 dark:text-white mx-auto ">
        
      <h1 className="text-3xl font-bold mb-8">Favorite Books</h1>
      {favoriteBooks.length === 0 ? (
        <p>No favorite books added yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {favoriteBooks.map(book => (
            <div key={book.id} className="bg-gray-100 w-72 dark:bg-gray-700 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
              <p className="text-gray-700 dark:text-gray-200 mb-4">{book.author}</p>
                {book.image && (
                    <img
                    src={`http://localhost:8000/uploads/${book.image}`}
                    alt={book.title}
                    className=" w-48 h-64 object-cover mb-4 rounded left-8 relative"
                    />
                )}
              <div className="flex flex-col gap-2 relative left-8">
                {book.pdf && (
                  <button
                    onClick={() => window.open(`http://localhost:8000/uploads/${book.pdf}`, '_blank')}
                    className="w-48 py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
                  >
                    Read
                  </button>
                )}
                {book.pdf && (
                  <button
                    onClick={() => handleDownload(book.pdf)}
                    className="w-48 py-2 px-4 bg-gray-200 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
                  >
                    Download
                  </button>
                )}
                <button
                  onClick={() => removeFavorite(book.id)}
                  className="w-48 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
                >
                  Remove Book
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default FavoritePage;
