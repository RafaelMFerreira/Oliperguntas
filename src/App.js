import "./App.css";
import React, {useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// Components
import Footer from "./components/footer/footer";

// Pages
import ImgShare from "./pages/imgShare";
import Login from "./pages/login";
import Perguntas from "./pages/perguntas";
import Pesquisa from "./pages/pesquisa";

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

    <BrowserRouter>
        <div>
        <Footer/>
            <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/images" element={<ImgShare/>} />
              <Route path="/pesquisa" element={<Pesquisa/>} />
              <Route path="/perguntas" element={<Perguntas/>} />
           </Routes>
        </div> 
      </BrowserRouter>
  );
}

export default App;
