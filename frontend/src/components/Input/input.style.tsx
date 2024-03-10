import styled from 'styled-components'
import { layout, space, LayoutProps, SpaceProps } from 'styled-system';

type CustomInputProps = LayoutProps & SpaceProps;

export const CustomInput = styled.input<CustomInputProps>`
    ${space}
    ${layout}
    appearance: none;
    background-color: #f5f5f5;
    border: 2px solid #ccc;
    border-radius: 5px;
    height: 5%;
    padding: 3.5%;
    margin: 2%;
    transition: border-color 0.3s;
    &:focus{
        border-color: #8aa58b;
        outline: none;
    }
`;

export const CustomInputLabel = styled.label<CustomInputProps>`
    ${space}
    ${layout}
`;

export const SearchInput = styled.input`
    appearance: none;
    background-color: #f5f5f5;
    border: 2px solid #ccc;
    border-radius: 5em;
    height: 3em;
    margin: .15em 1.1em;
    width: 25em;
    padding: 3.5%;
    /* margin: 2%; */
    transition: border-color 0.3s;
    &:focus{
        border-color: #8aa58b;
        outline: none;
    }
`
