// import React from "react";

export default function Display(props){
  const data=props.TodoItems;
  const newList=data.map(currItem =>{
    return(
        <div key={currItem.key}>
            <input type="text" id={currItem.key} value={currItem.description} 
            onChange={(event)=>{
                props.handleUpdate(event.target.value,currItem.key)
            }}></input>
            <button onClick={()=>{props.handleDelete(currItem.key)}}>Delete Item</button>
        </div>
    )
  });
  return(
    <div>
        {newList}
    </div>
  )
}