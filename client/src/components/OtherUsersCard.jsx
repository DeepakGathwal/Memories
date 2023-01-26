import React,{useState,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { allUsers } from '../redux/action'

const OtherUsersCard = () => {
  const dispatch = useDispatch()
  const [otherUser,setOtherUser] = useState([])
  

  dispatch(allUsers)
  useEffect(() =>{
    const Users = async() => {
       const data = await allUsers()
       setOtherUser(data.user)
      }
     Users()
     
    },[])

return(
   <>
 {!otherUser ? <><h1>Loading..</h1></>:<>
   {otherUser.map((el) => (
     <>
   <div className='d-inline-flex flex-row bg-white-50 p-2  mt-2 ' style={{ boxShadow:"1px 1px gray"}}>
      <img src="./images/default.jpg" alt='User Profile Pic' style={{borderRadius:"50%", height:"80px", width:'80px', border:"1px solid blue", padding:"1px"}}/>
      <div className='d-inline-flex flex-column ms-sm-3 mt-sm-3'>
      <h6 className='text-muted' style={{textTransform: "capitalize"}}>{el.fullName}</h6>
      <h6 className='text-muted'>{el.email}</h6>
    </div>
    <h6 className='ms-sm-1 mt-sm-4 text-muted'>Follow</h6>
      </div>
    </>
   ))}
     </>}
   </>
  )
}

export default OtherUsersCard
