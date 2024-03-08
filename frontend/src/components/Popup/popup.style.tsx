import styled from 'styled-components'
import { space, SpaceProps, color, ColorProps, layout, LayoutProps, typography, TypographyProps } from 'styled-system';

interface PopupProps extends SpaceProps, ColorProps, LayoutProps {
    variant: string;
}

export const CustomPopup = styled.div<PopupProps>`
    ${space}
    ${color}
    ${layout}
    display: flex;
    justify-content: center;
    align-items: center;
    border: .5px solid black;
    border-radius: 8px;
    padding: 2% 3%;
`

export const PopupParent = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PopupTopComp = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: .7px solid #2e2e2e;
    padding-bottom: 2%;
    margin-bottom: 3%;
`

export const PopupBottomComp = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    border-top: .7px solid #2e2e2e;
    padding-top: 3%;
`