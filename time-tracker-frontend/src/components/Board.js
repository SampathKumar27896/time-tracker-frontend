import React from 'react';
import './Board.css';
import { IconContext } from "react-icons";
import {FiPlusSquare} from "react-icons/fi";
const Board = () => {
    return (
        <div className="board">
            <div className="board-status-header">
                <div className="board-heading" id="board-heading-one">
                    <p> To do </p>
                </div>
                <p className="total-tasks-number">23</p>
                <button className="task-add-button">
                    <IconContext.Provider value={{  className: "task-add-icon" }}>
                            <FiPlusSquare />
                    </IconContext.Provider>
                </button>
            </div>
            
                <div className="board-status-header">
                    <div className="board-heading" id="board-heading-one">
                        <p> Inprogress </p>
                    </div>
                    <p className="total-tasks-number">23</p>
                    <button className="task-add-button">
                        <IconContext.Provider value={{  className: "task-add-icon" }}>
                                <FiPlusSquare />
                        </IconContext.Provider>
                    </button>
                </div>
    
            
                <div className="board-status-header">
                    <div className="board-heading" id="board-heading-one">
                        <p> Completed </p>
                    </div>
                    <p className="total-tasks-number">23</p>
                    <button className="task-add-button">
                        <IconContext.Provider value={{  className: "task-add-icon" }}>
                                <FiPlusSquare />
                        </IconContext.Provider>
                    </button>
                </div>
            
            <div className="new-pane">
                <div className="task-card">

                </div>
                <div className="task-card">
                    
                </div>
                <div className="task-card">
                    
                </div>
                <div className="task-card">
                    
                </div>
            </div>
            <div className="inprogress-pane"> 
                <div className="task-card">

                </div>
                <div className="task-card">
                    
                </div>
                <div className="task-card">
                    
                </div>
            </div>
            <div className="completed-pane"> 
                <div className="task-card">

                </div>
                <div className="task-card">
                    
                </div>
                <div className="task-card">
                    
                </div>
                <div className="task-card">
                    
                </div>
            </div>
        </div>
    )
}
export default Board;