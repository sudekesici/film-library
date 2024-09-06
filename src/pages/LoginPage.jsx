
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/usersSlice';
import "../css/loginpage.css"
import loginLogo from '../img/loginLogo.png';


function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector((state) => state.users.error);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
  };

  return (
    <div class="loginPage">
  <div class="linear"></div>
  <div class="overlay"></div>

  <div class="content">
    <div class="information">
      <div style={{color:"#fff",fontWeight:"500", fontSize:"51px",marginBottom:"10px",width:"auto",height:"auto",fontFamily:""}}>Unlimited movies, series and much more</div>
      <p style={{color:"#ccc", fontSize:"20px",width:"auto",height:"auto"}}>Prices starting at 149.99 TL. Cancel anytime.</p>
    </div>

    <div class="input-container">
      <img src={loginLogo} alt="login logo" />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "30px" }}>
        <h2>Welcome Back!</h2>
        <p>Get login to access your account.</p>
      </div>
      <form className='form' onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  </div>
</div>

  );
}

export default LoginPage;