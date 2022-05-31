import React, {useState} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import AddTask from './components/AddTask'
import Tasks from './components/tasks'
import Header from './components/header'
import TaskDetails from './components/TaskDetails'
import {v4 as uuidv4} from 'uuid'

const App = () =>{
  
  const [tasks, setTask] = useState([
    {
      id: '1',
      title: 'Estudar programação',
      status: false
    },
    {
      id: '2',
      title: 'Fazer o Almoço',
      status: false
    },
    {
      id: '3',
      title: 'Trabalhar no campo',
      status: false
    },
  ])

  const handleTaskClick = (taskId) =>{
    const newTasks = tasks.map(task =>{
      if( task.id === taskId) return {...task, completed: !task.completed}

      return task

    })

    setTask(newTasks)
  }

  const handleTaskAdd = (tasktitle) =>{
    const newTask = [...tasks, {
      title: tasktitle,
      id: uuidv4(),
      status: false
    }]

    setTask(newTask)
  }

  const Removetask = (taskId) =>{
    const newTasks = tasks.filter(task =>task.id !== taskId)
    setTask(newTasks)

  }

  return (
    <BrowserRouter>
			<div className="container">
				<Header />
        
          <Routes>
            <Route path="/" exact element={
                  <>
                    <AddTask handleTaskAdd={handleTaskAdd} />
                    <Tasks
                      tasks={tasks}
                      handleTaskClick={handleTaskClick}
                      Removetask={Removetask}
                    />
                  </>
                }
              />
              <Route exact path="/:taskTitle"  element={<TaskDetails/>} />
          </Routes>
        
          		
			</div>
      </BrowserRouter>
	);
}

export default App;
