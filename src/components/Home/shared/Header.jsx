import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/header.css'


const Header = () => {

  const [isClose, setIsClose] = useState(true)
  

  const handleClick = () => setIsClose(!isClose)

  return (
    <header className='header'>
        
        <h1 className='header__logo'>
            <Link className='header__logo-link' to='/'>
              e-commerce
            </Link>
        </h1>  

        {/* <i 
          onClick={handleClick}
          className={'header__menu bx bx-menu'}
        ></i>  */}
     
        <div onClick={handleClick} className='navbar'>
        <nav className={`header__nav ${isClose && 'close__menu'}`}>
            <ul className='header__list'>
                <li className='header__item'>
                  <Link className='header__link' to='/user/login'>
                  <div className='icon'><i className='bx bx-user'></i> </div>
                  </Link>
                </li>
                <li className='header__item'>
                  <Link className='header__link' to='/purchases'>
                  <div className='icon'><i className='bx bx-archive'></i></div>
                  </Link>
                </li>
                <li className='header__item'>
                  <Link className='header__link' to='/cart'>
                  <div className='icon'><i className='bx bx-cart-download'></i></div>
                  </Link>
                </li>
            </ul>
        </nav>
        </div>
    </header>
  )
}

export default Header