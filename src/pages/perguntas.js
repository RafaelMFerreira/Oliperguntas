import React, {useState} from 'react';
import Header from "../components/header/header";
import { useNavigate } from "react-router-dom";

import "./perguntas.css";


function ButtonPerguntar({}){
    return (
        <div className="scroller-header">
            <button className="scroller-button"><i class="fa fa-plus" style={{fontSize: "24px"}}></i> Perguntar</button>
        </div>
    )
}

function BalaoPergunta({text}){
    return(
        <div className='div-main-pergunta'>
            <div className='picture-pergunta-div'>
                <div className='picture-pergunta'></div>
            </div>
            <div className='balao-pergunta'>
                {text}
            </div>
        </div>
    )
}

function BalaoResposta({text}){
    return(
        <div className='div-main-resposta'>
            <div className='balao-resposta'>
                {text}
            </div>
            <div className='picture-resposta-div'>
                <div className='picture-resposta'></div>
            </div>
        </div>
    )
}

function Perguntas() {
   
    const [perguntas, setPerguntas] = useState([
        {
            pergunta:'Posso fazer uma pergunta? Desejaria fazer uma pergunta beeeem longa, para que ela se destaque!',
            resposta:'Claro que pode!',
        },
        {
            pergunta:'Tudo bem?',
            resposta:'Olá, sim, estou muito bem, vou responder da forma mais longa possível para que você saiba o quanto eu estou bem!',
        },
        {
            pergunta:'Teste!',
            resposta:'Teste...',
        }
    ])

    return (
        <>
            <Header title='Perguntas'/>
            <ButtonPerguntar></ButtonPerguntar>
            <div style={{height: 'calc(100vh - 210px)', overflow: 'auto'}}>
                {perguntas.map((x) => {
                    return(
                        <div className='div-pergunta-resposta'>
                            <BalaoPergunta text={x.pergunta}></BalaoPergunta>
                            <BalaoResposta text={x.resposta}></BalaoResposta>
                        </div>
                    )
                })}
            </div>
        </>
    );
  }
  
  export default Perguntas;