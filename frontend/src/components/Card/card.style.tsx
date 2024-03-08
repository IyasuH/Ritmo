import styled from 'styled-components'
import { space, SpaceProps, color, ColorProps, layout, LayoutProps, typography, TypographyProps, border, BorderProps } from 'styled-system';

interface CardProps extends SpaceProps, ColorProps, LayoutProps, BorderProps {
}

export const SquareCard = styled.div<CardProps>`
    ${space}
    ${color}
    ${layout}
    ${border}
    border: none;
    border-radius: 8%;
    width: 15em;
    height: 15em;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    padding: 1.5%;
    margin: 2%;
    &:hover{
        /* border: 1px solid #4caf50; */
        background-color: #e0e0e0;
    }
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
        grid-template-columns: repeat(5, 1fr);
    }
`

export const CardImg = styled.img`
    text-align: center;
    height: 100%;
    width: 100%;
    /* width: fit; */
    object-fit: cover;
    border-radius: 50%;
`

export const AroundCardImg = styled.div`
    align-items: center;
    text-align: center;
    height: 60%;
    /* padding: 3%; */
    border-radius: 50%;
    /* background-color: #e0e0e0; */
    margin: 5% 18%;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.479);
    /* border-radius: 6px; */
`

export const CardFooterStyle = styled.div`
    padding: 1rem;
    padding-top: 0em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const CardTextStyle = styled.div`
    margin-bottom: 0.5rem;
`

export const LineCard = styled.div`
    border: none;
    width: 100%;
    cursor: pointer;
    display: flex;
    padding: .7% 0.5%;
    /* border-bottom: 1.5px solid #4d4d4d; */
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.479);
    margin-bottom: 2%;
    background-color: #f5f5f5;
    &:hover{
        background-color: #e0e0e0;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.479);
    }
`

export const LineCardSingles = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
`

export const LineCardInfo = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-right: 5%;
    margin-left: 2%;
`

export const CardItem = styled.div`
    height: 100%;
    display: flex;
    font-weight: 500;
    align-items: center;
    /* border: 0.5px solid green; */
`

export const StatCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1.5%;
    margin-bottom: 0;
    /* border: 2px solid blue; */
    /* box-shadow: 0.5px 3px 4px rgba(0.1, 0.2, 0.2, 0.2); */
    /* border-radius: 2%; */
`

export const StasticCard = styled.div`
    border: none;
    /* width: 100%; */
    cursor: pointer;
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: space-between;
    padding: .3em 1em;
   /* border-bottom: 1.5px solid #4d4d4d; */
    border-radius: .7em;
    box-shadow: .2px .2px 2px rgba(0, 0, 0, 0.479);
    margin-bottom: .7em;
    background-color: #f5f5f5;
    font-weight: 300;
    /* padding-left: -1em; */
    font-size: 14px;
    color: #4b4a4a;
    &:hover{
        background-color: #e0e0e0;
        box-shadow: .5px .5px 4px rgba(0, 0, 0, 0.479);
    }
`
export const StasticValue = styled.div`
    font-size: 19px;
    font-weight: 400;
    /* padding-bottom: .7em; */
    padding-left: .3em;
    /* padding-bottom: .1em; */
    color: #000;
`