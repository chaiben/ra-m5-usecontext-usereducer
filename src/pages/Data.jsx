import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Body } from '../components/layout'
import { ITATable } from '../components/organisms'
import { getHouses } from '../store/houses.slice'
import { Container } from '../styles'
import { filterBy } from '../helpers'

const columns = [
  {
    id: 'title',
    label: 'Nombre',
    sort: true,
  },
  {
    id: 'price',
    label: 'Precio',
    cell: (row) => (
      <span style={{ color: row.price < 400000 ? 'green' : 'red' }}>
        {row.price}
      </span>
    ),
    sort: true,
  },
  {
    id: 'city',
    label: 'Ciudad',
  },
  {
    id: 'district',
    label: 'Distrito',
  },
  {
    id: 'type',
    label: 'Tipo',
  },
]

function Data() {
  const { reqStatus, houses } = useSelector((state) => state.houses)
  const { isError, isSuccess, isLoading } = reqStatus
  const { byId, allIds, selectedCity, selectedType } = houses
  const dispatch = useDispatch()

  const data = allIds
    .filter((id) => filterBy(byId[id], selectedCity, selectedType))
    .map((id) => byId[id])

  useEffect(() => {
    dispatch(getHouses(-1))
  }, [dispatch])
  return (
    <Body>
      <Container style={{ marginTop: '2rem' }}>
        {isError && <div>Error...</div>}
        {isLoading && <div>Loading...</div>}
        {isSuccess && <ITATable columns={columns} data={data} />}
      </Container>
    </Body>
  )
}

export default Data
