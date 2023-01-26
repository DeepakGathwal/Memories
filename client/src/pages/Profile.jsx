import React,{ useEffect,useState }  from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import SelfDetailCard from '../components/User/SelfDetailCard'
import NavBar from '../components/NavBar';
import OtherUsersCard from '../components/OtherUsersCard';
import Postes from './Postes';
import Menu from './Menu';

const Profile = () => {
 

  return (
    <>
    <NavBar/>
   <div className='constainer'>
      <div className='row'>

    <div className='col-12 col-sm-3'>
    <Menu/>
    </div>
    <div className='col-12 col-sm-6'>
    <Postes/>
    </div>
    <div className='col-12 col-sm-3 mt-5'>
<SelfDetailCard/>
<div className='d-flex flex-column'>

<OtherUsersCard/>

</div>
    </div>
    
      </div>
    
    </div>
    </>
  )
}

export default Profile

