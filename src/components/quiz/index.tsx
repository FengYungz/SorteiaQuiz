import React, { useEffect } from "react";
import { useState } from "react";

import { ContainerQuiz, ContainerButton } from "./style"

import dados from "../../data/dados.json"

function Quiz() {
    const perguntas = dados
    const [itemselect, setItemselect] = useState(null);
    const [valueSelect, setValueSelect] = useState("")
    
    useEffect(() =>{console.log('qkrjugb', valueSelect)}, [valueSelect])

    const [valueFinal, setValueFinal] = useState('')

    function SetData(){
        setValueFinal(valueSelect)
    }


    function ramdom() {
    const value = Math.floor(Math.random() * 3);
    // @ts-ignore
    setItemselect(value);

    console.log("ITEM SELECIONADO::::", perguntas[value]);
    }

    function limpar() { setItemselect(null)}

    return(
        <>
            <ContainerQuiz>
                <div>
                    <ContainerButton>
                        <button onClick={() => ramdom()}>sortear</button>
                        <button onClick={() => limpar()}>Limpar</button>
                    </ContainerButton>
                    <div>
                        {perguntas
                        .filter((item) => item.id === itemselect)
                        .map((item) => (
                            <span key={item.id}>
                                <ul>
                                    <li className="enunciado">{item.title}</li>
                                    <li>{item.alt1}</li>
                                    <li>{item.alt2}</li>
                                    <li>{item.alt3}</li>
                                </ul>
                            </span>
                        ))}
                    </div>
                    <select name="alternativas" id="alt" onChange={(e) => setValueSelect(e.target.value)}>
                        <option value="nada">Resposta</option>
                        <option value="A" onClick={() => setValueSelect('A')}>(A)</option>
                        <option value="B" onClick={() => setValueSelect('B')}>(B)</option>
                        <option value="C" onClick={() => setValueSelect('C')}>(C)</option>
                    </select>
                    <button onClick={() => SetData()}>Salvar</button>
                    <div className="pega">
                        <input type="hidden" value={valueFinal}/>
                        <span>{valueFinal}</span>
                    </div>
                </div>
            </ContainerQuiz>
        </>
    )
}

export default Quiz;