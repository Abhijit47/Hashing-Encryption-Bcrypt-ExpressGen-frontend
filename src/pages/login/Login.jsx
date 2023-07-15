import React, { useState } from 'react';
import axios from 'axios';
import { MDBContainer } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ setLoginDetails }) => {
  const [loginUser, setLogin] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...loginUser,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(process.env.REACT_APP_LOGIN_URL, loginUser);
      alert(res.data.message);
      setLoginDetails(res.data.data);
      navigate('/dashboard');
    } catch (err) {
      alert(err.response.data.message);
      navigate('/login');
    }
  };

  return (
    <MDBContainer className='mt-2'>
      <div className='row p-3 justify-content-center'>
        <h1 className='text-center text-decoration-underline mb-3'>
          User Login
        </h1>
        <div className='col-lg-5 col-md-8 col-sm-10 col-10 border border-2 border-success rounded-3'>
          <form
            className='p-2'
            onSubmit={handleSubmit}
            action='/'
            method='POST'>
            {/* <!-- Email input --> */}
            <div className='form-outline border border-1 border-dark-subtle rounded-1 mb-4'>
              <input
                name='email'
                type='email'
                id='email'
                className='form-control'
                value={loginUser.email}
                onChange={handleChange}
              />
              <label className='form-label' htmlFor='email'>
                Email address
              </label>
            </div>

            {/* <!-- Password input --> */}
            <div className='form-outline border border-1 border-dark-subtle rounded-1 mb-4'>
              <input
                name='password'
                type='password'
                id='password'
                className='form-control'
                value={loginUser.password}
                onChange={handleChange}
              />
              <label className='form-label' htmlFor='password'>
                Password
              </label>
            </div>

            {/* <!-- 2 column grid layout for inline styling --> */}
            <div className='row mb-4'>
              <div className='col d-flex justify-content-center'>
                {/* <!-- Checkbox --> */}
                <div className='form-check'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    id='form2Example34'
                  />
                  <label className='form-check-label' htmlFor='form2Example34'>
                    {' '}
                    Remember me{' '}
                  </label>
                </div>
              </div>

              <div className='col'>
                {/* <!-- Simple link --> */}
                <a href='#!'>Forgot password?</a>
              </div>
            </div>

            {/* <!-- Submit button --> */}
            <button type='submit' className='btn btn-primary btn-block mb-4'>
              Sign in
            </button>

            {/* <!-- Register buttons --> */}
            <div className='text-center'>
              <p>
                Not a member? <Link to='/register'>Register</Link>
              </p>
              <p>or sign up with:</p>
              <button
                type='button'
                className='btn btn-secondary btn-floating mx-1'>
                <i className='fab fa-facebook-f'></i>
              </button>

              <button
                type='button'
                className='btn btn-secondary btn-floating mx-1'>
                <i className='fab fa-google'></i>
              </button>

              <button
                type='button'
                className='btn btn-secondary btn-floating mx-1'>
                <i className='fab fa-twitter'></i>
              </button>

              <button
                type='button'
                className='btn btn-secondary btn-floating mx-1'>
                <i className='fab fa-github'></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </MDBContainer>
  );
};

export default Login;
