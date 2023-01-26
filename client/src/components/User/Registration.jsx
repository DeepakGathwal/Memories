import React from 'react'
import { useState } from 'react'
import {Form} from  'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Registration = ({ inpots, setInputs, register }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [img,setImg] = useState([])
    const message = useSelector((state) => state.register.loading)
    const handelChange = async (e) => {
        setInputs({ ...inpots, [e.target.name]: e.target.value })
    }
  const handelImage = async(e) =>{
        setImg(e.target.files[0])
    }
    const userData = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append ("fullName",inpots.fullName)
        formData.append ("phone",inpots.phone)
        formData.append ("address",inpots.address)
        formData.append("email",inpots.email)
        formData.append ("password",inpots.password)
        formData.append ("photo",img)
      await  dispatch(register(formData))
    }

    if (message == false) {
        navigate('/profile')
        window.localStorage.setItem(message,"Login")
    }
  

    return (
        <div className='d-flex justify-content-between flex-column bg-warning m-5 p-5 rounded'>
            <h1 className='text-white text-center p-2'>Register</h1>
            <form onSubmit={userData}>
                <Form.Control
                    className='form-control  border border-warning ml-5 mt-4 p-3 rounded-pill'
                    type="file"
                    placeholder='Photo'
                    name='photo'
                    onChange={(e) => handelImage(e)} />
                <Form.Control
                    className='form-control  border border-warning ml-5 mt-4 p-3 rounded-pill'
                    type="text"
                    placeholder='Enter Your Full Name'
                    name='fullName'
                    value={inpots.fullName}
                    onChange={handelChange} />
                <Form.Control
                    className='form-control border border-warning  ml-5 mt-4 p-3 rounded-pill'
                    type="text"
                    placeholder='Enter Your Country & City'
                    name='address'
                    value={inpots.address}
                    onChange={handelChange} />
                <Form.Control
                    className='form-control border border-warning ml-5 mt-4 p-3 rounded-pill'
                    type="email"
                    placeholder='Enter Your Email'
                    name='email'
                    // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    aria-describedby="emailHelp"
                    value={inpots.email}
                    onChange={handelChange} />
                <Form.Control
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
                <Form.Control
                    className='form-control border border-warning ml-5 mt-4 p-3 rounded-pill'
                    type="text"
                    placeholder='Enter Phone Number'
                    // pattern='[0-9]{10}'
                    name='phone'
                    value={inpots.phone}
                    onChange={handelChange}
                />
                <Form.Control className="blockquote m-5 p-3 rounded-pill toast-header text-white bg-primary ms-auto hover-zoom" type='submit' value="Register" />
            </form>
        </div>
    )
}

export default Registration
