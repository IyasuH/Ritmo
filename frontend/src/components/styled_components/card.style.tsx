import styled, { keyframes } from 'styled-components'

export const CardContainer = styled.div`
    width: 80%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: 15px;
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    border: 1px solid rgba(255, 99, 99, 0.644);
`
export const CardGrid = styled.div`
    padding-top: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 3%;
    @media (max-width: 767px) {
        grid-template-columns: repeat(1, 1fr);
    }
    @media (min-width: 768px) and  (max-width: 991px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 992px) and  (max-width: 1199px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
    }
`
export const CardStyle = styled.div`
    border: 1px solid rgba(134, 72, 106, 0.979);
    border-radius: 0.25rem;
    /* padding: 1rem;     */
    margin-top: 0%;
    /* padding-top: 5%; */
    /* width: '10rem'; */
    &:hover {
        filter: brightness(0.85);
    }
`

export const StatCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 3%;
    margin-bottom: 0;
    /* border: 1px solid rgba(134, 72, 106, 0.979); */
    box-shadow: 0.5px 3px 4px rgba(01, 0.2, 0.2, 0.2);
    border-radius: 2%;
`

export const AroundCardImg = styled.div`
    align-items: center;
    text-align: center;
    padding: 5%;
    /* width: 70%; */
    border: 1px solid rgba(15, 189, 233, 0.829);
`

export const CardImg = styled.img`
    text-align: center;
    height: 100%;
    width: fit;
    object-fit: cover;
    border: 1px solid rgba(233, 77, 15, 0.829);
    border-radius: 5%;
`

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* padding-top: 1rem; */
    /* padding-top: 0em; */
`

export const CardFooterStyle = styled.div`
    padding: 1rem;
    padding-top: 0em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`


export const CardTextStyle = styled.div`
    margin-bottom: 0.5rem;
`