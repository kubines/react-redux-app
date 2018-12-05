import React from 'react'
import { Box, Flex } from 'grid-styled'

import Text from 'ui/Text'
import ImportanceRaiting from 'ui/ImportanceRating'
import Button from 'ui/Button'

const Todo = (props) => {
  return (
    <Box
      mt='30px'
      p='10px'
      width='500px'
      bg='#ffff'
      css={{
        borderRadius: '5px',
      }}
    >
      <Box
        mt='8px'
      />
      <Text
        text={props.text}
      />
      <Flex
        justifyContent='space-between'
        alignItems='center'
        css={{
          marginTop: '8px',
        }}
      >
        <ImportanceRaiting
          maxImportance={6}
          importance={props.importance}
          onClick={null}
        />
        <Flex>
          <Button
            text='edit'
            small
          />
          <Box
            mr='8px'
          />
          <Button
            text='delete'
            small
          />
        </Flex>
      </Flex>
    </Box>
  )
}

export default Todo