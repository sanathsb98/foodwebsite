
import React, {  useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Pages/Signin.css'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../Firebase/Firebase'






function Signin() {

  //Creating State To Store Values Of Firebase:
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('')

  const adminemail = "sanathkarthika@gmail.com"
  const navigate = useNavigate();

   //Signup Program For Firebase:
  const register = async (e) =>{
  e.preventDefault();
   try{
    const user = await createUserWithEmailAndPassword(auth,email,password)
    alert('Registration Success')
    console.log(`firebase registration successful: ${user.providerId}`)
    

   }
   catch(error){
    alert(error.message)
   }
  }

  //Admin Validate And Signin Program:
  const AdminValidateAndSignin = async() =>{
    Signin();
    AdminValidate();
    
  }

  //Admin Validate:
  const AdminValidate = async() =>{
 
    const authen = getAuth();
    const loggeduseremail = authen.currentUser.email;
    
    if(adminemail===loggeduseremail){
      
      alert('Hello Admin') 
      navigate('/AdminPanel')
    }
  }
  
  


  //Signin:
  const Signin = async (e) =>{
   
    try{
     const user = await signInWithEmailAndPassword(auth,email,password)
     alert('Login Success')
    if(auth){
      navigate("/")
    }
     console.log(`firebase Login successful: ${user.providerId}`)
     AdminValidate();
     
 
    }
    catch(error){
     alert(error.message)
    }
   }




  return (
    <div className="Signin">
        <div className='login_container'>
        <Link to="/" >
        <img className='login_logo' src='https://www.dlf.pt/dfpng/maxpng/284-2840464_restaurant-menu-png.png' alt='login_logo'/>
         </Link>
            <h1>Sign-in</h1>
            <h5>E-mail</h5>

            <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <h5>password</h5>
            <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />

            <button onClick={AdminValidateAndSignin} className='signinButton' type='submit' >Sign In</button>

            <p>By signing-in you agree to our conditions of use & sale. Please see our privacy notice, our cookies notice and our interest based ads notice.</p>
            
            <button onClick={register} className='login_registerButton'>Create your account</button>
        </div>
    </div>
  )
}

export default Signin

