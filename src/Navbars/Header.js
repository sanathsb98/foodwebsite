import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Navbars/Header.css'
import OfferNavbar from './OfferNavbar'
import {auth} from '../Firebase/Firebase'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import CartCount from '../Components/cartCount'






function Header() {
   

    
 const [user,setUser] = useState('')
 onAuthStateChanged(auth,(currentUser)=>{
     setUser(currentUser)
     
 })

 

 const handleAuthentication = async () =>{
    
     const useremail = await user.email;

     if(user){
          auth.signOut();
          
     }
 }

 


  return (
    
    <div className="Header">
        <OfferNavbar/>
          
          <div className='header_content'>

             <div className='header_left_links'>
             <Link style={{textDecoration:"none",color:"white"}} to="/">
              <img className='header_logo' src='https://www.dlf.pt/dfpng/maxpng/284-2840464_restaurant-menu-png.png' alt='header_logo'/>
              </Link>
              <div className='header_brand'>foodie</div>
             </div>

             <div className='header_middle_links'>
                  <span >Menu</span>
             </div>

             <div className='header_middle_links'>
                  <span>Deals</span>
             </div>
             
             
             <div className='header_cart_link'>
             <Link style={{textDecoration:"none",color:"white"}} to="/Cart">
                  <span className='cartlink1'>Cart </span>    
          
                  <span className='cartlink2'><CartCount/></span>  
                  </Link>  
             </div>

             
       
             

             <div className='header_right_links'>

                  <span>Hello {!user ? "Guest" : user?.email.replace('@gmail.com','')}</span>
                  <Link onClick={handleAuthentication} style={{textDecoration:"none",color:"white"}} to={!user && '/Signin'}>
                  <span>{user ? "Signout" : "Signin"}</span>
                  </Link>
                

             </div>
          </div>
    </div>
  )
}

export default Header