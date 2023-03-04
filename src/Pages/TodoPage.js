import React, { useState, useEffect, useRef } from 'react';
import Formulary from '../components/Formulary'
import TodoTable from '../components/TodoTable';
import ToDoTrash from '../components/ToDoTrash';
import VisibilityToDoControl from '../components/VisibilityToDoContro';
import '../stylesheets/ToDoPage.css';
import { v4 as uuid } from 'uuid';

function TodoPage () {

  
  const [taskItem, setTaskItems] = useState([])
  const [taskTrash, setTaskTrash] = useState([])
  const [showCompleted, setShowCompleted] = useState(localStorage.getItem('saveShowToDo') === 'true')

  function createTask(taskName) {
    if (!taskItem.find(task => task.name == taskName)) {
      setTaskItems([...taskItem, {name: taskName, done: false, id:`todo-${taskName}-${uuid()} `, priority: 3}])   
    }
  }

  function addTask(tasks){
    setTaskItems([...taskItem, {name: tasks.name, done: tasks.done, id:tasks.id, priority: tasks.priority}])
    setTaskTrash ( taskTrash.filter(task => task.id != tasks.id))
  }

  function trashTask(tasks){
    if(taskTrash.length < 10){
      if (taskItem.find(task => task.name == tasks.name)) {
        setTaskTrash([...taskTrash, {name: tasks.name, done: tasks.done, id:tasks.id, priority: tasks.priority}])   
      }
    }else{
      taskTrash.shift();
      setTaskTrash([...taskTrash, {name: tasks.name, done: tasks.done, id:tasks.id, priority: tasks.priority}])
    }
  }

  function deleteAllTrashTask(){
    setTaskTrash([])
  }

  useEffect(() => {
    let data = localStorage.getItem('trash')
    if (data){
      setTaskTrash(JSON.parse(data))
    }
  }, [ ])

  useEffect(() => {
    localStorage.setItem('trash', JSON.stringify(taskTrash))
  }, [taskTrash])

  const toggleTask = task => {
    setTaskItems(
      taskItem.map(t => (t.name == task.name ) ? {...t, done: !t.done} : t),
    )
  }

  const indexToggle = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const toggleTaskPriority = (task, typePriority )=> {
    setTaskItems(
      taskItem.map(t => (t.id == task.id) ? {...t, priority: typePriority} : t)
    )
  }

  useEffect(() => {
    let data = localStorage.getItem('task')
    if (data){
      setTaskItems(JSON.parse(data))
    }
    let state = localStorage.getItem('saveShowToDo')
    localStorage.setItem('saveShowToDo', state)
  }, [ ])

  const cleanTask = () => {
    //setTaskTrash ([...taskTrash, taskItem.filter(task => task.done)])
    setTaskTrash (taskTrash.concat(taskItem.filter(task => task.done)))
    setTaskItems ( taskItem.filter(task => !task.done))
    //setShowCompleted(false)
  }

  const cleanTaskOne = (taskID, task) => {
    setTaskItems ( taskItem.filter(task => task.id != taskID))
    trashTask(task)
  }

  function saveShowToDo(){
    let state2 = localStorage.getItem('saveShowToDo') == 'true'
    localStorage.setItem('saveShowToDo', (!state2).toString())
  }

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(taskItem))
  }, [taskItem])

  return(
    <div className='ToDoPageContainer'>
      <div>
        <Formulary createTask = {createTask}/>
        <TodoTable name='Tasks' tasks={taskItem} toggleTask = {toggleTask} value = {false} cleanTask={cleanTaskOne} status={true} priority={toggleTaskPriority} indexToggle={indexToggle} setTaskItems={setTaskItems}/>

        <VisibilityToDoControl setShowCompleted={setShowCompleted} showCompleted={showCompleted} cleanTask={cleanTask} state={saveShowToDo}/>

        {
          showCompleted === true && (
            <TodoTable name='Completed Tasks' tasks={taskItem} toggleTask = {toggleTask} value = {showCompleted} cleanTask={cleanTaskOne} status={false}/>
          )
        }
      </div>
      <div>
        <ToDoTrash tasks={taskItem} trashTask={trashTask} taskTrash={taskTrash} addTask={addTask} deleteAllTrashTask={deleteAllTrashTask}/>
      </div>
    </div>
  )
}

export default TodoPage;