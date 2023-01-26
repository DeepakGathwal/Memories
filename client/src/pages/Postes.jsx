import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { getPosts } from '../redux/action'
const Postes = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.allPosts)
  dispatch(getPosts())
  console.log(data);
  return (
   <>
  <h1>Profile</h1>
   </>
  )
}

export default Postes
