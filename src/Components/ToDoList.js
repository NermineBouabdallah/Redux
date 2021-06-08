import React from 'react'
import {useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Add_task, Done_task,NotDone_task,Delete_task,Completed_task,} from '../Constants/Action'
import {Card,Button,Modal} from 'react-bootstrap'
import '../App.css'
import Edit from './Edit'

function ToDoList() {

    const [myInput,setMyInput]=useState("")
    const todos= useSelector(state=> state .todos)
const dispatch=useDispatch()



const [description, setDescription] = useState("");
const handleChange=(e)=>{
    setMyInput(e.target.value)
}




    return (
        <div>
<h1 className="h">ToDo App</h1>
            <input className="I" onChange={handleChange}/>
            <button className="b" onClick={()=>dispatch(Add_task({id:Math.random(),description:myInput, iDone:false}))}>  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 12 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"></path></svg></button>
            {/* <h1> {todos.map(todo=> <h5> {todo.description}</h5>)}</h1> */}

            <div className="buttons">
<button className="don"  onClick={()=>dispatch(Done_task())}> Done </button>
<button className="don" onClick={()=>dispatch(NotDone_task())}> Not Done</button>

</div> 
<div className="ca">

    
            {todos.map(todo => <div className="t"><Card  bg="light" className="text-center2" >
  
  <Card.Body>
  
    
    <Card.Text className="text"  style={{
                textDecoration: todo.isDone
                  ? "line-through"
                  : ""
              }}>

                {/* className={item.isDone? 'done'(class textdecoration):null} */}
     {todo.description}
    </Card.Text>
    <div className="del">
   
 {/* <button onClick={()=>dispatch(Edit_task({id:todo.id,description:"hello"}))}>edit</button> */}




<Button onClick={()=> dispatch(Delete_task(todo.id))} className='Danger2'variant="light"
>    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="faTrash" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg>   </Button>
  
<Button onClick ={()=> dispatch (Completed_task(todo.id))} className='Danger' variant="light"> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="faCheck" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg%22%3E"><path d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"></path></svg></Button>

        <Edit todo={todo}/>
   

</div>


  </Card.Body>

</Card> </div>)}
</div>
 </div>
    )
}

export default ToDoList
