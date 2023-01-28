import React, { useContext } from 'react'
import { Button, Icon } from '../../atoms' // no importes de fuera de la tabla. Es un componente pensado para reutilizarse en diferentes proyectos
import { TableContext } from './store/context'
import { colors } from '../../../styles' // no importes de fuera de la tabla. Es un componente pensado para reutilizarse en diferentes proyectos
import { handleDownload } from '../../../helpers' // no importes de fuera de la tabla. Es un componente pensado para reutilizarse en diferentes proyectos

function DownloadTable() {
  const { state } = useContext(TableContext)
  const { columns, data } = state

  //   La función de handleDownload debería de vivir en la tabla, no fuera de ella y exportarse al exterior.
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
