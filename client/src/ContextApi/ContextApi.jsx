import React, { useState, useEffect,createContext } from 'react'
import instance from '../CommonUrl/URL'
export const UserContext = createContext(null)
let firstRender = true
const ContextApi = ({children}) => {
    const [user,setUser] = useState([])
    const userData = async() => {
      const {data} = await instance.get(`memorable/user`,{
          withCredentials:true
        })
        return data
  }
  const refreshToken = async() => {
      const {data} = await instance.get(`memorable/refresh`,{
          withCredentials:true
        })
        return data
  }
    useEffect(() => {
       if(firstRender){
        firstRender = false
        userData().then((data) => setUser(data.user))
       }
       let interval = setInterval(() =>{
        refreshToken().then((data) => setUser(data.user))
       },7 * 14 * 3600000)
       return ()=>clearInterval(interval) 
    },[])

  return (

   <UserContext.Provider value={{
    user,
   }}>
    {children}
   </UserContext.Provider>
  )
}

export default ContextApi
