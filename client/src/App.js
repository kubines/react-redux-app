import React from 'react'
import { Flex } from 'grid-styled'
import { BrowserRouter, Route } from 'react-router-dom'

import Enter from 'components/Enter/Enter'
import Main from 'components/Main/Main'

const App = () => {
  return (
    <BrowserRouter>
      <Flex
        flexDirection='column'
        css={{
          height: '100%',
          background: 'linear-gradient(245.58deg, #00CA9D -13.97%, #AEEFAA 73.92%, #FBFFC1 114.02%)',
        }}
      >
        <Route path='/' exact component={Enter} />
        <Route path='/main' component={Main} />
      </Flex>
    </BrowserRouter>
  )
}

export default App