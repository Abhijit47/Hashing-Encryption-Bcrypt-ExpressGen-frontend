import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarItem } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ loginDetails, setLoginDetails }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    setLoginDetails({});
    navigate('/');
  };

  return (
    <MDBContainer fluid>
      <MDBNavbar className='navbar navbar-expand-lg navbar-light bg-white mb-2'>
        <div className='container-fluid'>
          <button
            className='navbar-toggler'
            type='button'
            data-mdb-toggle='collapse'
            data-mdb-target='#navbarExample01'
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <i className='fas fa-bars'></i>
          </button>
          <div className='collapse navbar-collapse' id='navbarExample01'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem className='nav-item active'>
                <Link
                  className='nav-link border border-1 border-info rounded-2'
                  aria-current='page'
                  to='/'>
                  Home
                </Link>
              </MDBNavbarItem>
              {loginDetails && loginDetails.name ? (
                <MDBNavbarItem className='nav-item'>
                  <Link className='nav-link' to='/dashboard'>
                    Dashboard
                  </Link>
                </MDBNavbarItem>
              ) : (
                ''
              )}
            </ul>
          </div>
          {loginDetails && loginDetails.name ? (
            <button
              type='button'
              className='btn btn-danger'
              onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <>
              <Link
                to='/login'
                type='button'
                className='btn btn-primary me-2'
                onClick={handleLogout}>
                Login
              </Link>

              <Link
                to='/register'
                type='button'
                className='btn btn-success'
                onClick={handleLogout}>
                Register
              </Link>
            </>
          )}
        </div>
      </MDBNavbar>
    </MDBContainer>
  );
};

export default Navbar;
