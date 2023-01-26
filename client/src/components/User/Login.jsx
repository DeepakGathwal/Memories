import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = ({ inpots, setInputs, login }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const message = useSelector((state) => state.login.loading)


    const handelChange = async (e) => {
        setInputs({ ...inpots, [e.target.name]: e.target.value })
    }
    // Login Function
    const userLogin = async (e) => {
        e.preventDefault()
        console.log(inpots);
        dispatch(login(inpots))
    }
    // If Login or Regsitation Success then it will navigate on nextPage
    if (message == false) {
        navigate('/profile')
        window.localStorage.setItem(message,"Login")
    }


    return (
        <div className='d-flex justify-content-between flex-column  m-5 p-5 rounded'>
            <h1 className='text-white text-center p-2 '>Login</h1>
            <form onSubmit={userLogin}>
               
                <input
                    className='form-control border border-warning ml-5 mt-4 p-3 rounded-pill'
                    type="email"
                    placeholder='Enter Your Email'
                    name='email'
                    // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    aria-describedby="emailHelp"
                    value={inpots.email}
                    onChange={handelChange} />
                <input
                    className='form-control border border-warning ml-5 mt-4 p-3 rounded-pill'
                    type="password"
                    aria-describedby="passwordHelpBlock"
                    placeholder='Enter Your Password'
                    // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                    name='password'
                    value={inpots.password}
                    onChange={handelChange}
                />
                <input className="blockquote m-5 p-3 rounded-pill toast-header text-white bg-primary ms-auto hover-zoom" type='submit' value="Login" />

            </form>
        </div>
    )
}

export default Login
