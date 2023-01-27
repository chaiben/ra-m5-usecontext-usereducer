import React, { useContext } from 'react'
import styled from 'styled-components'
import { TableContext } from './store/context'
import { Actions } from './store/reducer'
import { SelectGroup } from '../../molecules'

const SelectGroupStyled = styled(SelectGroup)`
  padding: 0rem 0.5rem;
  border-radius: 4px;
  margin-right: 1rem;
`

function ItemsPerPage() {
  const { state, dispatch } = useContext(TableContext)
  const { itemsPerPage } = state

  return (
    <SelectGroupStyled
      id="itemsPerPage"
      label="Mostrar"
      value={itemsPerPage.toString()}
      options={['10', '25', '50'].map((items) => ({
        value: items,
        text: items,
      }))}
      onChange={(e) =>
        dispatch({
          type: Actions.SET_ITEMS_PER_PAGE,
          payload: e.target.value,
        })
      }
    />
  )
}

export default ItemsPerPage
