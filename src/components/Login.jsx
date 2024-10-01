import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../sass/composent/Login.scss';

function Login({ handleLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'admin' && password === 'chapichapo') {
            handleLogin();
            navigate('/extranet');
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

                    <h2>Acces à l'Extranet</h2>

                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Identifiant:</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Mot de passe:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit">Connexion</button>
                    </form>

                    <a href="#" onClick={handleForgotPassword}>mot de passe oublié</a>

                </div>

            </div>

        </div>
    );
}

export default Login;