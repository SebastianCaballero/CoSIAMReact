import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  return (
    <>
        <nav className='navbar'>
            <div className='container flex_space'>
              <div className='menu-icon' onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
              </div>

              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                  <Link to='/' onClick={closeMobileMenu}>
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link to='/cosiam' onClick={closeMobileMenu}>
                    CoSIAM
                  </Link>
                </li>
                <li>
                  <Link to='/noticias' onClick={closeMobileMenu}>
                    Noticias
                  </Link>
                </li>
                <li>
                  <Link to='/eventos' onClick={closeMobileMenu}>
                    Eventos
                  </Link>
                </li>
                <li>
                  <Link to='/comunidad' onClick={closeMobileMenu}>
                    Comunidad
                  </Link>
                </li>               
              </ul>

              <div className='login-area flex'>
              
                {/* <li>
                  <Link to='/sign-in'>
                    <i className='far fa-chevron-right'>Sign In</i>
                  </Link>                  
                </li>
                <li>
                <Link to='/register'>
                    <i className='far fa-chevron-right'>Register</i>
                  </Link>                  
                </li> */}
                <li>
                <Link to='/contact'>
                    <button className='primary-btn'>CONTACTO</button>
                  </Link>
                </li>
              </div>
            </div>
        </nav>

        <header className='d_flex'>
        <div className='container center'>
          <div className='logo log_1'>
            <img src='Images/1.svg' alt='' />
          </div>
        </div>
        <div className='container center'>
          <div className='logo log_2'>
            <img src='Images/2.svg' alt='' />
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
