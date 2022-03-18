import React from "react";

import Quiz from "../../components/quiz/index";

import { ContainerPage } from "./style"

function Page() {
    return(
        <>
            <ContainerPage>
                <div>
                    <span className="xiu">aaaaaaaaaaaaaaaaaa</span>
                    <h1>TEste</h1>
                </div>
                <Quiz />
            </ContainerPage>
        </>
    )
}

export default Page;