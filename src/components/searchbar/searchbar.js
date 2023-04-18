import React, { useState } from "react";
import "./searchbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchBar({onSearch}) {

  return (
    <div className="search-bar-container">
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Pesquisar..."
          onChange={onSearch}
          className="search-input"
        />
        <div className="search-icon-container">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
