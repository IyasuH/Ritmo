import styled, { keyframes } from 'styled-components'

export const NavBar = styled.div`
    width: 100%;
    text-decoration: none;
    color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid rgba(179, 73, 73, 0.644);
    padding: 1%;
    padding-bottom: 0.5%;
`

export const NavBarComp = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 85%;
    /* border: 1px solid rgba(255, 99, 99, 0.644); */
`

export const NavBarButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;    
    border: 1px solid rgba(255, 99, 99, 0.644);
    width: 7%;
`