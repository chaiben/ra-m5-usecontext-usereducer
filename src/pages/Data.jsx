import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Body } from '../components/layout'
import { ITATable } from '../components/organisms'
import { getUsers } from '../store/users.slice'
import { Container } from '../styles'

const columns = [
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'surnames',
    label: 'Apellidos',
  },
  {
    id: 'age',
    label: 'Edad',
    cell: (row) => (
      <span style={{ color: row.age > 50 ? 'green' : 'red' }}>{row.age}</span>
    ),
  },
  {
    id: 'occupation',
    label: 'Ocupacion',
  },
]

function Data() {
  const { reqStatus, users } = useSelector((state) => state.users)
  const { isError, isSuccess, isLoading } = reqStatus
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])
  return (
    <Body>
      <Container style={{ marginTop: '2rem' }}>
        {isError && <div>Error...</div>}
        {isLoading && <div>Loading...</div>}
        {isSuccess && <ITATable columns={columns} data={users.data} />}
      </Container>
    </Body>
  )
}

export default Data
