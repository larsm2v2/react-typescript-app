import React from 'react'
import {Todo} from "../Model/Model"
import {MdEdit, MdDeleteForever, MdDone } from "react-icons/md";
import "../InputField/InputField.css"
import TodoList from '../TodoList/TodoList';

type Props = {
    todo:Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo = ({todo,todos, setTodos}:Props) => {
    const handleDone = (id: number) => {
        setTodos(todos.map((todo)=>
            todo.id===id?
        {...todo,isDone:!todo.isDone}:todo))
    }

  return (
    <form className="todos__single">
        {
            todo.isDone ? (
                <s className="todos__single--text">
                {todo.todo}
                </s>
            ):(
                <span className="todos__single--text">
                {todo.todo}
                </span>
            )
        }
        <div>
            <span className="icon">
                <MdEdit/>
            </span>
            <span className="icon">
                <MdDeleteForever/>
            </span>
            <span className="icon" onClick={()=> handleDone(todo.id)}>
                <MdDone/>
            </span>
        </div>
    </form>
  )
}

export default SingleTodo