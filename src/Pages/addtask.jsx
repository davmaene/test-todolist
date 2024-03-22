import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/taskActions';

const TaskForm = ({ addTask }) => {
    const [taskName, setTaskName] = useState('');

    const handleInputChange = (e) => {
        setTaskName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName.trim() !== '') {
            addTask({ id: Date.now(), name: taskName });
            setTaskName('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={taskName} onChange={handleInputChange} />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default connect(null, { addTask })(TaskForm);