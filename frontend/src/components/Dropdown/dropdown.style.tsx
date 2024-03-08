import styled from 'styled-components'

interface DropdownProps {
    display: (props: { isDown: boolean }) => string;
}

export const CustomDropdown = styled.div<DropdownProps>`
    position: relative;
    display: ${({ display }) => display({ isDown: true })};
`

export const CustDropdownBtn = styled.button`
  background-color: #f5f5f5;
  border: none;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
`

export const CustDropdownCont = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  display: none;    
`

export const DropdownConatinerHover = styled(CustomDropdown)`
    &:hover ${CustDropdownCont} {
        display: block;
    }
`