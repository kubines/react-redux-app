import React from 'react'
import { Box, Flex } from 'grid-styled'

import { Filters, Sort } from 'actions/actions'

import Button from 'ui/Button'

const Filter = (props) => {
  return (
    <Box>
      <Flex
        justifyContent='space-between'
        alignItems='center'
        css={{
          maxWidth: '250px',
          height: '50px',
        }}
      >
        <Button
          text='active'
          small
          onClick={() => props.onSetFilter(Filters.SHOW_ACTIVE)}
        />
        <Button
          text='all'
          small
          onClick={() => props.onSetFilter(Filters.SHOW_ALL)}
        />
        <Button
          text='completed'
          small
          onClick={() => props.onSetFilter(Filters.SHOW_COMPLETED)}
        />
      </Flex>
      <Flex
        justifyContent='space-between'
        css={{
          width: '330px',
        }}    
      >          
        <Button
          text='importance'
          small
          grey
          onClick={() => props.onSetSort(Sort.SORT_IMPORTANCE)}
        />
        <Button
          text='unimportance'
          small
          grey
          onClick={() => props.onSetSort(Sort.SORT_UNIMPORTANCE)}
        />
        <Button
          text='none'
          small
          grey
          onClick={() => props.onSetSort(Sort.SORT_NONE)}
        />
      </Flex>
    </Box>
  )
}

export default Filter