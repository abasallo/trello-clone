import React, { useEffect, useState } from 'react'

import { Container, Contents, CopyrightBox } from './Home.styled.components'

import Copyright from '../../components/Copyright/Copyright'
import AppBar from '../../components/AppBar/AppBar'
import Boards from '../../components/Boards/Boards'

import { getUser } from '../../services/User'

const defaultUser = {
  names: 'Álvaro',
  surnames: 'Basallo Martínez',
  email: 'alvaro@basallo.es'
}

const initialBoard = [
  {
    id: 1,
    name: 'Board 1'
  },
  {
    id: 2,
    name: 'Board 2'
  },
  {
    id: 3,
    name: 'Board 3'
  },
  {
    id: 4,
    name: 'Board 4'
  },
  {
    id: 5,
    name: 'Board 5'
  },
  {
    id: 6,
    name: 'Board 6'
  }
]

const Home = () => {
  const [user, setUser] = useState(defaultUser)
  const [boards] = useState(initialBoard)

  useEffect(() => {
    const fetchData = async () => {
      const user = await getUser('user@host.tld')
      if (user) setUser(user)
    }
    fetchData().catch(console.error)
  })

  return (
    <>
      <Container>
        <AppBar user={user} />
        <Contents>
          <Boards boards={boards} />
        </Contents>
        <CopyrightBox mt={8}>
          <Copyright />
        </CopyrightBox>
      </Container>
    </>
  )
}

export default Home
