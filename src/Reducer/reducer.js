
import {ADD_TASK, DONE_TASK, NOTDONE_TASK,DELETE_TASK, COMPLETED_TASK, EDIT_TASK} from '../Constants/ActionTypes'
const InitialState= {todos:[{id:Math.random(),description:"learn react-redux", isDone:false},{id:2, description:"watch a film", isDone:false},{id:3, description:"watch a film", isDone:false}],text :''}
const ToDOReducer=(state=InitialState,action)=>{
    switch(action.type)
    {
        case ADD_TASK:
        return ({...state,todos:[...state.todos,action.payload]})

        case DONE_TASK:
        return ({...state,todos:state.todos.filter(el=>el.isDone)})

        case NOTDONE_TASK:
        return ({...state,todos:state.todos.filter(el=> !el.isDone)})

        case DELETE_TASK:
            return ({...state,todos:state.todos.filter(el=> el.id !==action.payload)})

           /*  case EDIT_TASK:
                return { ...state,text:state.todos[action.payload]
                  
                     
                   
                }*/


            case COMPLETED_TASK:
            
                let newtab=state.todos.map(el=>el.id===action.payload?{...el,isDone:!el.isDone}:el);
                return {...state,todos:newtab} 
                // return ({...state,todos:state.todos.isDone? state.todos.isDone=false:true})
            /*   case EDIT_TASK:
               let newTodos = [...state.todos];
                let index = -1;
                for( let i =0 ;i<newTodos.length ; i++){
                 index++;
                    if(newTodos[i].id == action.payload.id){
                        break;
                    }
                   
                }
                
                if (index != -1){
                 newTodos[index] =action.payload
                 return newTodos;
         
                }
               break; */
               case EDIT_TASK:{
               let newtab =state.todos.map(el=>el.id===action.payload.id?{...el, description:action.payload.description}:el);
               {console.log(action.payload.id)}

               return {...state,todos:newtab} }
                default: return(state)
    }
}
export default ToDOReducer

