import React from 'react'
import { Box, Flex } from 'grid-styled'

import { MainTitle } from 'ui/Title'
import { RouteLink } from 'ui/Link'

export default class Enter extends React.Component {
  constructor() {
    super()
    this.state = {
      show: false,
    }
  }

  componentDidMount() {
    this.setState({
      show: true,
    })
  }
  render() {
    const { show } = this.state

    return (
      <Flex
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        css={{
          minHeight: '100vh',
        }}
      >
        <MainTitle
          text='Welcome to React-Redux-App'
          show={show}
        />
        <Box
          mt='30px'
        />
        <RouteLink
          text='enter'
          to='/main'
          show={show}
        />
      </Flex>
    )
  }
}
