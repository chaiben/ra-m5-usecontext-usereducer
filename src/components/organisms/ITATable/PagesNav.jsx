import React, { useContext } from 'react'
import { Button, Icon } from '../../atoms'
import { TableContext } from './store/context'
import { Actions } from './store/reducer'
import { colors } from '../../../styles'

function PagesNav() {
  const { state, dispatch } = useContext(TableContext)
  const { pages, currentPage } = state

  const isFirstPage = currentPage <= 1
  const isLastPage = currentPage >= pages.length

  return (
    <>
      <Button
        shadow="0"
        bgcolor="white"
        color={!isFirstPage ? colors.blue : colors.gray}
        onClick={() => dispatch({ type: Actions.PREV_PAGE })}
      >
        <Icon icon="arrow_back_ios" />
      </Button>
      <strong>
        Pagina {currentPage} de {pages.length === 0 ? 1 : pages.length}
      </strong>
      <Button
        shadow="0"
        bgcolor="white"
        color={!isLastPage ? colors.blue : colors.gray}
        onClick={() => dispatch({ type: Actions.NEXT_PAGE })}
      >
        <Icon icon="arrow_forward_ios" />
      </Button>
    </>
  )
}

export default PagesNav
