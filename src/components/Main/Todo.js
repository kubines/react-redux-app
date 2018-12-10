import React from 'react'
import { Box, Flex } from 'grid-styled'

import Text from 'ui/Text'
import ImportanceRaiting from 'ui/ImportanceRating'
import Button from 'ui/Button'
import TextArea from 'ui/TextArea'

export default class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editMode: false,
      id: props.id,
      text: props.text,
      importance: props.importance,

    }
    this.onEditMode = this.onEditMode.bind(this)
    this.onEditTodo = this.onEditTodo.bind(this)
    this.onChangeImportance = this.onChangeImportance.bind(this)
    this.onChangeTodo = this.onChangeTodo.bind(this)
  }

  onEditMode() {
    this.setState({
      editMode: true,
    })
  }

  onChangeImportance(i) {
    this.setState({
      importance: i,
    })
  }

  onChangeTodo(e) {
    this.setState({
      text: e.target.value
    })
  }

  onEditTodo(id, text, importance) {
    this.setState({
      editMode: false,
    })
    this.props.editTodo(id, text, importance)
  }

  render() {
    const { editMode, id, text, importance } = this.state
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
        {
          this.state.editMode ?
            <TextArea  
              value={text}
              onChange={this.onChangeTodo}
              editMode
              autoFocus={true}
            />
            : 
            <Text 
              text={text} 
            />
        }
        <Flex
          justifyContent='space-between'
          alignItems='center'
          css={{
            marginTop: '8px',
          }}
        >
          <ImportanceRaiting
            maxImportance={6}
            importance={importance}
            onClick={editMode ? this.onChangeImportance : null}
            active={editMode}
          />
          <Flex>
            <Button
              text={editMode ? 'save' : 'edit'}
              small
              onClick={editMode ? () => this.onEditTodo(id, text, importance) : this.onEditMode}
            />
            <Box
              mr='8px'
            />
            <Button
              text='delete'
              onClick={() => this.props.delTodo(this.props.id)}
              small
              red
            />
          </Flex>
        </Flex>
      </Box>
    )
  }
}