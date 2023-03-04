import { BsBackspaceFill } from 'react-icons/bs';
import '../stylesheets/RowTrash.css'


function RowTrash ({task, trashTask, taskTrash, addTask}) {
    return(
        <tr>
            <td className='RowTrashC'>
                <p className='RowTrashP'>{task.name}</p>
            </td>
            <td>
                <button className='RowTrashButton' onClick={() => addTask(task)}> 
                    <BsBackspaceFill className='iconRecovery'/>
                    <p>Recovery</p>
                </button>
            </td>
        </tr>
    )
}
export default RowTrash;