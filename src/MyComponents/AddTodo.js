
import React, { useState } from 'react';

export const AddTodo = ({addTodo}) => {

    const myStyle = {
    
        color: "black",
        backgroundColor: "",
        padding: "10px",
        fontFamily: "Arial",
        width:"50%",
        minWidth:"400px",
        boxSizing: "border-box",
      
 
    
    }
       

    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
   
    const submit = (e)=>{
        e.preventDefault();//page will not load
        if(!title || !desc){
            alert("Title or Description Not Defined");
        }
        else{
        addTodo(title,desc);
        setTitle("");
        setDesc("");
        
        }

    }
    return (
        <div className="container my-3" style={myStyle}>
            <h3 style={{textAlign: "center",color:"red"}}>Add New Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3" >
                    
                    <input type="text" size="10" style={{ borderRadius: "8px",border: "2px solid lightblue"}} placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)}
                     className="form-control" id="title"  />
                   
                </div>
                <div className="mb-3">
                   
                    <textarea type="text" style={{ borderRadius: "8px",border: "2px solid lightblue"}} placeholder="Description"  value={desc}  onChange={(e)=>setDesc(e.target.value)}
                    className="form-control" id="desc" />
                </div>
              
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
       
        </div>
    )
}
