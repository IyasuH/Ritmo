import styled, { keyframes } from 'styled-components'

export const NavBar = styled.div`
    position: fixed;
    top: 0;
    z-index: 99;
    width: 100%;
    text-decoration: none;
    color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #f0f0f0;
    align-items: center;
    /* border: 1px solid yellow; */
    padding: 1%;
    padding-bottom: 0.5%;
`

export const NavBarComp = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const NavBarButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;    
    border: 1px solid rgba(255, 99, 99, 0.644);
    width: 7%;
`