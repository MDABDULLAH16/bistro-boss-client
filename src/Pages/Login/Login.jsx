import React, { useEffect, useRef, useState } from 'react';
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  const captchaRef = useRef()
  const [disabled, setDisabled] = useState(true)
  const [error, setError] = useState('');
  const [success,setSuccess]= useState('')
  useEffect(() => {
     loadCaptchaEnginge(6); 
  }, [])
  const handleLogin = (event) => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
  }
  const handleValidateCaptcha = () => {
const user_captcha_value = captchaRef.current.value
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false)
      setSuccess("Captcha is matched")
    }
    else {
      setError('Captcha is wrong!!')
      setDisabled(true)
    }
  }
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name='email'
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name='password'
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <label className="label">
                  {disabled ?<span className="label-text text-red-600">{ error}</span>
                    :
                  <span className="label-text text-green-600">{ success}</span> }
                  
                </label>
                <input
                  ref={captchaRef}
                  type="text"
                  placeholder="Input the captcha hare"
                  className="input input-bordered"
                  required
                />
                <button className='btn btn-outline btn-xs m-2' onClick={handleValidateCaptcha}>Validated</button>
              </div>
              <div className="form-control mt-6">
                <button disabled={disabled} className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;