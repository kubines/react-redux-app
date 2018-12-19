import React from 'react'
import { Box, Flex } from 'grid-styled'

import Button from 'ui/Button'
import TextArea from 'ui/TextArea'
import ImportanceRating from 'ui/ImportanceRating'

const initText = 'enter your task'

class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoText: initText,
      maxImportance: 6,
      activeImportance: 1,
    }
    this.onClickAddTodo = this.onClickAddTodo.bind(this)
    this.onChangeTodoText = this.onChangeTodoText.bind(this)
    this.onFocusTodoText = this.onFocusTodoText.bind(this)
    this.onBlurTodoText = this.onBlurTodoText.bind(this)
    this.onChangeImportance = this.onChangeImportance.bind(this)
  }

  onChangeTodoText(e) {
    this.setState({
      todoText: e.target.value
    })
  }
  
  onFocusTodoText() {
    if (this.state.todoText === initText)
      this.setState({
        todoText: ''
      })
  }

  onBlurTodoText() {
    if (this.state.todoText === '')
      this.setState({
        todoText: initText,
      })
  }

  onChangeImportance(i) {
    this.setState({
      activeImportance: i,
    })
  }

  onClickAddTodo() {
    if (this.state.todoText === initText) {
      this.input.focus()
    }
    else
      this.props.onAddTodo(this.state.todoText, this.state.activeImportance, true)
    this.setState({
      todoText: initText,
      activeImportance: 1,
    })
  }

  render() {
    const { todoText, maxImportance, activeImportance } = this.state

    return (
      <Box
        mt='30px'
        width='500px'
        bg='#ffff'
        css={{
          borderRadius: '5px',
        }}
      >
        <TextArea
          inputRef={el => this.input = el}
          onChange={this.onChangeTodoText}
          onFocus={this.onFocusTodoText}
          onBlur={this.onBlurTodoText}
          value={todoText}
        />
        <Flex
          justifyContent='space-between'
          alignItems='center'
          css={{
            width: '100%',
            padding: '10px',
            borderTop: '1px solid #DAD9E2'
          }}
        >
          <ImportanceRating
            maxImportance={maxImportance}
            importance={activeImportance}
            onClick={this.onChangeImportance}
            active
          />
          <Button
            text='add todo'
            small
            onClick={this.onClickAddTodo}
          />
        </Flex>
      </Box>
    )
  }
}

export default AddTodo