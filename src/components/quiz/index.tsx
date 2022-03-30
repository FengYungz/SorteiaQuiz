import React, { useEffect } from "react";
import { useState } from "react";

import { ContainerQuiz, ContainerButton, ContainerDificuldade, ContainerCentral } from "./style"

import dados from "../../data/dados.json"

function Quiz() {
    const perguntas = dados
    const [itemselect, setItemselect] = useState(null);
    const [valueSelect, setValueSelect] = useState("")
    const [difficultySelect, setdifficultySelect] = useState("")
    
    useEffect(() => {console.log('qkrjugb', valueSelect)}, [valueSelect])

    const [valueFinal, setValueFinal] = useState('')
    const [difficultyFinal, setDifficultyFinal] = useState('')

    function SetData(){
        setValueFinal(valueSelect)
    }
    const alerta = () => alert("Modos de jogo: Fácil: (40 segundos para resposder) | Médio: (30 segundos para responder) | Difícil: (20 segundos para responder)");


    const setDifficulty = () => setDifficultyFinal(difficultySelect);



    function ramdom() {
    const value = Math.floor(Math.random() * 20);
    // @ts-ignore
    setItemselect(value);

    console.log("ITEM SELECIONADO::::", perguntas[value]);
    }

    function limpar() { setItemselect(null)}

    return(
        <>
            <ContainerCentral>
                <ContainerDificuldade>
                    <div>
                        <button onClick={() => alerta()}>Instruções</button>
                        <h2>Escolha o Nível de dificuldade:</h2>
                        <select name="difficulty" id="difficulty" onChange={(e) => setdifficultySelect(e.target.value)}>
                            <option value="nada">Dificuldades</option>
                            <option value="Easy" onClick={() => setdifficultySelect('Easy')}>Fácil</option>
                            <option value="Medium" onClick={() => setdifficultySelect('Medium')}>Médio</option>
                            <option value="Hard" onClick={() => setdifficultySelect('Hard')}>Difícil</option>
                        </select>
                        <button onClick={() => setDifficulty()}>Salvar</button>
                        <div className="handleDifficulty">
                            <input type="hidden" value={difficultyFinal}/>
                            <span className="resposta">{difficultyFinal}</span>
                        </div>
                    </div>
                </ContainerDificuldade>
                <ContainerQuiz>
                    <div>
                        <ContainerButton>
                            <button onClick={() => ramdom()}>Sortear</button>
                            <button onClick={() => limpar()}>Limpar</button>
                        </ContainerButton>
                        <div>
                            {perguntas
                            .filter((item) => item.id === itemselect)
                            .map((item) => (
                                <span key={item.id}>
                                    <div className="lista">
                                        <ul>
                                            <li className="enunciado">{item.title}</li>
                                            <li>{item.alt1}</li>
                                            <li>{item.alt2}</li>
                                            <li>{item.alt3}</li>
                                            <li>{item.alt4}</li>
                                        </ul>
                                    </div>
                                </span>
                            ))}
                        </div>
                        <select name="alternativas" id="alt" onChange={(e) => setValueSelect(e.target.value)}>
                            <option value="nada">Resposta</option>
                            <option value="1" onClick={() => setValueSelect('1')}>(1)</option>
                            <option value="2" onClick={() => setValueSelect('2')}>(2)</option>
                            <option value="3" onClick={() => setValueSelect('3')}>(3)</option>
                            <option value="4" onClick={() => setValueSelect('4')}>(4)</option>
                        </select>
                        <button onClick={() => SetData()}>Salvar</button>
                        <div className="pega">
                            <input type="hidden" value={valueFinal}/>
                            <span className="resposta">{valueFinal}</span>
                        </div>
                    </div>
                </ContainerQuiz>
            </ContainerCentral>
        </>
    )
}

export default Quiz;