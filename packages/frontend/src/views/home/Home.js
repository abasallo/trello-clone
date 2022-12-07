import React, { useEffect, useState } from 'react'

import { Container, CopyrightBox } from './Home.styled.components'

import Copyright from '../../components/Copyright/Copyright'
import AppBar from '../../components/AppBar/AppBar'

import { getUser } from '../../services/User'

const Home = () => {
  // TODO - Remove hardcoded user - Retrieve from cognito
  const [user, setUser] = useState({
    names: 'Álvaro',
    surnames: 'Basallo Martínez',
    email: 'alvaro@basallo.es'
  })

  useEffect(() => {
    const fetchData = async () => {
      const user = await getUser('user@host.tld')
      if (user) setUser(user)
    }
    fetchData()
  }, [])

  return (
    <React.Fragment>
      <AppBar user={user}></AppBar>

      <Container>
        <CopyrightBox mt={8}>
          <Copyright />
        </CopyrightBox>
      </Container>
    </React.Fragment>
  )
}

export default Home
