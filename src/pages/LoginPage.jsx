import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import defaultValues from '../utils/defaultValues'
import { Link } from 'react-router-dom'
import './styles/login.css'


const LoginPage = () => {

  const [token, setToken] = useState()

  const { reset, handleSubmit, register } =  useForm()

  const submit = (data) => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
    axios.post(url, data)
        .then(res => {
            console.log(res.data)
            setToken(res.data.token)
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('name', `${res.data.user.firstName} ${res.data.user.lastName}`)
        })
        .catch(err => {
            console.log(err)
            localStorage.clear()
        })        
    reset(defaultValues)
  }

  const handleClick = () => {
    localStorage.clear()
    setToken()
  }

  if(localStorage.getItem('name')) {
    return ( 
        <div className='login'>
            <div className='login__img' >
              <img style={{width: '100px'}} src="https://i.pinimg.com/736x/de/59/4e/de594ec09881da3fa66d98384a3c72ff.jpg" alt="" />
            </div>
              <h2 className='login__name'>{localStorage.getItem('name')}</h2>
            <div className='login__btn' >
              <button className='login__logout' onClick={handleClick}>Logout</button>
            </div>
        </div>
    )
  } else {
    return (
        <div className='form'>
            <form className='form__submit' onSubmit={handleSubmit(submit)}>
                <h4 className='form__hello'>Hello Welcome</h4>
                <h2 className='form__login'>Form Login</h2>
                <div>
                    <label className='form__email' htmlFor="email">Email</label>
                    <input className='input' {...register('email')} type="email"id='email'/>
                </div>
                <div className='pasword'>
                    <label className='pasword__password' htmlFor="password">Password</label>
                    <input className='input' {...register('password')} type="password"id='password'/>
                </div>
                <button className='pasword__btn'><p className='leter'>Login</p></button>
                
                  <Link className='pasword__register' to='/user/register'><div className='switch-form'>"Don't have an account?"</div> <button className='switch-btn' type='button'>Sing up</button></Link>
            </form>   
        </div>
      )
  }
  
}

export default LoginPage