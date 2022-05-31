import React from "react";
import Task from "./task";

const tasks = ({ tasks, handleTaskClick, Removetask}) =>{
    return (
        <>
            {tasks.map(task => ( 
            <Task task = {task} handleTaskClick={handleTaskClick} Removetask={Removetask}/>
            ))}
        </>
    )
}

export default tasks