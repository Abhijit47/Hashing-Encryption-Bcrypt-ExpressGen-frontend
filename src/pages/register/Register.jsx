import React, { useState } from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [registerDetails, setRegisterDetails] = useState({
    name: '',
    email: '',
    password: '',
  });

  // eslint-disable-next-line
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterDetails({
      ...registerDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        process.env.REACT_APP_REGISTER_URL,
        registerDetails
      );
      alert(res.data.message);
      navigate('/login');
    } catch (err) {
      alert(err.response.data.message);
      navigate('/login');
    }
  };

  return (
    <MDBContainer>
      <div className='row p-2 justify-content-center align-items-center'>
        <h1 className='text-center text-decoration-underline mb-4'>
          Registration
        </h1>
        <form
          className='col-lg-4 col-md-6 col-sm-8 col-8 p-3 border border-2 border-primary rounded-3'
          onSubmit={handleSubmit}
          method='POST'>
          <div className='form-outline mb-4'>
            <input
              name='name'
              type='text'
              id='name'
              className='form-control'
              value={registerDetails.name}
              onChange={handleChange}
            />
            <label className='form-label' htmlFor='name'>
              First name
            </label>
          </div>

          {/* <!-- Email input --> */}
          <div className='form-outline mb-4'>
            <input
              name='email'
              type='email'
              id='email'
              className='form-control'
              value={registerDetails.email}
              onChange={handleChange}
            />
            <label className='form-label' htmlFor='email'>
              Email address
            </label>
          </div>

          {/* <!-- Password input --> */}
          <div className='form-outline mb-4'>
            <input
              name='password'
              type='password'
              id='password'
              className='form-control'
              value={registerDetails.password}
              onChange={handleChange}
            />
            <label className='form-label' htmlFor='password'>
              Password
            </label>
          </div>

          {/* <!-- Checkbox --> */}
          <div className='form-check d-flex justify-content-center mb-4'>
            <input
              className='form-check-input me-2'
              type='checkbox'
              value=''
              id='form2Example33'
            />
            <label className='form-check-label' htmlFor='form2Example33'>
              Subscribe to our newsletter
            </label>
          </div>

          {/* <!-- Submit button --> */}
          <button type='submit' className='btn btn-primary btn-block mb-4'>
            Sign up
          </button>

          {/* <!-- Register buttons --> */}
          <div className='text-center'>
            <p className='mb-0'>
              have an account? <Link to='/login'>Login</Link>
            </p>
            <p className='mb-0'>or</p>
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
    </MDBContainer>
  );
};

export default Register;
