import React, { useContext } from 'react'
import styled from 'styled-components'
import { TableContext } from './store/context'
import { Actions } from './store/reducer'
import { TableCell } from './styles'

const TableCellStyled = styled(TableCell)`
  text-decoration: underline;
  cursor: pointer;
  &.selected {
    background-color: lightblue;
    text-decoration: none;
    cursor: initial;
  }
`
function TableHeader() {
  const { state, dispatch } = useContext(TableContext)
  const { columns, orderBy } = state
  return (
    <thead>
      <tr>
        {columns
          .filter((col) => !col.isHidden)
          .map((col) =>
            col.sort ? (
              <TableCellStyled
                as="th"
                key={col.id}
                onClick={() =>
                  dispatch({ type: Actions.SET_ORDER_BY, payload: col.id })
                }
                className={col.id === orderBy ? 'selected' : ''}
              >
                {col.label}
              </TableCellStyled>
            ) : (
              <TableCell as="th" key={col.id}>
                {col.label}
              </TableCell>
            ),
          )}
      </tr>
    </thead>
  )
}

export default TableHeader
