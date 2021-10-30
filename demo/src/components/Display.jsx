import React from "react";
import SearchResult from './SearchResult';

function DisplayContent({search, onSearchChange}) {

  const handleChange = (value) => {
      if(value !== search){
        onSearchChange(value)
        // console.debug("handleChange value:", value, search);
      }
  };
  
  return (
      <div>
          <h3 
            className="display-5" 
            title="topic of search term"
          >
            SEARCH TERM: <span className="badge bg-success">{search}</span>
          </h3>
          <SearchResult key={search} value={search} onChange={handleChange} ></SearchResult>
      </div>
  );
}

export default DisplayContent;
