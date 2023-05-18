import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
  return (
    <div className='mb-10 '>

      <div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col gap-20 lg:flex-row">
            <div className="text-center lg:text-left w-1/2 mr-20">
              <img src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7893.jpg" alt="" />

            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <h1 className="text-3xl font-bold text-center">Login now!</h1>


                <form >
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold">Email</span>
                    </label>
                    <input type="email" placeholder="Email"
                      name="email" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Password" className="input input-bordered" />
                    <label className="label">
                      <a href="#" className="font-bold label-text-alt link link-hover">Forgot password?</a>
                    </label>
                  </div>
                  <div className="form-control mt-6">

                    <input className="btn btn-primary" type="submit" name="login" value="Login" id="" />
                  </div>
                </form>
                <p className="text-center mt-2">New to Toy Center? <Link className="black font-bold ml-1" to="/signup">Sign up</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;