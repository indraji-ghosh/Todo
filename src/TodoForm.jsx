import { useState } from "react";
import {useTodo} from './context'
export default function TodoForm() {
    const [todo, setTodo] = useState('')
    const {addTodo} = useTodo()
    const add =(e)=>{
        e.preventDefault()

        if(!todo)return
        
        addTodo({todo,completed:false})
        setTodo('')
    }

    return(
        <form>
            <input type='text' value={todo} onChange={(e)=>setTodo(e.target.value)} />
            <button>add</button>
            </form>
    )
}