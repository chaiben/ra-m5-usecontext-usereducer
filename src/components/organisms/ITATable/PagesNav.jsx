import React, { useContext } from 'react'
import { TableContext } from './store/context'
import { Actions } from './store/reducer'
import { ButtonStyled } from './styles'

function PagesNav() {
  const { state, dispatch } = useContext(TableContext)
  const { pages, currentPage } = state

  const isFirstPage = currentPage <= 1
  const isLastPage = currentPage >= pages.length

  return (
    <>
      <ButtonStyled
        type="button"
        disabled={!isFirstPage ? '' : 'disabled'}
        onClick={() => dispatch({ type: Actions.PREV_PAGE })}
      >
        &lt;
      </ButtonStyled>
      <strong>
        Pagina {currentPage} de {pages.length === 0 ? 1 : pages.length}
      </strong>
      <ButtonStyled
        type="button"
        disabled={!isLastPage ? '' : 'disabled'}
        onClick={() => dispatch({ type: Actions.NEXT_PAGE })}
      >
        &gt;
      </ButtonStyled>
    </>
  )
}

export default PagesNav
