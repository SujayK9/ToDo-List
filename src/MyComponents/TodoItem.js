import React, {useRef} from 'react'



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

const checked={
  backgroundColor:"red",
  color:"white",
}

const refNode1=useRef(null)
const refNode2=useRef(null)   
  //console.log(handleChange);
  return (
      <>
      
      <div ref={refNode1} style={myStyle}>
     
        <h3 style={{margin: "0px"}}>{todo.title}</h3>
       
        <p>{todo.desc}</p>
        <button className="btn btn-sm " style={bstyle}  onClick={() => { onDelete(todo) }}>Delete</button>
        <div className="form-check" style={{ float:"right"}}>
       
          <input ref={refNode2} className="form-check-input" type="checkbox" onClick={()=>{
            //console.log(refNode2.current.checked)
            refNode2.current.checked?
            refNode1.current.style.backgroundColor="brown"
          :
          refNode1.current.style.backgroundColor="#d02f47"}} value="" />
            <label className="form-check-label"  htmlFor="flexCheckDefault">
              DONE
        </label>
        
        </div>
        </div>
        
        </>
    )
    
   
    }
   
      
  
