import styled from 'styled-components'

export const TableCell = styled.td`
  border: 1px solid;
  padding: 0.5rem;
`

export const TableStyled = styled.table`
  border: 1px solid;
  border-collapse: collapse;
  width: 100%;
`

export const defaultColors = {
  blue: '#0073e6',
  hoverBlue: '#0073e699',
  grey: '#cccccc',
}

export const ButtonStyled = styled.button`
  background-color: transparent;
  border: 0;
  margin: 0 0.5rem;
  color: ${defaultColors.blue};
  cursor: pointer;
  &:hover {
    color: ${defaultColors.hoverBlue};
  }
  &:disabled {
    color: ${defaultColors.grey};
    cursor: initial;
  }
`
