import React, { useState } from "react";
import './App.css';
import SearchBar from './components/SearchBar';
import DisplayContent from "./components/Display";


function App() {
  const [searchTerm, setSearchTerm] = useState("react")
  
  const handleSearchChange = key => {
    setSearchTerm(key);
  }

    return (
      <div className="App">
        <SearchBar initSearch={searchTerm} onSearchChange={handleSearchChange}></SearchBar>
        <div className="jumbotron">
          <DisplayContent search={searchTerm} onSearchChange={handleSearchChange}></DisplayContent>
        </div>
     
      </div>
    );
}

export default App;
