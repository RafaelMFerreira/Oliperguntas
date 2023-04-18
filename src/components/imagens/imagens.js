

import React from 'react';
import './imagens.css';


function Imagens({ images, onClick=() => {}, filter=''}) {
  return (
    <>
      <div className="scroller ">
        <ul>
          {images.map((image) => {
            if(image.title.toUpperCase().includes(filter.toUpperCase())){
              return(
                <li key={image.id} class>
                  <p>{image.title}</p>
                  <img onClick={() => onClick(image.title)} src={image.src} alt={image.title} className='shadow'/>
                </li>
              )
            }
          })}
        </ul>
      </div>
    </>
  );
}

export default Imagens;
