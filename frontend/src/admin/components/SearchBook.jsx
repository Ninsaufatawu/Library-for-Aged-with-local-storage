// SearchBook.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaLongArrowAltRight, FaLongArrowAltLeft  } from "react-icons/fa";

function SearchBook({ categories, books, setBooks }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [deleteEnabled, setDeleteEnabled] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    searchBooks();
  }, [searchTerm, selectedCategory]);

  const searchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:8000/upload/search', {
        params: {
          q: searchTerm,
          category: selectedCategory,
        }
      });
      setBooks(response.data);
    } catch (error) {
      console.error('Error searching books:', error);
    }
  };

  const deleteBookByTitle = async (title) => {
    try {
      await axios.delete(`http://localhost:8000/upload/title/${encodeURIComponent(title)}`);
      searchBooks(); // Refresh the list of books
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const handleCheckboxChange = (id) => {
    setDeleteEnabled(prevState => ({ ...prevState, [id]: !prevState[id] }));
  };

  const totalPages = Math.ceil(books.length / itemsPerPage);

  const currentBooks = books.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex-1 lg:w-1/2">
      <h2 className="text-2xl font-bold mb-4 text-center dark:text-white">Search Books</h2>
      <div className="mb-4">
        <label htmlFor="searchTerm" className="block text-lg font-medium dark:text-white">Search</label>
        <input
          id="searchTerm"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by Title or Author"
          className="border p-2 mb-2 w-full text-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="searchCategory" className="block text-lg font-medium dark:text-white">Category</label>
        <select
          id="searchCategory"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border p-2 mb-2 w-full text-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <ul className="mt-4">
        {currentBooks.length > 0 ? (
          currentBooks.map(book => (
            <li key={book.id} className="border p-3 mb-2 flex justify-between items-center dark:border-gray-600">
              <div>
                <h3 className="text-lg font-semibold dark:text-white">{book.title}</h3>
                <p className="dark:text-gray-300">{book.author}</p>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={deleteEnabled[book.id] || false}
                  onChange={() => handleCheckboxChange(book.id)}
                  className="mr-2"
                />
                <button
                  onClick={() => deleteBookByTitle(book.title)}
                  disabled={!deleteEnabled[book.id]}
                  className="bg-red-600 text-white p-2 ml-2 rounded disabled:bg-gray-500"
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <li className="text-lg dark:text-white">No books found</li>
        )}
      </ul>

      <div className="flex justify-between mt-4 pt-10 ">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="bg-blue-600 text-white p-2 flex w-48 text-2xl justify-center rounded disabled:bg-blue-400"
        >
             <FaLongArrowAltLeft  className=' pt-1 text-3xl '/>
          Previous
         
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="bg-blue-600 text-white p-2 w-52 text-2xl flex justify-center  rounded disabled:bg-blue-400"
        >
          Next
          <FaLongArrowAltRight className=' pt-1 text-4xl '/>
        </button>
      </div>
    </div>
  );
}

export default SearchBook;
