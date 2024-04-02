import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import regImg from "../../assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import "./register.css";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
const Register = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateProfile(loggedUser, {
          displayName: data.name,
          photoURL: data.photoURL,
        });
        setUser(loggedUser);
        Swal.fire({
          title: "Goog Job!",
          text: "User Create Successfully",
          icon: "success",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // console.log(watch("example"));

  // const handleCreateUser = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const name = form.name.value;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   console.log(name, email, password);
  //   createUser(email, password)
  //     .then((result) => {
  //       const createdUser = result.user;
  //       console.log(createdUser);
  //       updateProfile(createdUser, {
  //         displayName: name,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // };
  return (
    <div>
      <div className="hero min-h-screen bg-img ">
        <Helmet>
          <title>Bistro Boss | Sign Up</title>
        </Helmet>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm  ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h1 className="text-4xl font-bold text-center lg:text-left">
                Sign Up!!
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
                {/* {errors.name && (
                  <span className="text-red-600">Input Your Name Please</span>
                )} */}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  {...register("photoURL", { required: true })}
                  type="text"
                  name="photoURL"
                  placeholder="Enter Your Photo URL"
                  className="input input-bordered"
                  required
                />
                {/* {errors.name && (
                  <span className="text-red-600">Input Your Name Please</span>
                )} */}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email")}
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
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 12,
                  })}
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                {errors.password?.type === "minLength" && (
                  <p role="alert">Password Must least 6 characters</p>
                )}
              </div>

              <div className="form-control ">
                <button className="btn text-white font-semibold  bg-[#d1a054b3]">
                  Sign Up
                </button>
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
