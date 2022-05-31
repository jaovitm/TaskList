import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from './button';
import './TaskDetails.css'

const TaskDetails = () => {
    const params = useParams()
    const history = useNavigate();

    const HandleBackButtonCllick = () =>{
        history("/");
    }


    return ( 
        <>
            <div className="back-button-container">
                <Button onClick={HandleBackButtonCllick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </>
     );
}
 
export default TaskDetails;