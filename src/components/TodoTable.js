import TaskRow from "./TaskRow";
import '../stylesheets/ToDoTable.css'
import '../stylesheets/TaskRow.css'
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd"
import { BsFillTrashFill } from 'react-icons/bs';

function TodoTable ({name, tasks, toggleTask, value, cleanTask, status, priority, indexToggle, setTaskItems}) {

  {/*const taskTableRows = (doneValue, droppableProvided) => {
    return(
      tasks
      .filter(task=>task.done === doneValue)
      .map((task, index) => (
          <TaskRow task = {task} key={task.name} toggleTask = {toggleTask} cleanTask={cleanTask} status={status} priority={priority}droppableProvided={droppableProvided} index={index}/>
      ))
    )
  }*/}

  return(
    <DragDropContext onDragEnd = {(result) => {
      const {source, destination} = result; 
      if (!destination) {
        return;
      }
      if (
        source.index === destination.index && 
        source.droppableId === destination.droppableId
        ){
        return;
      }

      setTaskItems((prevTasks)=>indexToggle(prevTasks, source.index, destination.index))
      }}>

      <table className='ToDoTableContainer'>
          <thead>
            <tr>
                <th className='ToDoNameTable'>{name}</th>
            </tr>
          </thead>
            <Droppable droppableId={"tasks"}>
              {(droppableProvided) => (<tbody {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}>
                {
                    //taskTableRows(value, droppableProvided)
                    tasks
                    .filter(task=>task.done == value)
                    .map((task, index) => (
                      <TaskRow task = {task} key={task.id} toggleTask = {toggleTask} cleanTask={cleanTask} status={status} priority={priority}droppableProvided={droppableProvided} index={index}/>
                    ))
                }
                {droppableProvided.placeholder}
              </tbody>)}
            </Droppable>
      </table>
    </DragDropContext>
  )
}

export default TodoTable;