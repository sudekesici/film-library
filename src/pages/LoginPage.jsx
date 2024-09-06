
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/usersSlice';
import "../css/loginpage.css"


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
    <div className="loginPage">
    
        <div className='opacity'> </div>

         <div className="input-container">

          <h2>Welcome Back!</h2>
          <p>Get login to access your account.</p>

         <form className='form'onSubmit={handleSubmit}>
          <input type="text" placeholder="Kullanıcı Adı" value={username} onChange={(e) => setUsername(e.target.value)}/>
          <input type="password" placeholder="Şifre" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit">Giriş Yap</button>
          {error && <p>{error}</p>}
        </form>

      </div>
        
    
    </div>
  );
}

export default LoginPage;