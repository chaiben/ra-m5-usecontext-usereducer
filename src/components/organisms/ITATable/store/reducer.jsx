import { createNextState } from '@reduxjs/toolkit'
import { chunk } from 'lodash'

export const initialState = {
  data: [],
  columns: [],
  pages:[],
  currentPage: 1,
  itemsPerPage: 10
}

export const Actions = {
  SET_DATA: 'SET_DATA',
  SET_COLUMNS: 'SET_COLUMNS',
  NEXT_PAGE: 'NEXT_PAGE',
  PREV_PAGE: 'PREV_PAGE',
}

// eslint-disable-next-line default-param-last
export const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_DATA:
      return createNextState(state, (draft) => {
        draft.data = action.payload
        draft.pages = chunk(action.payload, state.itemsPerPage)
      })

    case Actions.SET_COLUMNS:
      return createNextState(state, (draft) => {
        draft.columns = action.payload
      })

    case Actions.NEXT_PAGE:
      return createNextState(state, (draft) => {
        draft.currentPage = (state.currentPage < state.pages.length) ? state.currentPage + 1 : state.currentPage
      })

    case Actions.PREV_PAGE:
      return createNextState(state, (draft) => {
        draft.currentPage = (state.currentPage > 1) ? state.currentPage - 1 : state.currentPage 
      })

    default:
      return state
  }
}
