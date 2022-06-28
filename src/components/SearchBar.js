import React, { useState } from 'react';

const SearchBar = ({ onQuerySubmit }) => {
  const [query, setQuery] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    // TO DO: Call a callback function from parent component: App
    onQuerySubmit(query);
  };

  return (
    <div className="ui segment search-bar">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
