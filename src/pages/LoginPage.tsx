import React from 'react';
import "../css/loginpage.css";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth, signOut } from '../Firebase';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

interface LoginFormInputs {
  email: string;
  password: string;
}

function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    const { email, password } = data;

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const user = response.user;
      if (user) {
        toast.success("Giriş Başarılı.");
        setTimeout(() => {
          navigate("/home");
        }, 2000);
      }
    } catch (error) {
      toast.error("Giriş yapılamadı: " + (error as Error).message);
    }
  };

  const registerUser: SubmitHandler<LoginFormInputs> = async (data) => {
    const { email, password } = data;

    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      const user = response.user;
      if (user) {
        toast.success("Kullanıcı oluşturuldu. Lütfen giriş yapın.");
        await signOut(auth);
      }
    } catch (error) {
      toast.error("Kayıt yapılamadı: " + (error as Error).message);
    }
  };

  return (
    <div className="loginPage">
      <ToastContainer />
      <div className="linear"></div>
      <div className="overlay"></div>

      <div className="content">
        <div className="information">
          <div style={{ color: "#fff", fontWeight: "500", fontSize: "51px", marginBottom: "10px", width: "auto", height: "auto", fontFamily: "" }}>
            Unlimited movies, series and much more
          </div>
          <p style={{ color: "#ccc", fontSize: "20px", width: "auto", height: "auto" }}>Prices starting at 149.99 TL. Cancel anytime.</p>
        </div>

        <div className="input-container">

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "30px" }}>
            <h2>Welcome Back!</h2>
            <p>Get login to access your account.</p>
          </div>

          <div className='form-container'>

            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Email"
                {...register('email', {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email"
                  }
                })}
              />
              {errors.email && <p>{errors.email.message}</p>}

              <input
                type="password"
                placeholder="Password"
                {...register('password', {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters"
                  }
                })}
              />
              {errors.password && <p>{errors.password.message}</p>}

              <button type="submit">Giriş Yap</button>
            </form>


            <button type="button" onClick={handleSubmit(registerUser)}>Kaydol</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
