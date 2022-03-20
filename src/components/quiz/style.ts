import styled from "styled-components";

export const ContainerQuiz = styled.div`

display: flex;
align-items: center;
justify-content: center;


    & > div {
    background-color: #ffffff;
    border-radius: 10px;
    width: 610px;
    height: 450px;
    display: flex;
    flex-direction: column;
    padding: 30px;
    }

    button {
        border: 0;
        margin-top: 16px;
        background-color: #3C6E71;
        border-radius: 4px;
        width: 100%;
        height: 48px;
        cursor: pointer;
        color: #ffffff;
        :hover {
        background-color: blue;
        transition: 0.8s;
        }
    }

    input {
        padding: 0 15px;
        border: 0;
        background-color: #D9D9D9;
        border-radius: 4px;
        margin-top: 16px;
        width: 100%;
        height: 48px;
    }

    ul{
        margin-top: 40px;
    }

    li {
        list-style-type: none;
        margin-top: 7px;
    }

    .enunciado{
        font-size: 25px;
    }

    select{
        border-radius: 5px;
        width: 550px;
        height: 30px;
        margin-top: 40px;
        text-align: center;
    }

    .resposta{
        color: #ffffff;
    }

    .lista{
        display: flex;
        align-items: center;
        justify-content: center;
    }

`
export const ContainerButton = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 15px;
margin-bottom: 25px;
`