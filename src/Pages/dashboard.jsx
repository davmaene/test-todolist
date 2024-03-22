import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteTask, logout } from '../actions/taskActions';
import { Navigate as Redirect } from 'react-router-dom';

const TaskList = ({ tasks, deleteTask, logout, isAuthenticated }) => {
    const [redirectToTasks,] = useState(true)

    if (!isAuthenticated) {
        return <Redirect to="/app/auth" />;
    }

    return (
        <div className='d-flex justify-content-center w-100'>
            <div className="col-lg-8">
                <div>
                    <h1 className='text-center'>Liste des tâches</h1>
                    <p className='text-center'>La liste des toutes les tâches</p>
                </div>
                <div className="w-100 d-flex justify-content-center">
                    <button className="btn btn-primary align-self-center" onClick={(e) => {
                        e.preventDefault()
                        window.location.href = "#/app/add"
                    }}>
                        Ajouter une tâche
                    </button>
                    <button className="btn btn-danger align-self-center" onClick={(e) => {
                        e.preventDefault()
                        logout()
                    }}>
                        Deconnexion
                    </button>
                </div>
                <hr />
                <div className="w-100">
                    {Array.from(tasks).length > 0 ? (
                        <>
                            <ul className="list-group list-group-flush ">
                                {tasks.map(task => (
                                    <li className="list-group-item d-flex justify-content-between align-items-start" key={task.id}>
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">{task.date}</div>
                                            {task.name}
                                        </div>
                                        <>
                                            <button className='btn btn-danger' onClick={() => deleteTask(task.id)}>Supprimer</button>
                                        </>
                                    </li>
                                ))}
                            </ul>
                        </>
                    ) : <>
                        <div className="w-100 p-2">
                            <h5 className='text-center'>La liste est vide</h5>
                        </div>
                    </>
                    }
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    tasks: state.tasks,
    isAuthenticated: state.isAuthenticated
});

export default connect(mapStateToProps, { deleteTask, logout })(TaskList);