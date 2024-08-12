import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileHeader from "./ProfileHeader"

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
      <div className="flex space-x-10 pt-10 w-full dark:bg-slate-800 z-10 ">
        <div className="bottom-8 relative left-10 ">
          <input
            type="text"
            placeholder="Search for books..."
            className="p-2 pr-96   dark:text-gray-800 text-xl rounded-md border border-black " 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
        <div className="relative bottom-8 left-5">
          <button
            className="relative p-2 border justify-center text-xl bg-white dark:bg-slate-800 text-center rounded-md pl-5 pr-5"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className=' justify-end flex relative left-40 -top-8'>
          <ProfileHeader/>
        </div>
      </div>
      
    </div>
  );
};
