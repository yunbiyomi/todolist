import { createContext, useContext, useReducer, useRef } from "react";

const initialTodos = [
  {
    id: 1,
    text: '운동하기',
    done: true
  },
  {
    id: 2,
    text: '코딩하기',
    done: true
  },
  {
    id: 3,
    text: '독서하기',
    done: false
  },
  {
    id: 4,
    text: '넷플릭스 보기',
    done: false
  }
];

function todoReducer(state, action) {
  switch(action.type){
    case 'CREATE':
      return state.concat(action.todo);
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    case 'TOGGLE':
      return state.map(todo => 
        todo.id === action.id 
        ? { ...todo, done: !todo.done} 
        : todo);
    default:
      throw new Error(`action tupe: ${action.type}`)
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({children}){
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext);

  if(!context)
    throw new Error('Cannot find TodoProvider');

  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);

  if(!context)
    throw new Error('Cannot find TodoProvider');

  return context;
}

export function useTodoNextId() {
  const context = useContext(TodoNextIdContext);
  
  if(!context)
    throw new Error('Cannot find TodoProvider');

  return context;
}