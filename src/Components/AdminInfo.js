import React, { useState } from 'react'
import '../Components/AdminInfo.css'
import {getAuth} from 'firebase/auth'
import { onAuthStateChanged, signOut } from "firebase/auth";
import AdminPanel from '../Pages/AdminPanel';

function AdminInfo() {

  const[admininfo, setAdminInfo] = useState('')
   
   const auth = getAuth();

   onAuthStateChanged(auth,(currentUser)=>{
    setAdminInfo(currentUser)
    
})
  

  return (
  
       <AdminPanel AdminInfo={admininfo} />
   
  )
}

export default AdminInfo