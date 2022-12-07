import React, { useState } from 'react'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import TabPanel from '../TabPanel/TabPanel'
import CellMaps from '../CellMaps/CellMaps'
import Copyright from '../Copyright/Copyright'

import { Container, CopyrightBox } from './TabBar.styled.components'

const TabBar = (props) => {
  const [currentTab, setCurrentTab] = useState(0)

  const handleChange = (event, value) => setCurrentTab(value)

  return (
    <Container>
      <Tabs value={currentTab} onChange={handleChange} aria-label="simple tabs example">
        <Tab label="Home" id={'simple-tab-0'} aria-controls={'simple-tabpanel-0'} />
        <Tab label="CellMaps with Google Maps" id={'simple-tab-1'} aria-controls={'simple-tabpanel-1'} />
        <Tab label="Chat Bot" id={'simple-tab-2'} aria-controls={'simple-tabpanel-2'} />
        <Tab label="DB Connection Test" id={'simple-tab-3'} aria-controls={'simple-tabpanel-3'} />
      </Tabs>

      <TabPanel value={currentTab} index={0}></TabPanel>

      <TabPanel value={currentTab} index={1}>
        <CellMaps></CellMaps>
      </TabPanel>

      <TabPanel value={currentTab} index={2} />

      <TabPanel value={currentTab} index={3}>
        <h1>Names</h1>
        <p>{props.user.names}</p>
        <h1>Surnames</h1>
        <p>{props.user.surnames}</p>
        <h1>Email</h1>
        <p>{props.user.email}</p>
      </TabPanel>

      <CopyrightBox mt={8}>
        <Copyright />
      </CopyrightBox>
    </Container>
  )
}

export default TabBar
