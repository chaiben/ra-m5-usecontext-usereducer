import React, { useContext } from 'react'
import styled from 'styled-components'
import { TableContext } from './store/context'
import { Actions } from './store/reducer'
import FlexBox from './Flexbox'

const SelectGroupStyled = styled.select`
  padding: 0rem 0.5rem;
  border-radius: 4px;
  margin-right: 0.5rem;
`

function ItemsPerPage() {
  const { state, dispatch } = useContext(TableContext)
  const { itemsPerPage } = state
  const id = 'itemsPerPage'

  return (
    <FlexBox gap="0.5rem" direction="row" justify="flex-end" align="center">
      <label htmlFor={id}>Mostrar:</label>
      <SelectGroupStyled
        id={id}
        name={id}
        label="Mostrar"
        value={itemsPerPage.toString()}
        onChange={(e) =>
          dispatch({
            type: Actions.SET_ITEMS_PER_PAGE,
            payload: e.target.value,
          })
        }
      >
        {['10', '25', '50'].map((items) => (
          <option value={items} key={items}>
            {items}
          </option>
        ))}
      </SelectGroupStyled>
    </FlexBox>
  )
}

export default ItemsPerPage
