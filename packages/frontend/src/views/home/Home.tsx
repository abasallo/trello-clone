import React from 'react'

import { Container, Contents, CopyrightBox } from './Home.styled.components'

import Copyright from '../../components/Copyright/Copyright'
import AppBar from '../../components/AppBar/AppBar'
import Boards from '../../components/Boards/Boards'

const Home = () => (
  <>
    <Container>
      <AppBar />
      <Contents>
        <Boards />
      </Contents>
      <CopyrightBox mt={8}>
        <Copyright />
      </CopyrightBox>
    </Container>
  </>
)

export default Home
