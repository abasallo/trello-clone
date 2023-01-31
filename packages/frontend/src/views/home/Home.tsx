import React, {useState} from 'react'

import {Container, Contents, CopyrightBox} from './Home.styled.components'

import Copyright from '../../components/Copyright/Copyright'
import AppBar from '../../components/AppBar/AppBar'
import Boards from '../../components/Boards/Boards'

import {useAppSelector} from '../../redux/hooks'

const Home = () => {
    const state = useAppSelector(state => state)
    const [user] = useState(state.user)

    return (
        <>
            <Container>
                <AppBar user={user}/>
                <Contents>
                    <Boards/>
                </Contents>
                <CopyrightBox mt={8}>
                    <Copyright/>
                </CopyrightBox>
            </Container>
        </>
    )
}

export default Home
