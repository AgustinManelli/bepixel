import { BsFillTrashFill } from 'react-icons/bs';
import RowTrash from '../components/RowTrash.js';
import '../stylesheets/ToDoTrash.css'

function ToDoTrash ({tasks, trashTask, taskTrash, addTask, deleteAllTrashTask}) {

  return(
    <table className='Trashcontainer'>
        <tbody>
          <tr>
            <th className='ToDoNameTable'>last deleted tasks</th>
            <td>
              <button className='ToDoRowButton' onClick={() => deleteAllTrashTask()}>
                <BsFillTrashFill className='ToDoRowTrashCan'/>
              </button>
            </td>
          </tr>
            {
                //taskTableRows(value, droppableProvided)
                taskTrash
                .map((task) => (
                  <RowTrash task={task} trashTask={trashTask} taskTrash={task} addTask={addTask} key={task.id}/>
                ))
            }
        </tbody>
    </table>
  )
}

export default ToDoTrash;