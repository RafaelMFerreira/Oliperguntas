import React, {useState} from 'react';
import Header from "../components/header/header";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';


import "./perguntas.css";


function ButtonPerguntar({onClick}){
    return (
        <div className="scroller-header">
            <button className="scroller-button" onClick={onClick}><i class="fa fa-plus" style={{fontSize: "24px"}}></i> Perguntar</button>
        </div>
    )
}

function BalaoPergunta({text, img}){
    return(
        <div className='div-main-pergunta'>
            <div className='picture-pergunta-div'>
                <img src={img} className='picture-pergunta'></img>
            </div>
            <div className='balao-pergunta'>
                {text}
            </div>
        </div>
    )
}

function BotaoResponder({onClick}){
    return (
        <div style={{width: "100vw", height: '60px'}}>
            <div className='balao-responder' onClick={onClick}>+ responder</div>
        </div>
    )
}

function BalaoResposta({text, img}){
    return(
        <div className='div-main-resposta'>
            <div className='balao-resposta'>
                {text}
            </div>
            <div className='picture-resposta-div'>
                <img src={img} className='picture-resposta'></img>
            </div>
        </div>
    )
}

function Perguntas() {
   
    const [perguntas, setPerguntas] = useState([
        {
            id: 1,
            pergunta:'Está pergunta é um exemplo?',
            resposta:'Sim, ela é!',
            img_pergunta:'skatista.jpg',
            img_resposta:'corredor.jpg',
        },
        {
            id: 2,
            pergunta:'E esta aqui?',
            resposta:'',
            img_pergunta:'corredor.jpg',
            img_resposta:'',
        },
    ])

    function handlePerguntar(){
        const teste = (txt) => {
            var new_id = 4
            var dict = {
                id: new_id,
                pergunta:txt,
                resposta:'',
                img_pergunta:'corredor.jpg',
                img_resposta:'',
            }
            setPerguntas([...perguntas, dict])
        }

        swal({
            title: "Digite a sua pergunta",
            content: {
                element: "input",
                attributes: {
                    placeholder: "Pergunta",
                    type: "text",
                },
            },
            buttons: {
                cancel: true,
                confirm: {
                    text: "Perguntar",
                    closeModal: true,
                },
            },
        }).then((value) => {
            if (value) {
                    teste(value);
            } else {
                swal.close();
            }
        });
    };

    function handleResponder(dict){
        const teste = (txt) => {
            dict.resposta=txt;
            dict.img_resposta='nadador.jpg';
            setPerguntas([...perguntas])
        }

        swal({
            title: "Digite a sua resposta",
            content: {
                element: "input",
                attributes: {
                    placeholder: "Resposta",
                    type: "text",
                },
            },
            buttons: {
                cancel: true,
                confirm: {
                    text: "Reponder",
                    closeModal: true,
                },
            },
        }).then((value) => {
            if (value) {
                    teste(value);
            } else {
                swal.close();
            }
        });
    };

    return (
        <>
            <Header title='Perguntas'/>
            <ButtonPerguntar onClick={handlePerguntar}></ButtonPerguntar>
            <div style={{height: 'calc(100vh - 260px)', overflow: 'auto'}}>
                {perguntas.map((x) => {
                    return(
                        <div key={x.id} className='div-pergunta-resposta'>
                            <BalaoPergunta text={x.pergunta} img={x.img_pergunta}></BalaoPergunta>
                            { x.resposta != '' ?
                                <BalaoResposta text={x.resposta} img={x.img_resposta}></BalaoResposta>
                                :
                                <BotaoResponder onClick={() => handleResponder(x)}/>
                            }    
                        </div>
                    )
                })}
            </div>
        </>
    );
  }
  
  export default Perguntas;