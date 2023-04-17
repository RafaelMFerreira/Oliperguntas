import "./App.css";
import React, {useState} from 'react';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import SearchBar from "./components/searchbar/searchbar";
import Imagens from "./components/imagens/imagens";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  
  function handleSearch(query) {
    // perform search using the query value
    // update searchResults state with the search results
  }
  
  const imagens = [
    { id: 1, src: 'logo2.png', title: 'Image 1' },
    { id: 2, src: 'aneisOlimpiada.png', title: 'Image 2' },
    { id: 3, src: 'logo2.png', title: 'Image 3' },
    { id: 4, src: 'aneisOlimpiada.png', title: 'Image 4' },
    { id: 5, src: 'logo2.png', title: 'Image 5' }
  ];

  return (
    <div>
      <Header title="Fotos"></Header>
      {/* <SearchBar onSearch={handleSearch} ></SearchBar> */}
      <Imagens images={imagens}></Imagens>
      <Footer></Footer>
    </div>
  );
}

export default App;
