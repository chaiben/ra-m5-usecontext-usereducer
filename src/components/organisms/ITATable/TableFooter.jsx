import React, { useContext } from 'react'
import styled from 'styled-components'
import { TableContext } from './store/context'
import { TableCell } from './styles'
import { FlexBox } from '../../../styles'
import PagesNav from './PagesNav'
import ItemsPerPage from './ItemsPerPage'
import DownloadTable from './DownloadTable'

const TableFooterStyled = styled.tbody`
  label {
    font-weight: bold;
  }
`

function TableFooter() {
  const { state } = useContext(TableContext)
  const { columns } = state

  return (
    <TableFooterStyled>
      <tr>
        <TableCell colSpan={columns.length}>
          <FlexBox direction="row">
            <FlexBox direction="row" align="center">
              <PagesNav />
            </FlexBox>
            <FlexBox direction="row" align="center" justify="flex-end">
              <ItemsPerPage />
              <DownloadTable />
            </FlexBox>
          </FlexBox>
        </TableCell>
      </tr>
    </TableFooterStyled>
  )
}

export default TableFooter
