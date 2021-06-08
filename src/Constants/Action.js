import {ADD_TASK, DELETE_TASK, DONE_TASK,NOTDONE_TASK,COMPLETED_TASK, EDIT_TASK} from './ActionTypes'

export function Add_task(payload){
    return {type:ADD_TASK,payload}
}
export function Done_task(payload){
    return{type:DONE_TASK,payload}
}

export function NotDone_task(payload){
    return{type:NOTDONE_TASK,payload}
}

export function Delete_task(payload){
    return {type:DELETE_TASK,payload}
}

export function Completed_task(payload){
    return {type:COMPLETED_TASK,payload}
}

export function Edit_task(payload){
    return{type:EDIT_TASK,payload}
}