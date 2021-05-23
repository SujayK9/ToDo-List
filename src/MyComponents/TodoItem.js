import React from 'react'



export const TodoItem = ({ todo, onDelete }) => {
  const myStyle = {
    color:"white",
    borderBottom: "2px solid white",
     padding: "10px",
    fontFamily: "Arial",
    backgroundColor:"#d02f47",
     borderRadius: "8px",
    
  }
const bstyle={
  backgroundColor:"darkorange",
  color:"white",
 
}

    
  //console.log(handleChange);
  return (
      <>
      
      <div style={myStyle}>
     
        <h3 style={{margin: "0px"}}>{todo.title}</h3>
       
        <p>{todo.desc}</p>
        <button className="btn btn-sm " style={bstyle}  onClick={() => { onDelete(todo) }}>Delete</button>
        <div className="form-check" style={{ float:"right"}}>
       
          <input className="form-check-input" type="checkbox"  value="" />
            <label className="form-check-label"  htmlFor="flexCheckDefault">
              DONE
        </label>
        
        </div>
        </div>
        
        </>
    )
    
   
    }
   
      
  
