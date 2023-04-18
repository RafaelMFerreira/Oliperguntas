import React, { useState } from 'react';
import SearchBar from "../components/searchbar/searchbar";
import Imagens from "../components/imagens/imagens";
import Header from "../components/header/header";
import swal from 'sweetalert';


function Pesquisa() {
  const [searchResults, setSearchResults] = useState('');

  function handleSearch(e) {
    setSearchResults(e.target.value)
  }

  const imagens = [
    { id: 1, src: 'modalidades.png', title: 'Modalidades' },
    { id: 2, src: 'medalhistas.jpg', title: 'Medalhistas' },
    { id: 3, src: 'paises.jpg', title: 'Países' },
    { id: 4, src: 'edicoes.jpg', title: 'Edições' },
    { id: 5, src: 'tochas.jpg', title: 'Tochas' },
  ];

  function handleImgClick(title) {
    swal({
      title: title,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum., Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    });
  }

  return (
    <>
      <Header title='Buscar' />
      <div>
        <SearchBar onSearch={handleSearch} ></SearchBar>
        <Imagens images={imagens} filter={searchResults} onClick={handleImgClick}></Imagens>
      </div>
    </>
  );
}

export default Pesquisa;
