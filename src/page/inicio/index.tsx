import React from "react";

import Quiz from "../../components/quiz/index";

import { ContainerPage } from "./style"

function Page() {
    return(
        <>
            <ContainerPage>
                <div>
                    <h1>Sorteador de Perguntas</h1>
                </div>
                <Quiz />
            </ContainerPage>
        </>
    )
}

export default Page;