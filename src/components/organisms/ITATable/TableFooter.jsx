import React, { useContext } from 'react'
import styled from 'styled-components'
import { TableContext } from './store/context'
import { TableCell } from './styles'
import { Button, Icon } from '../../atoms'
import { Actions } from './store/reducer'
import { SelectGroup } from '../../molecules'
import { colors, FlexBox } from '../../../styles'

const TableFooterStyled = styled.tbody`
  ${SelectGroup} {
    padding: 0rem 0.5rem;
    border-radius: 4px;
    margin-right: 1rem;
  }
  label {
    font-weight: bold;
  }
`

function TableFooter() {
  const { state, dispatch } = useContext(TableContext)
  const { columns, pages, currentPage, itemsPerPage } = state

  const isFirstPage = (currentPage <= 1)
  const isLastPage = (currentPage >= pages.length)
  return (
    <TableFooterStyled>
      <tr>
        <TableCell colSpan={columns.length}>
        <FlexBox direction="row">
          <FlexBox direction="row" align="center">
          <Button shadow='0' bgcolor='white' color={(!isFirstPage) ? colors.blue : colors.gray} onClick={() => dispatch({ type: Actions.PREV_PAGE })}>
            <Icon icon="arrow_back_ios" />
          </Button>
          <strong>Pagina {currentPage} de {(pages.length === 0) ? 1 : pages.length}</strong>
          <Button shadow='0' bgcolor='white' color={(!isLastPage) ? colors.blue : colors.gray} onClick={() => dispatch({ type: Actions.NEXT_PAGE })}><Icon icon="arrow_forward_ios" /></Button>
        </FlexBox>
        <FlexBox direction='row' align='center' justify='flex-end'>
          <SelectGroup
            id="itemsPerPage"
            label="Mostrar"
            value = {itemsPerPage.toString()}
            options={["10", "25", "50"].map((items) => ({ value: items, text: items }))}
            onChange={(e) => dispatch({ type: Actions.SET_ITEMS_PER_PAGE, payload: (e.target.value)})}
          />
          </FlexBox>
          </FlexBox>
        </TableCell>
      </tr>
    </TableFooterStyled>
  )
}

export default TableFooter
