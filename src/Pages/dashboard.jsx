import React from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../actions/taskActions';

const TaskList = ({ tasks, deleteTask }) => {
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
                </div>
                <hr />
                <div className="w-100">
                    {Array.from(tasks).length > 0 ? (
                        <>
                            <ul className="list-group list-group-flush ">
                                {tasks.map(task => (
                                    <li className="list-group-item d-flex justify-content-between align-items-start" key={task.id}>
                                        <div class="ms-2 me-auto">
                                            <div class="fw-bold">{task.date}</div>
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
    tasks: state.tasks
});

export default connect(mapStateToProps, { deleteTask })(TaskList);