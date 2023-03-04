import '../stylesheets/TaskRow.css'
import { BsFillTrashFill } from 'react-icons/bs';
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd"

function TaskRow({ task, toggleTask, cleanTask, status, priority, droppableProvided, index}) {

    const handleDelete = () => {
        cleanTask(task.id, task)
    }

    const handleChange = (e) => {
        priority(task, e.target.value)
    };

    return(
        <tr className='ToDoRowContainer'>
            {task.done ? 
            <td className={(task.priority==1 ? 'ToDoRow ToDoRowCompleted ToDoRowRed':  (task.priority==2 ? 'ToDoRow ToDoRowCompleted ToDoRowYell' : 'ToDoRow ToDoRowCompleted'))} onClick={() => toggleTask(task)}>
                {task.name}
            </td>
            :
            <Draggable key={task.id} draggableId = {task.id} index={index}>
                {(draggableProvided) => <td className={status ? (task.priority==1 ? 'ToDoRow ToDoRowRed':  (task.priority==2 ? 'ToDoRow ToDoRowYell' : 'ToDoRow')): 'ToDoRowCompleted'} onClick={() => toggleTask(task)} {...draggableProvided.draggableProps} ref ={draggableProvided.innerRef}>
                    {task.name}
                    <p {...draggableProvided.dragHandleProps}>|||</p>
                </td>
                }
            </Draggable>
            }
            <td className='ToDoControlPanel'>
                <input 
                    type='checkbox'
                    checked={task.done}
                    onChange={() => toggleTask(task)}
                    className='ToDoRowInput'
                />

                {
                    status ? 

                        <select className='selectPriority' required onChange={handleChange} value={task.priority == 3 ? '3' : (task.priority == 2 ? '2' : '1')}>

                            <option value="3">🟢</option>
                            <option value="2">🟡</option>
                            <option value="1">🔴</option>

                        </select> : ''
                    
                }
                
                <button className='ToDoRowButton' onClick={handleDelete}>
                    <BsFillTrashFill className='ToDoRowTrashCan'/>
                </button>
            </td>
        </tr>
    )
}

export default TaskRow;