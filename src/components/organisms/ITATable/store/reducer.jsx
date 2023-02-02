import { createNextState } from '@reduxjs/toolkit'
import { chunk } from 'lodash'

export const initialState = {
  data: [],
  columns: [],
  pages: [],
  currentPage: 1,
  itemsPerPage: 10,
  orderBy: null,
  orderAsc: true,
}

export const Actions = {
  SET_DATA: 'SET_DATA',
  SET_COLUMNS: 'SET_COLUMNS',
  NEXT_PAGE: 'NEXT_PAGE',
  PREV_PAGE: 'PREV_PAGE',
  SET_ITEMS_PER_PAGE: 'SET_ITEMS_PER_PAGE',
  SET_ORDER_BY: 'SET_ORDER_BY',
}

// eslint-disable-next-line default-param-last
export const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_DATA:
      return createNextState(state, (draft) => {
        draft.data = [...action.payload].sort((a, b) => {
          if (draft.orderAsc)
            return a[draft.orderBy] > b[draft.orderBy] ? 1 : -1
          return a[draft.orderBy] < b[draft.orderBy] ? 1 : -1
        })
        draft.pages = chunk(draft.data, state.itemsPerPage)
        draft.currentPage = 1
      })

    case Actions.SET_COLUMNS:
      return createNextState(state, (draft) => {
        draft.columns = action.payload
      })

    case Actions.NEXT_PAGE:
      return createNextState(state, (draft) => {
        draft.currentPage =
          state.currentPage < state.pages.length
            ? state.currentPage + 1
            : state.currentPage
      })

    case Actions.PREV_PAGE:
      return createNextState(state, (draft) => {
        draft.currentPage =
          state.currentPage > 1 ? state.currentPage - 1 : state.currentPage
      })

    case Actions.SET_ITEMS_PER_PAGE:
      return createNextState(state, (draft) => {
        draft.itemsPerPage = action.payload
          ? action.payload
          : initialState.itemsPerPage
        draft.pages = chunk(state.data, action.payload)
        draft.currentPage = 1
      })

    case Actions.SET_ORDER_BY:
      return createNextState(state, (draft) => {
        draft.orderAsc =
          state.orderBy !== action.payload ? true : !state.orderAsc
        draft.orderBy = action.payload
        draft.data.sort((a, b) => {
          if (draft.orderAsc)
            return a[action.payload] > b[action.payload] ? 1 : -1
          return a[action.payload] < b[action.payload] ? 1 : -1
        })
        draft.pages = chunk(draft.data, state.itemsPerPage)
      })

    default:
      return state
  }
}
