import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import loginImg from "../../assets/others/authentication2.png";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser, setUser } = useContext(AuthContext);
  const captchaRef = useRef();
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
        Swal.fire({
          title: "Goog Job!",
          text: "User Login Successfully",
          icon: "success",
        });
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
      setSuccess("Captcha is matched");
      // captchaRef.current.value = "";
    } else {
      setError("Captcha is wrong!!");
      setDisabled(true);
      captchaRef.current.value = "";
    }
  };
  return (
    <div className="hero min-h-screen bg-img">
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-full max-w-sm ">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-4xl font-bold">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
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
                name="password"
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
                {disabled ? (
                  <span className="label-text text-red-600">{error}</span>
                ) : (
                  <span className="label-text text-green-600">{success}</span>
                )}
              </label>
              <input
                ref={captchaRef}
                type="text"
                placeholder="Input the captcha hare"
                className="input input-bordered"
                required
              />
              <button
                type="button"
                className="btn btn-outline btn-xs mt-2"
                onClick={handleValidateCaptcha}
              >
                Validated
              </button>
            </div>
            <div className="form-control ">
              <button disabled={disabled} className="btn bg-[#D1A054] ">
                Login
              </button>
            </div>
            <p className=" font-bold text-2xl">
              <small>
                New Hare?{" "}
                <Link className="text-[#D1A054]" to="/register">
                  Create a new account
                </Link>{" "}
              </small>
            </p>
          </form>
        </div>
        <div className="text-center sm:hidden lg:block lg:text-left">
          <img src={loginImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
