
import React from 'react'
import { TodoItem } from "./TodoItem";
export const Todos = (props) => {

   
    return (
        <div className="container"  >
           <h3 className="my-3" style={{textAlign: "center",color:"red"}} >Todos List</h3>
         {props.todos.length===0?
         (<h3 style={{
             color:'brown',
             textAlign:"center",
         }}>No ToDos to Display</h3>):
        props.todos.map((todo) =>{
            return(
                
             <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
             
         ) } )
        }
        </div>
    )
}
