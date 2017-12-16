import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import getComponents from '../../models/getComponents'
import getGuides from '../../models/getGuides'
import Container from '../Container'
import Content from '../Content'
import Header from '../Header'
import Layout from '../Layout'
import Routes from '../Routes'
import Sidebar from '../Sidebar'

const App = ({ content }) => {
  const components = getComponents(content)
  const guides = getGuides(content)
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Container>
          <Sidebar
            components={components}
            guides={guides}
          />
          <Content>
            <Routes
              components={components}
              guides={guides}
            />
          </Content>
        </Container>
      </Layout>
    </BrowserRouter>
  )
}

export default App
