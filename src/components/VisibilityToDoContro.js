import { BsFillTrashFill, BsFillEyeFill, BsFillEyeSlashFill} from 'react-icons/bs';
import '../stylesheets/VisibilityToDoControl.css';

function VisibilityToDoControl ({setShowCompleted, showCompleted, cleanTask, state}) {
    const handleDelete = () => {
        if(window.confirm('Esta seguro que desea eliminar')){
            cleanTask()
        }
    }
    return (
        <div className='ToDoVisibilitycontainer'>
            <div className='showTaskCkeckbox'>
                {/*<input className='ToDoRowInput' type= 'checkbox'checked={showCompleted} onChange={function(e){setShowCompleted(!showCompleted); state()}} />*/}
                {
                    showCompleted ?
                        <button className='VisibilityEyeControl' onClick={function(e){setShowCompleted(!showCompleted); state()}}><BsFillEyeSlashFill /></button>
                        :
                        <button className='VisibilityEyeControl' onClick={function(e){setShowCompleted(!showCompleted); state()}}><BsFillEyeFill /></button>
                    
                }
                <p className='ToDoVisibilitytext'> Show completed tasks
                </p>
            </div>
            <div className='showTaskCkeckbox'>
                <button className='ToDoVisibilitybutton' onClick={handleDelete}>
                    <BsFillTrashFill className='ToDoRowTrashCan'/>
                </button>
                <p className='ToDoVisibilitytext'>
                    Delete all completed tasks
                </p>
            </div>
        </div>
    )
}
export default VisibilityToDoControl;