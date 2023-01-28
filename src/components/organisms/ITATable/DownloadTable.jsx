import React, { useContext } from 'react'
import styled from 'styled-components'
import { TableContext } from './store/context'
import { handleDownload } from './helpers'

const ButtonStyled = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  color: #0073e6;
  &:hover {
    color: #0073e699;
  }
`

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
