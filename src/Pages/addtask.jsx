import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/taskActions';

const TaskForm = ({ addTask, authError }) => {
    const [taskName, setTaskName] = useState('');
    const [taskDate, setTaskDate] = useState('');

    const handleInputChange = (e) => {
        setTaskName(e.target.value);
    };

    const handleInputChangeDate = (e) => {
        setTaskDate(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName.trim() !== '' && taskDate.trim() !== '') {
            addTask({ id: Date.now(), name: taskName, date: taskDate });
            setTaskName('');
        }
    };

    return (
        <div className='d-flex justify-content-center w-100'>
            <div className="col-lg-8">
                <div>
                    <h1 className='text-center'>Ajouter une tâche</h1>
                    <p className='text-center'>Formulaire d'ajout d'une tâche</p>
                </div>
                <div className="w-100 d-flex justify-content-center">
                    <button className="btn btn-primary align-self-center" onClick={(e) => {
                        e.preventDefault()
                        window.location.href = "#/app/liste"
                    }}>
                        Liste des tâches
                    </button>
                </div>
                <hr />
                <div className="w-100 d-flex justify-content-center">
                    <form onSubmit={handleSubmit} className='col-lg-4 mt-5'>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Nom de la tâche</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Date d'execution</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" required onChange={handleInputChangeDate} />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Ajouter</button>
                        <div className="mb-3 form-check mt-4">
                            <span className="form-check-label text-danger" htmlFor="exampleCheck1">
                                {authError && <p>{authError}</p>}
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    authError: state.authError
});

export default connect(mapStateToProps, { addTask })(TaskForm);