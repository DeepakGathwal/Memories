import React,{useContext, useState} from 'react'
import { UserContext } from '../ContextApi/ContextApi';
import CreatePostModel from './Models/CreatePostModel';

const NavBar = () => {
  const {user} = useContext(UserContext)
  const [isopen,setIsOpen] = useState(false)

  return (
    <>
<div className='container-fluid m-0 p-0'>
<div className='d-flex flex-row bg-primary justify-content-evenly'>
    <h1 className='text-white '>Hello</h1>
    <img className='mt-1'  src={`http://localhost:8080/upload/${user.image}`} alt='User Profile Pic' style={{borderRadius:"50%", height:"45px", width:'45px'}}/>
    <h3 className='text-black border bg-white border-dark rounded-pill mt-1' onClick={() => setIsOpen(true)}>+</h3>
 </div>
</div>

<CreatePostModel isopen={isopen} setIsOpen={setIsOpen}/>
</>
  )
}

export default NavBar
