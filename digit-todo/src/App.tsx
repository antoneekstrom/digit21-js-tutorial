import React, { useState } from 'react'

type Todo = {
  name: string,
  isDone: boolean
}

type ListItemProps = Todo & {
  setTodo: (todo: Todo) => void
}

type TodoFilter = 'all' | 'done' | 'notdone'

const FILTERS: TodoFilter[] = ['all', 'done', 'notdone']

function App() {
  const [todoInputValue, setTodoInputValue] = useState('')
  const [todos, setTodos] = useState([makeTodo('todo 1', false), makeTodo('todo 2', true)])
  const [filterIndex, setFilterIndex] = useState<number>(0);
  const filter = FILTERS[filterIndex]

  return (
    <div>
      <h1>To-Do ✔✔👌💯🥳🥳</h1>
      <form onSubmit={onSubmitTodo}>
        <input onChange={onInputChange} value={todoInputValue} />
      </form>
      <p>{todoInputValue}</p>
      <button onClick={() => setFilterIndex(index => (index + 1) % FILTERS.length)}>filter: {filter}</button>

      <ul>
        {todos.map((todo, i) => shouldShow(todo) && (
          <ListItem {...todo} setTodo={(todo) => setTodo(i, todo)} key={todo.name + i} />
        )
        )}
      </ul>
    </div>
  )

  function shouldShow(todo: Todo) {
    switch (filter) {
      default:
      case 'all': {
        return true;
      }
      case 'done': {
        return todo.isDone;
      }
      case 'notdone': {
        return !todo.isDone;
      }
    }
  }

  function setTodo(index: number, newState: Todo) {
    setTodos(
      todos => todos.map((todo, i) => i == index ? newState : todo)
    )
  }

  function ListItem(props: ListItemProps) {
    return (
      <li>
        <span>{props.name} {props.isDone ? '✔' : '✖'}</span>
        <button onClick={onClick}>{!props.isDone ? 'set done' : 'set not done'}</button>
      </li>
    )

    function onClick() {
      props.setTodo({
        name: props.name,
        isDone: !props.isDone
      })
    }
  }
  
  function makeTodo(name: string, isDone: boolean) {
    return { name, isDone }
  }

  function onSubmitTodo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTodoInputValue('');
    setTodos(todos => [...todos, makeTodo(todoInputValue, false)]);
  }

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTodoInputValue(e.target.value);
  }
}

export default App
