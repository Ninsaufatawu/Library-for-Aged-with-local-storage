import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import SideBar from './SideBar';

const SearchPage = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q');
    setQuery(query); // Set the query state

    const fetchSearchResults = async () => {
      try {
        const response = await axios.get('http://localhost:8000/upload/search', {
          params: {
            q: query,
          },
        });
        setResults(response.data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    if (query) {
      fetchSearchResults();
    }
  }, [location.search]);

  return (
    <div className="flex z-10">
      <SideBar />
      <div className=''>
        <h2 className="text-2xl font-bold mb-4">Search results for "{query}"</h2> {/* Display the search query */}
        {results.length === 0 ? (
          <div className="text-xl">No results found for "{query}" in the library.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {results.map((book, index) => (
              <div key={index} className="bg-white p-4 rounded shadow">
                <Link to={`/book/${book.id}`}>
                  <img src={`http://localhost:8000/uploads/${book.image}`} alt={book.title} className="w-32 h-48 object-cover mb-4" />
                  <h3 className="text-xl font-bold">{book.title}</h3>
                  <p>Author: {book.author}</p>
                </Link>
              </div>
            ))}
          </div>
          
        )}
      </div>
    </div>
  );
};

export default SearchPage;
