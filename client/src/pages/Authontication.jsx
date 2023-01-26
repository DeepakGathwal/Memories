import React,{ useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { register, login } from '../redux/action';
import Registration from '../components/User/Registration';
import Login from '../components/User/Login';

const Authontication = () => {
    const [show, setShow] = useState([])
    const [inpots, setInputs] = useState({
        fullName: "",  address: "",  email: "",  password: "",  phone: ""
    })
    return (
            <div className='container-fluid bg-primary p-5'>
                <div className='section m-5 rounded-pill'>
                    {!show && 
                        <Registration inpots={inpots} setInputs={setInputs} register={register}/>
                       }
                    {show && <Login inpots={inpots} setInputs={setInputs}  login={login}/> }

                    <div>
                        {!show ? <h1 className='text-white text-center p-2' onClick={() => setShow(!show)}>Login</h1> : <h1 className='text-white text-center p-2' onClick={() => setShow(!show)}>Create Profile</h1>}
                    </div>
                </div>
            </div>
    )
}

export default Authontication;
