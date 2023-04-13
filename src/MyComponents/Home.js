
import { AddTodo } from './AddTodo'
import { Todos } from './Todos'
import React, { useState, useEffect } from 'react';

export const Home = () => {
    let initTodo;
  if(localStorage.getItem("todos")===null)
  {
   initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
    const addTodo = (title,desc) => {
        console.log("I am adding this todo",title, desc)
         let sno;
        if (todos.length===0){
         sno = 0;
        }
        else {
        sno = todos[todos.length-1].sno + 1;
        }
        const myTodo = {
         sno: sno,
         title: title,
         desc: desc,
        }
        setTodos([...todos,myTodo]);
        console.log(myTodo);
       }
       const onDelete = (todo)=>{
        console.log("I am ondelete of todo", todo);
        setTodos(todos.filter((e) => {
         return e!==todo;
        }));
        localStorage.setItem("todos", JSON.stringify(todos));
       }
       const [todos, setTodos] = useState(initTodo);
       useEffect(() => {
        localStorage.setItem("todos" , JSON.stringify(todos));
        },[todos])     
  return (
    <>
    <AddTodo addTodo ={addTodo}/>
    <Todos todos = {todos} onDelete={onDelete}/>

    </>
  )
}
