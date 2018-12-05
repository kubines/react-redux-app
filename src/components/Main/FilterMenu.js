import React from 'react'
import { Flex } from 'grid-styled'

import { Link } from 'ui/Link'

const FilterMenu = () => {
  return (
    <Flex
      justifyContent='space-around'
      alignItems='center'
      css={{
        maxWidth: '300px',
        height: '50px',
        margin: '0 auto',
      }}
    >
      <Link
        text='all'
      />
      <Link
        text='filter 1'
      />
      <Link
        text='filter 2'
      />
    </Flex>
  )
}

export default FilterMenu