import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <SearchContext.Provider value={{ 
      isSearchOpen, 
      toggleSearch, 
      searchQuery, 
      setSearchQuery 
    }}>
      {children}
    </SearchContext.Provider>
  );
};