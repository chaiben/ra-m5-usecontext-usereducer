import React, { useContext } from 'react'
import { TableContext } from './store/context'
import { handleDownload } from './helpers'
import { ButtonStyled } from './styles'

function DownloadTable() {
  const { state } = useContext(TableContext)
  const { columns, data } = state

  return (
    <ButtonStyled
      type="button"
      onClick={() => {
        handleDownload(columns, data)
      }}
    >
      ⤓
    </ButtonStyled>
  )
}

export default DownloadTable
