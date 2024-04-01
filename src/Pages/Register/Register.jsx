import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import regImg from "../../assets/others/authentication2.png";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        updateProfile(createdUser, {
          displayName: name,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleCreateUser} className="card-body">
              <h1 className="text-5xl font-bold text-center lg:text-left">
                Login now!
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
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
              </div>

              <div className="form-control ">
                <button className="btn  btn-primary">Register</button>
              </div>
              <p className=" font-bold text-2xl">
                <small>
                  Have a Account?
                  <Link className="text-[#D1A054]" to="/login">
                    Please Login hare!!
                  </Link>
                </small>
              </p>
            </form>
          </div>
          <div className="sm:hidden lg:block">
            <img src={regImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;