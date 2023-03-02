import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/header.css'


const Header = () => {

  const [isClose, setIsClose] = useState(true)

  const handleClick = ()  => setIsClose(!isClose)

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
     
        <div className='navbar'>
        <nav className={`header__nav ${isClose && 'close__menu'}`}>
            <ul className='header__list'>
                <li className='header__item'>
                  <Link className='header__link' to='/user/login'>
                  <i className='bx bx-user'></i> 
                  </Link>
                </li>
                <li className='header__item'>
                  <Link className='header__link' to='/purchases'>
                  <i className='bx bx-archive'></i>
                  </Link>
                </li>
                <li className='header__item'>
                  <Link className='header__link' to='/cart'>
                  <i className='bx bx-cart-download'></i>
                  </Link>
                </li>
            </ul>
        </nav>
        </div>
    </header>
  )
}

export default Header