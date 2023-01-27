import React, { useContext } from 'react'
import { TableContext } from './store/context'
import { TableCell } from './styles'

function TableBody() {
  const { state } = useContext(TableContext)
  const { pages, currentPage, columns } = state
  if (pages.length === 0 )
    return (<tbody><tr><TableCell>No data found</TableCell></tr></tbody>)
  return (
    <tbody>
      {pages[currentPage-1].map((d) => (
        <tr key={d.id}>
          {columns
            .filter((col) => !col.isHidden)
            .map((col) => (
              <TableCell key={`${d.id}-${col.id}`}>
                {col.cell ? col.cell(d) : d[col.id]}
              </TableCell>
            ))}
        </tr>
      ))}
    </tbody>
  )
}

export default TableBody
