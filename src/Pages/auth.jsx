import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/taskActions';

const LoginComponent = ({ onLogin, authError }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(username, password);
    };

    return (
        <div className="w-100 d-flex justify-content-center">
            <form onSubmit={handleSubmit} className='col-lg-4'>
                <div className="w-100">
                    <h1>Authentification</h1>
                    <p>Entrer vos informations ici</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Nom d'utilisateur</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required onChange={handleUsernameChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Mot de passe</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" required onChange={handlePasswordChange} />
                </div>
                <button type="submit" className="btn btn-primary w-100">Connexion</button>
                <div className="mb-3 form-check mt-4">
                    <span className="form-check-label" htmlFor="exampleCheck1">
                        {authError && <p>{authError}</p>}
                    </span>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => ({
    authError: state.authError
});

export default connect(mapStateToProps, { onLogin: login })(LoginComponent);
