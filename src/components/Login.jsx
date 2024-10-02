import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../sass/composent/Login.scss';

function Login({ handleLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'admin') {
            handleLogin();
            navigate('/projects');
        } else {
            alert('Invalid credentials');
        }
    };

    const handleForgotPassword = (e) => {
        e.preventDefault();
        alert('Non ! ça va les alerter ! Il va falloir trouver le mot de passe du PDG');
    }

    return (
        <div className='loginPage'>
            <div className='loginPage__container container'>

                <div className='loginPage__wrapper'>

                    <h2>Extranet Access</h2>

                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Login:</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit">Submit</button>
                    </form>

                    <a href="#" onClick={handleForgotPassword}>forget password</a>

                </div>

            </div>

        </div>
    );
}

export default Login;