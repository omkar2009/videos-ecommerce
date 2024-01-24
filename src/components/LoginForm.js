import React, { useState } from 'react';
import './LoginForm.css';
import Logo from "./Assets/truad_logo.png";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login submitted with:', { username, password });
    setUsername('');
    setPassword('');
  };

  return (
    <div className='outer'>
    <div className="login-container">
    <div className="logo-container">
      <img src={Logo} alt = "TruAD_Logo"></img>
    </div>
      <h2>Welcome to TruAD</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
};

export default LoginForm;
