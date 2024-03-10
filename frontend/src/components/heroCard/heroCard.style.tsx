import styled from 'styled-components';
import {color, ColorProps} from 'styled-system';

export interface HeroCardProps extends ColorProps{
    base_color: string
    color_1: string
    color_2: string
}

export const HeroCard = styled.div<HeroCardProps>`
    ${color}
    border: none;
    padding: 1em;
    /* margin: 0 10em; */
    display: flex;
    flex-direction: column;
    align-items: end;
    width: 100%;
    margin: 1.5em .5em;
    /* transition: transform 0.3s ease; */
    box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
    background: linear-gradient(45deg, ${({color_1}) => color_1}, ${({color_2}) => color_2});
    text-transform: capitalize;
    transition: background 0.3s ease .8s;
    &:hover{
        background: linear-gradient(155deg, ${({color_1}) => color_1}, ${({color_2}) => color_2});
        /* behavior because it disturbs experience when user tries to touch the drop   */
        /* transform: scale(1.03); */
    }
`

export const HeroCardItem = styled.div`
    width: 100%;
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    padding-top: 4em;
    /* align-items: end; */
    justify-content: end;
`