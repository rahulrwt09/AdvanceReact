import { useEffect, useState } from "react";
import Todoitem from "./Todoitem"

import AddTodo from "./AddTodo";

function Todo(){
    const [todos, setTodos] =useState([]);

    // useEffect(()=>{
    //     getTodo()
    //     .then((res)=>console.log(res.data))
    //     .catch((err)=>console.log(err));

    // }, []);


    return <>
     <AddTodo/>
     <Todoitem/>
     </>
}
export default Todo;