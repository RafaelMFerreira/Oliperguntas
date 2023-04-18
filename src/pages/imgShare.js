import React, { useState } from "react";
import SearchBar from "../components/searchbar/searchbar";
import Imagens from "../components/imagens/imagens";
import Header from "../components/header/header";
import swal from 'sweetalert';

function ButtonPerguntar({onPublish}) {
  const handleClick = () => {
    swal({
      title: "Digite um título para a imagem:",
      content: {
        element: "input",
        attributes: {
          placeholder: "Título",
          type: "text",
        },
      },
      buttons: {
        cancel: true,
        confirm: {
          text: "Publicar",
          closeModal: false,
        },
      },
    }).then((value) => {
      if (value) {
        onPublish(value);
        swal("Imagem publicada com sucesso!", {
          icon: "success",
        });
      } else {
        swal.close();
      }
    });
  };

  return (
      <div className="scroller-header">
          <button className="scroller-button" onClick={handleClick}>
            <i className="fa fa-plus" style={{fontSize: "24px"}}></i> Publicar
          </button>
      </div>
  )
}

function ImgShare() {
  const [searchResults, setSearchResults] = useState([]);
  const [imagens, setImagens] = useState([
    { id: 1, src: "ciclista.jpg", title: "Ciclista" },
    { id: 2, src: "nadador.jpg", title: "Nadador" },
    { id: 3, src: "corredor.jpg", title: "Corredor" },
    { id: 4, src: "skatista.jpg", title: "Skatista" },
    // { id: 4, src: "logo2.png", title: "Logo" },
    // { id: 5, src: "modalidades.png", title: "Modalidades" },
    // { id: 6, src: "paises.jpg", title: "Paises" },
    // { id: 7, src: "medalhistas.jpg", title: "Medalhas" },
    // { id: 8, src: "edicoes.jpg", title: "Edições" },
    // { id: 9, src: "tochas.jpg", title: "Tochas"},
  ]);

  const handlePublish = (title) => {
    var possiveisImagens =  [...new Set(imagens.map(x => x.src))] 
    const randomDecimal = Math.random();
    const randomInteger = Math.floor(randomDecimal * possiveisImagens.length);
    const newImagens = [...imagens];
    const id = imagens.length + 1;
    newImagens.push({ id, src: possiveisImagens[randomInteger], title });
    setImagens(newImagens);
  }

  return (
    <>
      <Header title="Fotos" />
      <div>
        <ButtonPerguntar onPublish={handlePublish} />
        <Imagens images={imagens}></Imagens>
      </div>
    </>
  );
}

export default ImgShare;
