import React, { useEffect } from "react";
import { useState } from "react";
import { ContainerQuiz, ContainerButton, ContainerDificuldade, ContainerCentral, ContainerMode } from "./style"
import dados from "../../data/dados.json"
import { toast } from 'react-toastify';

function Quiz() {
    const perguntas = dados
    const [itemselect, setItemselect] = useState(null);
    const [valueSelect, setValueSelect] = useState("")
    const [difficultySelect, setDifficultySelect] = useState("")
    const [modeSelect, setModeSelect] = useState("")
    
    useEffect(() => {console.log('qkrjugb', valueSelect)}, [valueSelect])

    const [valueFinal, setValueFinal] = useState('')
    const [difficultyFinal, setDifficultyFinal] = useState('')
    const [modeFinal, setModeFinal] = useState('')

    function SetData(){
        setValueFinal(valueSelect)
        save()
    }

    const setDifficulty = () => {
        setDifficultyFinal(difficultySelect)
        difficulty()
    }

    const setMode = () => {
        setModeFinal(modeSelect)
        modeGame()
    }

    function ramdom() {
        const value = Math.floor(Math.random() * 20);
        // @ts-ignore
        setItemselect(value);
        sort()

    console.log("ITEM SELECIONADO::::", perguntas[value]);
    }

    function limpar(){
        setItemselect(null)
        clean()
    }

    //Avisos
    const modeGame = () => toast.success("Modo de Jogo Selecionado!")
    const difficulty = () => toast.success("Dificuldade Selecionada!")
    const sort = () => toast.success("Pergunta Sorteada!")
    const clean = () => toast.success("Limpando Pergunta!")
    const save = () => toast.success("Resposta registrada com sucesso!")

    return(
        <>
            <ContainerCentral>
                <ContainerDificuldade>
                    <div>
                        <ContainerMode>
                            <h4>Modos de Jogo: </h4>
                            <select name="difficulty" id="difficulty" onChange={(e) => setModeSelect(e.target.value)}>
                                <option value="nada">Modo</option>
                                <option value="highScore" onClick={() => setModeSelect('highScore')}>HighScore</option>
                            </select>
                            <button onClick={() => setMode()}>Salvar</button>
                            <div className="handleDifficulty">
                                <input type="hidden" value={modeFinal}/>
                                <span className="resposta">{modeFinal}</span>
                            </div>
                        </ContainerMode>
                        <h2>Escolha o Nível de dificuldade:</h2>
                        <h3>Fácil: 30 Segundos para responder</h3>
                        <h3>Médio: 20 Segundos para responder</h3>
                        <h3>Difícil: 10 Segundos para responder</h3>
                        <select name="difficulty" id="difficulty" onChange={(e) => setDifficultySelect(e.target.value)}>
                            <option value="nada">Dificuldades</option>
                            <option value="Easy" onClick={() => setDifficultySelect('Easy')}>Fácil</option>
                            <option value="Medium" onClick={() => setDifficultySelect('Medium')}>Médio</option>
                            <option value="Hard" onClick={() => setDifficultySelect('Hard')}>Difícil</option>
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