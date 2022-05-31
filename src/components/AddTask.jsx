import React, {useState} from 'react'
import Button from './button';
import './AddTask.css'

const AddTask = ({handleTaskAdd}) => {

    const [inputData, setInputData] = useState('');

    const handleInputChanger = (e) =>{
        setInputData(e.target.value)
    };

    const handleTaskAddclick = () =>{
        handleTaskAdd(inputData)
        setInputData("")
    }

    return ( 
        <div className='add-task-container'>
            <input 
            onChange={handleInputChanger}
            value={inputData}
            className='add-task-input' 
            type="text"
             />
            <div className="add-task-button-container">
                <Button onClick={handleTaskAddclick}>Adicionar</Button>
            </div>
        </div>
     );
}
 
export default AddTask;