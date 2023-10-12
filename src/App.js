import { useReducer, useState } from "react";
import TodoList from "./TodoList";

const ACTION_TYPES = {
  add: 'add',
  delete: 'delete',
  complete: 'complete',
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.add:
      const todo = action.payload.todo;
      const id = Date.now() // id값 고유한 값 가질수 있도록 수정해야함
      const newTodo = {
        id,
        todo,
        isComplete: false,
      };
      return {
        count: state.count + 1,
        todoList: [...state.todoList, newTodo],
      }
    case ACTION_TYPES.delete:
      return {
        count: state.count - 1,
        todoList: state.todoList.filter((todo) => todo.id !== action.payload.id)
      }
    case ACTION_TYPES.complete:
      return {
        count: state.count - 1,
        todoList: state.todoList.map((todo) => {
          if(todo.id === action.payload.id)
            return {...todo, isComplete: !todo.isComplete};
          return todo;
        })
      }
    default:
      return state;
  }
};

const initialState = {
  count: 0,
  todoList: [
  ]
}

function App() {
  const [todo, setTodo] = useState('');
  const [todoInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>Todo List</h1>
      <p>할 일 {todoInfo.count}개 남음</p>
      <input
        type="text"
        placeholder="해야 할 일을 적어주세요." 
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        onClick={() => { 
          dispatch({type: ACTION_TYPES.add, payload:{todo}})
          setTodo('');
        }
        }>추가</button>
      {todoInfo.todoList.map((todo) => {
        return <TodoList 
          key={todo.id} 
          todo={todo.todo} 
          dispatch={dispatch} 
          id={todo.id} 
          isComplete={todo.isComplete}
          ACTION_TYPES={ACTION_TYPES}></TodoList>
      })}
    </>
  );
}
export default App;
