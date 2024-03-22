import React from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../actions/taskActions';

const TaskList = ({ tasks, deleteTask }) => {
    return (
        <>
            <div>
                <h1>Liste des tâches</h1>
                <p>La liste des toutes les tâches</p>
            </div>
            <ul>
                {Array.from(tasks).length > 0 ? (
                    <>
                        {tasks.map(task => (
                            <li key={task.id}>
                                {task.name}
                                <button onClick={() => deleteTask(task.id)}>Delete</button>
                            </li>
                        ))}
                    </>
                ) : <>
                    <h5>La liste est vide</h5>
                </>}

            </ul>
        </>
    );
};

const mapStateToProps = (state) => ({
    tasks: state.tasks
});

export default connect(mapStateToProps, { deleteTask })(TaskList);