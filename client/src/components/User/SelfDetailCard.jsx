import React,{useContext} from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { UserContext } from '../../ContextApi/ContextApi'

const SelfDetailCard = () => {
  const {user} = useContext(UserContext)
  const [posts,setPosts] = useState(user)
 
  useEffect(() =>{
    setPosts(user)
  },[])
  const logoutButton = async() =>{

  }
  return (
   <>
   {!posts ? <><h1>Loading..</h1></>:<>
   <div className='d-inline-flex flex-row bg-white-50 p-2 mb-5' style={{ boxShadow:"2px 2px gray"}}>
     <img src={`http://localhost:8080/upload/${user.image}`} alt='User Profile Pic' style={{borderRadius:"50%", height:"80px", width:'80px', border:"1px solid blue", padding:"1px"}}/>
    <div className='d-inline-flex flex-column ms-sm-3 mt-sm-3'>
    <h6 className='text-dark' style={{textTransform: "capitalize"}}>{user.fullName}</h6>
    <h6 className='text-dark'>{user.email}</h6>
    </div>
   <h6 className='ms-sm-1 mt-sm-4 text-dark' onClick={logoutButton}>Switch</h6>
     </div>
        
   </>}
   </>
  )
}

export default SelfDetailCard
