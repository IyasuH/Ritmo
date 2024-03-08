import styled from 'styled-components'

import { space, SpaceProps, color, ColorProps, layout, LayoutProps, typography, TypographyProps, border, BorderProps } from 'styled-system';

interface ButtonProps extends SpaceProps, ColorProps, LayoutProps, BorderProps {
    variant: string;
    hoverColor: string;
    hoverBackgroundColor: string;
    hoverFontWeight: string;
    hoverBorderColor: string;
    hoverBorderThickeness: string;
}

export const CustomButton = styled.button<ButtonProps>`
    ${space}
    ${color}
    ${layout}
    ${border}
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor};
        color: ${({ hoverColor }) => hoverColor};
        font-weight: ${({ hoverFontWeight }) => hoverFontWeight};
        border: ${({ hoverBorderThickeness }) => hoverBorderThickeness} solid ${({ hoverBorderColor }) => hoverBorderColor};
    }
`

export const OtherButton = styled.button`
    ${space}
    ${color}
    ${layout}
    ${border}
    border: 2px solid #4caf50;
    background-color: #fff;
    border-radius: 4px;
    margin: 3px;
    width: 90%;
    cursor: pointer;
    &:hover {
        background-color: #4caf50;
        color: #fff;
        /* border-color: #fff; */
    }
`

export const OtherButtonContainer = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: ; */
    flex-direction: column;
    width: 100%;
    margin-top: 20%;
`