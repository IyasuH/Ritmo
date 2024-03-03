import styled, { keyframes } from 'styled-components'

export const Button1 = styled.button`
    background-color: #707070d5;
    color: white;
    padding: 2%;
    width: 85%;
    justify-content: center;
    max-width: 400px;
    margin: 5px;
    border-radius: 0.25rem;
    /* border: 1px solid black; */
    &:hover {
        color: black;
        background-color: white;
        border: 2px solid #707070d5;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-top: 20%;

`