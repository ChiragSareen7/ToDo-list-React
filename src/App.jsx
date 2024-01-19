import { Component, useState } from 'react'
import './App.css'
import Display from './Components/Display.jsx'


class App extends Component{

  constructor(){
    super()
    this.state={
      todo:[],
      TodoItems:{
        key:"",
        description:"",
      }

    }
  }
  handleInput=(e)=>{
    this.setState({
      TodoItems:{
        key: Date.now(),
        description: e.target.value
      }
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    const newItem=this.state.TodoItems;
      if( newItem.description !==" "){
     const item=[...this.state.todo,newItem]
     this.setState({
      todo:item,
      TodoItems:{key:"",description:""}
     })
      }
    
  }
  handleDelete=(key)=>{
    const filteredItems=this.state.todo.filter(currItem=>
      currItem.key!==key);
      this.setState({
        todo:filteredItems
      })
  }

handleUpdate=(newDescription,key)=>{
  const listOfItems=this.state.todo;

  listOfItems.map(currItem=>{
    if(currItem.key===key){
      currItem.description=newDescription;
    }
    // return currItem;
  })
  this.setState({
    todo:listOfItems
  })
}

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <h2>ToDo-List</h2>
        <input type="text" placeholder='Enter Your task' onChange={this.handleInput} value={this.state.TodoItems.description} />
        <button type='submit'>Add</button>
        </form>
        
        <p>{this.state.TodoItems.description}</p>
        <Display TodoItems={this.state.todo} handleUpdate={this.handleUpdate} handleDelete={this.handleDelete} />
      </div>
    )
  }
}


export default App