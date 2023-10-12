import React from 'react'

const TodoList = ({todo, dispatch, id, ACTION_TYPES, isComplete}) => {
  return (
    <div style={{display:"flex", alignItems:"center"}}>
      <p style={{
        cursor:"pointer",
        color: isComplete ? "gray" : "black",
        textDecoration: isComplete ? "line-through" : "none",
        }}
        onClick={() => { dispatch({type:ACTION_TYPES.complete, payload:{id}})}}>{todo}</p>
      <button onClick={() => {
        dispatch({type: ACTION_TYPES.delete, payload:{id}})
      }}>삭제</button>
    </div>
  )
}

export default TodoList;
