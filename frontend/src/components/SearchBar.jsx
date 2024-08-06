import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <div className="flex space-x-5 pt-10 w-full ">
        <div className="border-none bottom-8 relative">
          <input
            type="text"
            placeholder="Search for books..."
            className="p-1 pr-96 border-none border-white dark:text-gray-800 text-xl rounded-md"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
        <div className="relative bottom-8">
          <button
            className="relative p-1 border justify-center text-xl bg-white dark:bg-slate-800 text-center rounded-md pl-5 pr-5"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
