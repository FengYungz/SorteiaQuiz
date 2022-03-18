import React from "react";
import { useState } from "react";

import { ContainerQuiz } from "./style"

import dados from "../../data/dados.json"

function Quiz() {
    const perguntas = dados
    const [itemselect, setItemselect] = useState(null);

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
                <button onClick={() => ramdom()}>sortear</button>
                <button onClick={() => limpar()}>Limpar</button>
                <p>querodemais</p>
                <div>
                    {perguntas
                    .filter((item) => item.id === itemselect)
                    .map((item) => (
                        <span key={item.id}>
                            <ul>
                                <li>{item.title}</li>
                                <li>{item.alt1}</li>
                                <li>{item.alt2}</li>
                                <li>{item.alt3}</li>

                                <input type="checkbox" name="Resposta" id="0" />
                            </ul>
                        </span>
                    ))}
                </div>
            </ContainerQuiz>
        </>
    )
}

export default Quiz;