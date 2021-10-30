import React, { useState } from "react";
import "../App.css";

function SearchBar({initSearch, onSearchChange}) {

    const [searchTerm, setSearchTerm] = useState(initSearch)

    const handleChange = (e) => {
      setSearchTerm(e.target.value);
    };

      return (
        <nav className="navbar navbar-dark bg-dark">
          <h1 className="navbar-brand project-name">Github Topic Explorer: {initSearch}</h1>
          <div className="row align-items-end">
            <div className="col">
              <input  
                value={searchTerm}
                onChange={handleChange}
                className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
              />
            </div>
            <div className="col">
              <button 
                className="btn btn-outline-success my-2 my-sm-0" 
                type="submit"
                onClick={() => onSearchChange(searchTerm)}
              >
                Search
              </button>
            </div>
          </div>
        </nav>
      );
};

export default SearchBar;
