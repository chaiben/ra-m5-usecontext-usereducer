import React, { useContext } from 'react'
import { TableContext } from './store/context'
import { TableCell } from './styles'
import Button from '../../atoms/Button'
import { Actions } from './store/reducer'

function TableFooter() {
  const { state, dispatch } = useContext(TableContext)
  const { columns, pages, currentPage, itemsPerPage } = state
  return (
    <tbody>
      <tr>
        <TableCell colSpan={columns.length}>
        <Button onClick={() => dispatch({ type: Actions.PREV_PAGE })}>-</Button>
        <Button onClick={() => dispatch({ type: Actions.NEXT_PAGE })}>+</Button>
        Page: {currentPage} / {pages.length} - Items: {itemsPerPage}
        </TableCell>
      </tr>
    </tbody>
  )
}

export default TableFooter
