import React, { useContext } from 'react'
import { Button, Icon } from '../../atoms'
import { TableContext } from './store/context'
import { colors } from '../../../styles'
import { handleDownload } from '../../../helpers'

function DownloadTable() {
  const { state } = useContext(TableContext)
  const { columns, data } = state

  return (
    <Button
      shadow="0"
      bgcolor="white"
      color={colors.blue}
      onClick={() => {
        handleDownload(columns, data)
      }}
    >
      <Icon icon="download" />
    </Button>
  )
}

export default DownloadTable
