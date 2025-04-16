import React from 'react';
import { useSearch } from '../context/SearchContext';
import { useNavigate } from 'react-router-dom';

const SearchModal = () => {
  const { isSearchOpen, toggleSearch, searchQuery, setSearchQuery } = useSearch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      toggleSearch();
    }
  };

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
      <div className="bg-white w-full max-w-2xl mx-4 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="p-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
            autoFocus
          />
          <div className="flex justify-end mt-4 space-x-2">
            <button
              type="button"
              onClick={toggleSearch}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchModal;