

import React from 'react';
import './imagens.css';

function Imagens({ images }) {
  return (
    <>
      <div className="scroller-header">
        <button className="scroller-button"><i class="fa fa-plus" style={{fontSize: "24px"}}></i> Publicar</button>
      </div>
      <div className="scroller">
        <ul>
          {images.map((image) => (
            <li key={image.id}>
              <img src={image.src} alt={image.title} />
              <p>{image.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Imagens;
