import { useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import TableProvider, { TableContext } from './store/context'
import { Actions } from './store/reducer'
import { TableStyled } from './styles'
import TableBody from './TableBody'
import TableFooter from './TableFooter'
import TableHeader from './TableHeader'

function Table({ columns, data, showHeader = true }) {
  const { dispatch } = useContext(TableContext)

  useEffect(() => {
    dispatch({ type: Actions.SET_DATA, payload: data })
    dispatch({ type: Actions.SET_COLUMNS, payload: columns })
  }, [data, columns, dispatch])

  return (
    <TableStyled>
      {showHeader && <TableHeader />}
      <TableBody />
      <TableFooter/>
    </TableStyled>
  )
}

function ITATable(props) {
  return (
    <TableProvider>
      <Table {...props} />
    </TableProvider>
  )
}

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      // eslint-disable-next-line react/forbid-prop-types
      cell: PropTypes.any
    })),
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array.isRequired,
  showHeader: PropTypes.bool
}

export default ITATable
