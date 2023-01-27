import { createContext, useMemo, useReducer } from 'react'
import PropTypes from 'prop-types'
import { initialState, tableReducer } from './reducer'

const TableContext = createContext(initialState)

function TableProvider({ children }) {
  const [state, dispatch] = useReducer(tableReducer, initialState)
  const value = useMemo(() => ({ state, dispatch }), [state])
  return <TableContext.Provider value={value}>{children}</TableContext.Provider>
}

TableProvider.propTypes = {
  children: PropTypes.node,
}

export { TableContext }

export default TableProvider
